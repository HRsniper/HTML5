/*
// animaçao
const elementos=document.querySelectorAll('[data-animacao]');
const animacao='animacaoPronta';

function animacaoScroll() {
    const RefScroll=window.pageYOffset+((window.innerHeight*3)/4); // 3/4 da janela
    elementos.forEach( function(elemento) {
        if(RefScroll > elemento.offsetTop) {
            elemento.classList.add(animacao);
        }
        else {
            elemento.classList.remove(animacao);
        }
    });
}

if (elementos.length) {
    window.addEventListener('scroll',function(){
        animacaoScroll();
    })
}
// animaçao end
*/
/*
//troca aleatoria de imgs
function trocar(){
    var num=Math.floor(Math.random()*2);
    var imgs=['img400px.jpg','img200px.jpg'];
    document.getElementsByClassNameId("bannerHome").src=imgs[num];
}
function iniciar() {
    trocar();
}
window.addEventListener("load",iniciar);
//troca aleatoria de imgs end
*/
//registro modal
function registro() {
    const open = document.getElementById('registrarSE');
    const close = document.getElementById('btnFecharModal');
    const registro = document.getElementById('registro');


    open.onclick = function () {
        registro.classList.remove("esconderRegistro");
        registro.classList.add("mostraRegistro");
        // registro.style.display = "flex";
    }

    close.onclick = function () {
        registro.classList.add("esconderRegistro");
        registro.classList.remove("mostraRegistro");
        // registro.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == registro) {
            registro.classList.add("esconderRegistro");
            registro.classList.remove("mostraRegistro");
            // registro.style.display = "none";
        }
    }
    
    // window.onmouseover = function (event) {
    //     registro.style.cursor = "pointer";
    // }
}

function logar() {

    const openL = document.getElementById('logarSE');
    const closeL = document.getElementById('btnFecharModal2');
    const Logar = document.getElementById('logar');

    openL.onclick = function () {
        Logar.classList.remove("esconderRegistro");
        Logar.classList.add("mostraRegistro");
        // registro.style.display = "flex";
    }

    closeL.onclick = function () {
        Logar.classList.add("esconderRegistro");
        Logar.classList.remove("mostraRegistro");
        // registro.style.display = "none";
    }
    /*
    window.onclick = function (event) {
        if (event.target == Logar) {
            Logar.classList.add("esconderRegistro");
            Logar.classList.remove("mostraRegistro");
            // registro.style.display = "none";
        }
    }
    */
}
// registro modal end

// slider
var valorDoSlide = 1;
showSlides(valorDoSlide);

function proximoSlide(n) {
    showSlides(valorDoSlide += n);
}

function currentSlide(n) {
    showSlides(valorDoSlide = n);
}

function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("slideshow-slides");
    const pontos = document.getElementsByClassName("slideshow-ponto");
    if (n > slides.length) {
        valorDoSlide = 1
    }
    if (n < 1) {
        valorDoSlide = slides.length;
    }

    // valorDoSlide++;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" slideshow-ativo", "");
    }

    slides[valorDoSlide - 1].style.display = "block";
    pontos[valorDoSlide - 1].className += " slideshow-ativo";
    // setTimeout(showSlides, 2000);
}
// slider end

// submenu
function mostrarSubMenu() {
    document.getElementsByClassName("sub-menu")[0]
        .classList.toggle("mostrarSub-menu");

    //esconder depois de clickar no sub menu
    window.onclick = function (event) {
        if (!event.target.matches('.btncursos')) {
            var dropDowns = document.getElementsByClassName("sub-menu");
            var i;

            for (i = 0; i < dropDowns.length; i++) {
                var abrirDrop = dropDowns[i];
                if (abrirDrop.classList.contains("mostrarSub-menu")) {
                    abrirDrop.classList.remove("mostrarSub-menu");
                }
            }
        }
    }
}
// submenu end

function mostrarSubMenuSubOver() {
    document.getElementsByClassName("sub-menu-sub", "sub-menu")[0]
        .classList.toggle("mostrarSub-menu");
}




// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = true;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = false;
    }
})();