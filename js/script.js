// SELEÇÃO DE ELEMENTOS PARA ANIMAÇÃO
const elementos = document.querySelectorAll(".animacao");
const elementos2 = document.querySelectorAll(".animacao2");
const barras = document.querySelectorAll(".progresso");

// OBSERVADOR DE INTERSEÇÃO
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animacao-mostrar');
        }
    });
});

const myObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animacao2-mostrar');
        }
    });
});

const barraObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const barra = entry.target;

            // Define a largura baseada na classe (pode adicionar outras se quiser)
            if (barra.classList.contains("avancado")) {
                barra.style.width = "90%";
            } else if (barra.classList.contains("intermediario")) {
                barra.style.width = "65%";
            } // você pode adicionar "iniciante", "básico", etc.
        }
    });
});

// APLICANDO O OBSERVADOR EM CADA ELEMENTO
elementos.forEach((elemento) => {
    myObserver.observe(elemento); 
});

elementos2.forEach((elemento) => {
    myObserver2.observe(elemento);
});

barras.forEach((barra) => {
    barra.style.width = "0"; // começa zerada
    barraObserver.observe(barra);
});
