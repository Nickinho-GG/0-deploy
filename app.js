// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Previne reload da página

        // Pega os valores do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Cria objeto com os dados
        const userData = {
            nome: nome,
            email: email,
            senha: senha,
            dataLogin: new Date().toISOString()
        };

        try {
            // IMPORTANTE: Estas variáveis vêm da Vercel (Environment Variables)
            // Em desenvolvimento local, funciona sem banco (modo demo)
            
            // Tenta usar variáveis de ambiente da Vercel
            const apiUrl = typeof process !== 'undefined' && process.env?.API_URL;
            const apiKey = typeof process !== 'undefined' && process.env?.API_KEY;

            // Se tiver credenciais do MongoDB, salva no banco
            if (apiUrl && apiKey) {
                console.log('📡 Salvando no MongoDB Atlas...');
                
                const response = await fetch(`${apiUrl}/action/insertOne`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': apiKey
                    },
                    body: JSON.stringify({
                        dataSource: 'Cluster0',
                        database: 'logindb',
                        collection: 'usuarios',
                        document: userData
                    })
                });

                const result = await response.json();
                
                if (response.ok) {
                    console.log('✅ Salvo no MongoDB:', result);
                    showMessage('✅ Login realizado e salvo no banco de dados!', 'success');
                } else {
                    throw new Error('Falha ao salvar no banco');
                }
            } else {
                // Modo DEMO (sem MongoDB configurado)
                console.log('📋 Modo DEMO - Dados não salvos (MongoDB não configurado)');
                console.log('Dados do usuário:', userData);
                
                // Simula delay de rede
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                showMessage('✅ Login realizado! (Modo DEMO - configure MongoDB na Vercel)', 'success');
            }
            
            // Limpa o formulário
            form.reset();

            // Em produção real, você redirecionaria:
            // setTimeout(() => {
            //     window.location.href = '/dashboard.html';
            // }, 2000);

        } catch (error) {
            showMessage('❌ Erro ao fazer login. Tente novamente.', 'error');
            console.error('Erro:', error);
        }
    });

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.classList.remove('hidden');

        // Remove mensagem após 5 segundos
        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 5000);
    }
});
