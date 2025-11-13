# 🔐 Sistema de Login com MongoDB Atlas

Página de login moderna com integração MongoDB Atlas e deploy na Vercel.

## 📁 Estrutura do Projeto

```
0-deploy/
├── api/
│   └── login.js        # Vercel Serverless Function (backend)
├── index.html          # Página de login (frontend)
├── style.css           # Estilos
├── app.js              # Lógica JavaScript do frontend
├── vercel.json         # Configuração da Vercel
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore          # Arquivos ignorados pelo Git
├── INSTRUCOES.md       # Guia completo de configuração
└── README.md           # Este arquivo
```

## 🚀 Como Funciona

### Arquitetura
1. **Frontend** (`index.html` + `app.js`) - Formulário de login
2. **Backend** (`api/login.js`) - Vercel Serverless Function que salva no MongoDB
3. **Banco de Dados** - MongoDB Atlas (cloud)

### Fluxo de Dados
```
Usuário preenche formulário 
    ↓
JavaScript (app.js) envia POST para /api/login
    ↓
Vercel Function (api/login.js) processa
    ↓
MongoDB Atlas Data API salva os dados
    ↓
Resposta retorna para o usuário
```

## 🛠️ Configuração

### 1️⃣ MongoDB Atlas

Você precisa configurar as seguintes informações no MongoDB Atlas:

#### Passos Rápidos:
1. Crie conta em https://www.mongodb.com/cloud/atlas/register
2. Crie um cluster **gratuito (M0)**
3. Crie o database `logindb` e collection `usuarios`
4. Habilite a **Data API** em "App Services"
5. Copie estas 3 informações:

**O que você precisa copiar:**
- ✅ **API_URL** - URL da Data API (ex: `https://data.mongodb-api.com/app/data-xxxxx/endpoint/data/v1`)
- ✅ **API_KEY** - API Key gerada na Data API
- ✅ **DATA_SOURCE** - Nome do cluster (geralmente `Cluster0`)

📖 **Guia detalhado completo em:** [`INSTRUCOES.md`](./INSTRUCOES.md)

### 2️⃣ Vercel Deploy

1. Faça push deste código para o GitHub
2. Importe o projeto na Vercel (https://vercel.com)
3. **Configure as variáveis de ambiente:**
   - `API_URL` - URL da Data API do MongoDB
   - `API_KEY` - API Key do MongoDB
   - `DATA_SOURCE` - Nome do cluster (ex: `Cluster0`)
   - `DATABASE` - Nome do banco (padrão: `logindb`)
   - `COLLECTION` - Nome da coleção (padrão: `usuarios`)
4. Deploy!

### 3️⃣ Desenvolvimento Local

```powershell
# 1. Clone o repositório
git clone https://github.com/Nickinho-GG/0-deploy.git
cd 0-deploy

# 2. Copie o arquivo de exemplo
copy .env.example .env

# 3. Edite .env com suas credenciais do MongoDB Atlas

# 4. Instale a Vercel CLI (se ainda não tiver)
npm install -g vercel

# 5. Execute localmente
vercel dev
```

Acesse: http://localhost:3000

## 📋 Variáveis de Ambiente Necessárias

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `MONGODB_URI` | Connection String do MongoDB Atlas | `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/?appName=Cluster0` |

⚠️ **Nunca commite o arquivo `.env` para o Git!** (já está no `.gitignore`)

### Como obter a MONGODB_URI:

1. Acesse MongoDB Atlas → Database → Clusters
2. Clique em **"Connect"** no seu cluster
3. Escolha **"Connect your application"**
4. Copie a **Connection String**
5. Substitua `<password>` pela sua senha real

## 🧪 Testando

1. Abra o site (local ou na Vercel)
2. Preencha o formulário:
   - Nome: Seu nome
   - Email: seu@email.com
   - Senha: qualquer senha
3. Clique em "Entrar"
4. Verifique no MongoDB Atlas se os dados foram salvos

## 🔒 Segurança

⚠️ **Este é um projeto de exemplo educacional!**

Para produção real, você DEVE:
- [ ] Usar **hash de senha** (bcrypt, argon2)
- [ ] Adicionar **validação de email**
- [ ] Implementar **rate limiting**
- [ ] Adicionar **CSRF protection**
- [ ] Usar **HTTPS** (Vercel já faz isso automaticamente)
- [ ] Não armazenar senhas em texto puro

## 🛠️ Tecnologias

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Vercel Serverless Functions (Node.js)
- **Database:** MongoDB Atlas
- **Deploy:** Vercel
- **API:** MongoDB Data API (REST)

## 📚 Recursos Úteis

- [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/)
- [MongoDB Data API](https://www.mongodb.com/docs/atlas/app-services/data-api/)
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)

## 📝 Licença

MIT - Projeto educacional livre para uso

---

**Criado em:** Novembro 2025  
**Repositório:** https://github.com/Nickinho-GG/0-deploy
