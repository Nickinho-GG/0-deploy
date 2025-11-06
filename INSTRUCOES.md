# 📖 GUIA COMPLETO - MongoDB Atlas + Vercel

## ✅ PARTE 1: JÁ FEITO!

- ✅ Página de login criada
- ✅ Código no GitHub: https://github.com/Nickinho-GG/0-deploy

---

## 🗄️ PARTE 2: CONFIGURAR MONGODB ATLAS (15 minutos)

### Passo 1: Criar Conta
1. Acesse: **https://www.mongodb.com/cloud/atlas/register**
2. Crie conta (pode usar Google para ser mais rápido)
3. Escolha o plano **FREE** (M0 - grátis para sempre)

### Passo 2: Criar Database
1. Após login, clique em **"Create"** (ou "Build a Database")
2. Escolha **"M0 FREE"**
3. Escolha:
   - **Provider**: AWS
   - **Region**: São Paulo (sa-east-1) ou a mais próxima
4. **Cluster Name**: deixe `Cluster0` mesmo
5. Clique em **"Create Cluster"** (demora 3-5 minutos)

### Passo 3: Criar Usuário do Banco
1. Vai aparecer uma tela pedindo para criar usuário
2. **Username**: `admin` (ou o que quiser)
3. **Password**: Clique em **"Autogenerate Secure Password"**
4. **⚠️ IMPORTANTE**: Copie e salve a senha em algum lugar seguro!
5. Clique em **"Create User"**

### Passo 4: Liberar Acesso (IP)
1. Ainda na mesma tela, role para baixo
2. Clique em **"Add My Current IP Address"**
3. **Depois** clique em **"Add a Different IP Address"**
4. Digite: `0.0.0.0/0` (permite acesso de qualquer lugar - necessário para Vercel)
5. Descrição: `Vercel`
6. Clique em **"Finish and Close"**

### Passo 5: Acessar o Cluster
1. Clique em **"Go to Database"** (ou "Browse Collections")
2. Clique em **"Add My Own Data"**
3. **Database name**: `logindb`
4. **Collection name**: `usuarios`
5. Clique em **"Create"**

### Passo 6: Pegar as Credenciais (IMPORTANTE!)
1. Volte para a tela principal (clique em "Database" no menu lateral)
2. Clique no botão **"Connect"** no seu cluster
3. Escolha **"Drivers"**
4. Copie a **connection string** (algo como):
   ```
   mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. **Substitua `<password>` pela senha que você copiou no Passo 3**
6. **Salve essa string completa!** Vamos usar na Vercel

### Passo 7: Habilitar Data API (Acesso via HTTP)
1. No menu lateral, clique em **"Data API"** (pode estar em "App Services")
2. Clique em **"Enable Data API"**
3. Clique em **"Create API Key"**
4. **⚠️ COPIE E SALVE** a API Key (só mostra uma vez!)
5. A **URL base** também será mostrada (algo como):
   ```
   https://data.mongodb-api.com/app/data-xxxxx/endpoint/data/v1
   ```
6. **Salve essa URL também!**

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
