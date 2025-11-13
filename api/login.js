// Vercel Serverless Function para salvar dados no MongoDB Atlas
import { MongoClient } from 'mongodb';

// Conexão com MongoDB (reutilizada entre chamadas)
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase(uri) {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = client.db('logindb');

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}

export default async function handler(req, res) {
    // Apenas aceita POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    try {
        // Pega a connection string das variáveis de ambiente
        const MONGODB_URI = process.env.MONGODB_URI;

        // Valida se a variável está configurada
        if (!MONGODB_URI) {
            console.error('⚠️ MONGODB_URI não configurada');
            return res.status(500).json({ 
                error: 'MongoDB não configurado. Configure MONGODB_URI na Vercel.',
                configured: false
            });
        }

        // Pega os dados do formulário
        const { nome, email, senha } = req.body;

        // Valida os dados
        if (!nome || !email || !senha) {
            return res.status(400).json({ 
                error: 'Todos os campos são obrigatórios (nome, email, senha)' 
            });
        }

        // Prepara o documento para salvar no MongoDB
        const userData = {
            nome,
            email,
            senha, // ⚠️ Em produção real, use hash (bcrypt)
            dataLogin: new Date().toISOString(),
            userAgent: req.headers['user-agent'] || 'Desconhecido',
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'Desconhecido'
        };

        console.log('📡 Conectando ao MongoDB Atlas...');

        // Conecta ao banco de dados
        const { db } = await connectToDatabase(MONGODB_URI);
        
        console.log('✅ Conectado! Salvando dados...');

        // Insere o documento na collection 'usuarios'
        const result = await db.collection('usuarios').insertOne(userData);

        console.log('✅ Dados salvos no MongoDB:', result);

        // Retorna sucesso
        return res.status(200).json({
            success: true,
            message: 'Login realizado com sucesso!',
            insertedId: result.insertedId,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('❌ Erro:', error);
        return res.status(500).json({
            success: false,
            error: 'Erro ao processar login',
            details: error.message
        });
    }
}
