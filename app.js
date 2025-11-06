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
            // Aqui você fará a chamada para o MongoDB (Semana 2)
            // Por enquanto, vamos simular um login bem-sucedido
            
            console.log('Dados do usuário:', userData);
            
            // Simula delay de rede
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Mostra mensagem de sucesso
            showMessage('✅ Login realizado com sucesso!', 'success');
            
            // Limpa o formulário
            form.reset();

            // Em produção, você redirecionaria para outra página:
            // window.location.href = '/dashboard.html';

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

/* ========================================
   PARA CONECTAR COM MONGODB (SEMANA 2)
   ========================================
   
   Substitua o bloco try/catch acima por:

   try {
       const response = await fetch('API_URL_DO_MONGODB/action/insertOne', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               'api-key': 'SUA_API_KEY'
           },
           body: JSON.stringify({
               dataSource: 'Cluster0',
               database: 'logindb',
               collection: 'usuarios',
               document: userData
           })
       });

       if (response.ok) {
           showMessage('✅ Login realizado com sucesso!', 'success');
           form.reset();
       } else {
           throw new Error('Falha na requisição');
       }
   } catch (error) {
       showMessage('❌ Erro ao fazer login. Tente novamente.', 'error');
       console.error('Erro:', error);
   }

   ========================================
*/
