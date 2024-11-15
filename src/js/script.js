//botão
$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

//pix
$(document).ready(function() {
    $("#pix").click(function() {
        const conteudo = "21995807182";
        alert(`Tentando copiar: ${conteudo}`);

        // Usa a API Clipboard para copiar o conteúdo para a área de transferência
        navigator.clipboard.writeText(conteudo)
            .then(function() {
                alert("Conteúdo copiado com sucesso!");
            })
            .catch(function(err) {
                console.error("Erro ao copiar conteúdo: ", err);
            });
    });
});

//recado
$(document).ready(function() {
    $("#enviarRecado").click(function() {
        const nome = $("#nome").val().trim();
        const mensagem = $("#mensagemInput").val().trim();

        if (nome && mensagem) {
            const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScqTdiN2CPtVwEW0nxtVkoAc2fjxhAjKLJuL123Q9o-xOr-9g/formResponse";
            
            $.post(googleFormURL, {
                "entry.1623809664": nome,       
                "entry.1446850529": mensagem
            });

            $("#nome").val('');
            $("#mensagemInput").val('');
            alert("Recado enviado com sucesso!");
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
});

//contagem
$(document).ready(function() {
    const targetDate = new Date("2024-12-15T19:30:00").getTime();

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza o HTML
        $("#dias").text(days);
        $("#horas").text(hours);
        $("#min").text(minutes);
        $("#seg").text(seconds);

        // Se a contagem regressiva terminar
        if (distance < 0) {
            clearInterval(countdownInterval);
            $("#countdown").html("A contagem regressiva terminou!");
        }
    }, 1000);
});

//fotos
$(document).ready(function () {
    const fotos = $('.foto');
    const total = fotos.length; 
    let index = 0; 

    fotos.eq(index).css('opacity', 1);

    function mostrarFoto() {
        fotos.eq(index).css('opacity', 0);

        index = (index + 1) % total; 
        
        fotos.eq(index).css('opacity', 1);
    }

    setInterval(mostrarFoto, 5000); 
});

//presença

$(document).ready(function() {
    $('#confirmarPresenca').on('click', function() {
        const nome = $('#nome').val();
        const acompanhantes = $('#mensagemInput').val();

        if (nome === '') {
            alert('Por favor, preencha o campo Nome e Sobrenome.');
            return;
        }
        
        let mensagem = `Olá, meu nome é ${nome} e gostaria de confirmar a minha presença`;
        
        if (acompanhantes !== '') {
            mensagem += ` e de ${acompanhantes}`;
        }

        mensagem += ` no aniversário de 15 anos da Joanna Silva que irá acontecer no dia 15 de Dezembro!`;

        const mensagemCodificada = encodeURIComponent(mensagem);
        
        const numeroWhatsApp = '5521990040472';
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
        
        window.location.href = urlWhatsApp;
    });
});
