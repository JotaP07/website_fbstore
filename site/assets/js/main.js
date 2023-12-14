(function() {
    
    "use strict";
    
    //===== Prealoder

    window.onload = function() {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }

    
    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.getElementById("header_navbar");
        var sticky = header_navbar.offsetTop;
        var logo = document.querySelector('.navbar-brand img')

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "block";
        } else {
            backToTo.style.display = "none";
        }
    };

    // Get the navbar

    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
    }) 


    //WOW Scroll Spy
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();




})();


document.addEventListener("DOMContentLoaded", function() {
    // Data de início (pode ser obtida do servidor ou ser fixa)
    const dataInicio = new Date();
  
    // Função para atualizar a tag span
    function atualizarTempoDesdeUltimaAtualizacao() {
      const agora = new Date();
      const diferencaEmMilissegundos = agora - dataInicio;
      const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);
  
      // Arredonda para a hora mais próxima
      const horasAtras = Math.round(diferencaEmHoras);
  
      const spanUpdate = document.getElementById("lastUpdate");
      spanUpdate.textContent = `Atualizado há ${horasAtras} ${horasAtras === 1 ? 'hora' : 'horas'} atrás`;
    }
  
    // Atualiza a cada minuto (pode ajustar conforme necessário)
    setInterval(atualizarTempoDesdeUltimaAtualizacao, 60000);
  
    // Atualiza inicialmente
    atualizarTempoDesdeUltimaAtualizacao();
  });

  