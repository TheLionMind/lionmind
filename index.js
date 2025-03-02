
       function calculateTokens(inputId, resultId, bonusId, totalId) {
    let bnb = parseFloat(document.getElementById(inputId).value) || 0;
    let tokens = bnb / 0.0001;
    let bonus = bnb >= 0.25 ? tokens * 0.01 : 0;
    let total = tokens + bonus;

    // Formatação para exibir casas decimais no padrão brasileiro
    let formatNumber = (num) => num.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById(resultId).innerText = `Você receberá: ${formatNumber(tokens)} LMND`;
    document.getElementById(bonusId).innerText = `Bônus: ${formatNumber(bonus)} LMND`;
    document.getElementById(totalId).innerText = `Total: ${formatNumber(total)} LMND`;
}

        
        function showLogin() {
            document.getElementById('main-page').classList.add('hidden');
            document.getElementById('login-page').classList.remove('hidden');
        }
        
        function login() {
            let user = document.getElementById('username').value;
            let pass = document.getElementById('password').value;
            if (user && pass) {
                localStorage.setItem('user', user);
                localStorage.setItem('balance', localStorage.getItem(user) || 0);
                showDashboard(user);
            }
        }
        
        function showDashboard(user) {
            document.getElementById('login-page').classList.add('hidden');
            document.getElementById('dashboard-page').classList.remove('hidden');
            document.getElementById('user-name').innerText = user;
            document.getElementById('user-balance').innerText = localStorage.getItem(user);
        }
        
        function finalizePurchase() {
            document.getElementById('purchase-info').classList.remove('hidden');
        }

      function updateProgress(percent) {
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = percent + "%";
    progressBar.innerText = percent + "%";
}

updateProgress(10);

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("popstate", function (event) {
        if (event.state) {
            showPage(event.state.page, false);
        }
    });
});

function showPage(pageId, pushToHistory = true) {
    // Esconde todas as páginas
    document.querySelectorAll(".container").forEach(function (page) {
        page.classList.add("hidden");
    });

    // Mostra a página solicitada
    document.getElementById(pageId).classList.remove("hidden");

    // Atualiza o histórico do navegador
    if (pushToHistory) {
        history.pushState({ page: pageId }, "", `#${pageId}`);
    }
}

// Funções para navegação
function showLogin() {
    showPage("login-page");
}

function showDashboard() {
    showPage("dashboard-page");
}

function showHome() {
    showPage("main-page");
}
      
  
