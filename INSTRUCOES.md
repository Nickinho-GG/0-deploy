# 📖 GUIA COMPLETO - MongoDB Atlas + Vercel

## ✅ PARTE 1: JÁ FEITO!

- ✅ Página de login criada
- ✅ Código no GitHub: https://github.com/Nickinho-GG/0-deploy

---

## 🗄️ PARTE 2: CONFIGURAR MONGODB ATLAS (Nova Interface 2025)

⭐ **IMPORTANTE:** O MongoDB atualizou a interface! Veja o guia completo atualizado em: **`MONGODB-SETUP-2025.md`**

### 📋 RESUMO DO QUE VOCÊ PRECISA FAZER:

#### ✅ Passo 1: Criar Conta (se ainda não tiver)
1. Acesse: **https://www.mongodb.com/cloud/atlas/register**
2. Crie conta (pode usar Google)
3. Escolha o plano **FREE** (M0)

#### ✅ Passo 2: Criar Cluster
1. Menu **"DATABASE"** → **"Clusters"** → **"Create"**
2. Escolha **"M0 FREE"**
3. Provider: **AWS** | Region: **São Paulo**
4. Cluster Name: `Cluster0`
5. Aguarde 3-5 minutos

#### ✅ Passo 3: Criar Database e Collection
1. **"Browse Collections"** → **"Add My Own Data"**
2. Database: `logindb`
3. Collection: `usuarios`

#### ✅ Passo 4: Liberar Acesso (Network)
1. Menu **"SECURITY"** → **"Database & Network Access"**
2. **"Add IP Address"** → **"Allow Access From Anywhere"**
3. Isso adiciona `0.0.0.0/0` automaticamente

#### ✅ Passo 5: Criar Usuário
1. Menu **"SECURITY"** → **"Project Identity & Access"**
2. **"Add New Database User"**
3. Username: `admin`
4. Password: **"Autogenerate Secure Password"**
5. **⚠️ COPIE A SENHA!**

#### ✅ Passo 6: Habilitar Data API ⭐ (CRUCIAL!)
1. Menu **"SERVICES"** → **"App Services"**
2. **"Create a New App"** ou use existente
3. No App Service, vá em **"Data API"**
4. **"Enable Data API"** (se não estiver habilitado)
5. **"Create API Key"**
6. **⚠️ COPIE:**
   - **API Key** (exemplo: `abc123xyz...`)
   - **Data API URL** (exemplo: `https://data.mongodb-api.com/app/data-xxxxx/endpoint/data/v1`)

---

### 🎯 ME ENVIE ESTAS 3 INFORMAÇÕES:

```
1. Data API URL: https://data.mongodb-api.com/app/data-XXXXX/endpoint/data/v1
2. API Key: sua_api_key_aqui
3. Cluster Name: Cluster0
```

📖 **Passo a passo DETALHADO com prints da nova interface:** Veja `MONGODB-SETUP-2025.md`

---

## 🚀 PARTE 3: DEPLOY NA VERCEL (10 minutos)

### Passo 1: Criar Conta
1. Acesse: **https://vercel.com/signup**
2. Clique em **"Continue with GitHub"**
3. Autorize a Vercel a acessar seus repositórios

### Passo 2: Importar Projeto
1. No dashboard da Vercel, clique em **"Add New..."** → **"Project"**
2. Procure o repositório **"0-deploy"** na lista
3. Clique em **"Import"**

### Passo 3: Configurar Deploy
1. **Framework Preset**: Deixe em "Other" (é HTML simples)
2. **Build and Output Settings**: Deixe tudo padrão (não precisa mexer)
3. **NÃO CLIQUE EM "Deploy" AINDA!**

### Passo 4: Adicionar Variáveis de Ambiente (SEGREDOS)
1. Expanda a seção **"Environment Variables"**
2. Adicione **3 variáveis**:

   **Variável 1:**
   - **Name**: `MONGODB_URI`
   - **Value**: Cole a connection string completa (do Passo 6 do MongoDB)
   
   **Variável 2:**
   - **Name**: `API_URL`
   - **Value**: Cole a URL da Data API (do Passo 7 do MongoDB)
   
   **Variável 3:**
   - **Name**: `API_KEY`
   - **Value**: Cole a API Key (do Passo 7 do MongoDB)

3. Clique em **"Add"** para cada uma

### Passo 5: Deploy!
1. Agora sim, clique em **"Deploy"**
2. Aguarde 1-2 minutos (vai aparecer uma animação)
3. Quando terminar, clique em **"Visit"** ou copie o link

🎉 **SEU SITE ESTÁ NO AR!**

O link será algo como: `https://0-deploy-xxxxx.vercel.app`

---

## 🔧 PARTE 4: ATUALIZAR O CÓDIGO PARA USAR MONGODB

Agora precisa conectar o formulário com o banco. Vou atualizar o arquivo `app.js` para você:

**O QUE VOCÊ VAI FAZER:**
1. Abra o arquivo `app.js` no VS Code
2. Eu já vou atualizar ele agora para conectar com MongoDB
3. Depois você faz:
   ```powershell
   git add .
   git commit -m "feat: integra MongoDB Atlas"
   git push
   ```
4. A Vercel vai detectar automaticamente e fazer deploy de novo!

---

## ❓ PROBLEMAS COMUNS

### "Cannot read environment variables"
- **Solução**: Verifique se adicionou as 3 variáveis na Vercel corretamente

### "CORS error"
- **Solução**: A Data API do MongoDB já tem CORS habilitado, mas certifique-se de estar usando a URL da Data API (não a connection string)

### "Authentication failed"
- **Solução**: Verifique se:
  - Substituiu `<password>` pela senha real na connection string
  - A API Key está correta
  - O IP `0.0.0.0/0` está liberado no MongoDB Atlas

### Site não atualiza após push
- **Solução**: Vá no dashboard da Vercel e veja os logs do deploy. Pode ter dado erro.

---

## 📝 RESUMO DOS LINKS IMPORTANTES

| O Que | Link |
|-------|------|
| **Seu GitHub** | https://github.com/Nickinho-GG/0-deploy |
| **MongoDB Atlas** | https://cloud.mongodb.com |
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **Seu site (após deploy)** | *(copie da Vercel)* |

---

## ✅ CHECKLIST

### MongoDB Atlas
- [ ] Conta criada
- [ ] Cluster criado (M0 FREE)
- [ ] Usuário criado e senha salva
- [ ] IP `0.0.0.0/0` liberado
- [ ] Database `logindb` e collection `usuarios` criadas
- [ ] Connection string copiada (com senha substituída)
- [ ] Data API habilitada
- [ ] API Key copiada
- [ ] URL da Data API copiada

### Vercel
- [ ] Conta criada (com GitHub)
- [ ] Repositório `0-deploy` importado
- [ ] 3 variáveis de ambiente adicionadas
- [ ] Deploy realizado
- [ ] Site no ar e funcionando

### Código
- [ ] Arquivo `app.js` atualizado (eu faço agora)
- [ ] Push para GitHub
- [ ] Vercel fez redeploy automático

---

**🎯 Agora vou atualizar o `app.js` para você!**
