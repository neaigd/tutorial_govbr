// Script para persistir o estado dos checkboxes (opcional, usando localStorage)
document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.step-checkbox');
    checkboxes.forEach(checkbox => {
        // Carregar estado salvo
        if (localStorage.getItem(checkbox.id) === 'true') {
            checkbox.checked = true;
        }
        // Salvar estado ao mudar
        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Lógica para abrir/fechar "details" e girar a seta
     const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(details => {
        details.addEventListener('toggle', function() {
            // A rotação da seta já é feita por CSS, mas pode-se adicionar mais lógicas aqui se necessário.
        });
    });

    // Dark mode toggle logic
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme or default to dark
    if (currentTheme) {
        body.className = currentTheme;
    } else {
        body.className = 'dark-theme'; // Default to dark theme
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.className = 'light-theme';
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.className = 'dark-theme';
            localStorage.setItem('theme', 'dark-theme');
        }
         // Update icon based on current theme after toggle
        updateThemeIcon();
    });

    // Function to update the icon based on the current theme
    function updateThemeIcon() {
         if (body.classList.contains('dark-theme')) {
             themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.5-1.5l-1.591 1.591M3 12H5.25m-.386-6.364l1.591 1.591M12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              </svg>`; // Moon icon for dark mode
         } else {
             themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 0 18 12a9.72 9.72 0 0 0-3.752 3.002c1.359.429 2.675.66 4.002.66s2.643-.231 4.002-.66ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>`; // Sun icon for light mode
         }
    }

    // Initial icon set
    updateThemeIcon();

});