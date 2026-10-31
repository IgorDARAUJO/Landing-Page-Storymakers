const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// 1. Selecionamos todos os botões e todas as fotos
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// 2. Para cada botão, vamos adicionar um "ouvinte" de clique
filterButtons.forEach(button => {
    
    button.addEventListener('click', () => {
        
        // --- PARTE A: Estilo do Botão ---
        // Primeiro, tiramos a classe 'active' (borda amarela) de todos os botões
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Em seguida, colocamos a classe 'active' SÓ no botão que foi clicado agora
        button.classList.add('active');

        // --- PARTE B: Filtrando as Fotos ---
        // Descobrimos qual é a categoria que o usuário quer ver lendo o data-filter do botão
        const filterValue = button.getAttribute('data-filter');

        // Olhamos para cada foto individualmente...
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-categoria');

            // Se o botão clicado for "todos" OU se a categoria da foto for igual à do botão...
            if (filterValue === 'todos' || filterValue === itemCategory) {
                // Nós mostramos a foto
                item.style.display = 'block';
            } else {
                // Se não for, nós escondemos a foto
                item.style.display = 'none';
            }
        });
        
    });
});