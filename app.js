// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const messageDiv = document.getElementById('message');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Previne reload da página

        // Desabilita o botão durante o envio
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Pega os valores do formulário
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value;

        // Validação básica
        if (!nome || !email || !senha) {
            showMessage('❌ Por favor, preencha todos os campos!', 'error');
            submitButton.disabled = false;
            submitButton.textContent = 'Entrar';
            return;
        }

        try {
            console.log('📡 Enviando dados para o servidor...');

            // Chama a API serverless da Vercel
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    email,
                    senha
                })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                console.log('✅ Login realizado com sucesso!', result);
                showMessage('✅ Login realizado e salvo no banco de dados!', 'success');
                
                // Limpa o formulário
                form.reset();

                // Opcional: Redirecionar após login
                // setTimeout(() => {
                //     window.location.href = '/dashboard.html';
                // }, 2000);
            } else {
                // Erro retornado pela API
                const errorMsg = result.error || 'Erro desconhecido';
                
                if (result.configured === false) {
                    // MongoDB não configurado - modo demo
                    console.log('📋 Modo DEMO - MongoDB não configurado');
                    showMessage('✅ Login realizado! (Modo DEMO - configure MongoDB na Vercel)', 'warning');
                    form.reset();
                } else {
                    throw new Error(errorMsg);
                }
            }

        } catch (error) {
            console.error('❌ Erro ao fazer login:', error);
            showMessage(`❌ Erro ao fazer login: ${error.message}`, 'error');
        } finally {
            // Reabilita o botão
            submitButton.disabled = false;
            submitButton.textContent = 'Entrar';
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
