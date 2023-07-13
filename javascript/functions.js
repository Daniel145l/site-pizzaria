$(function() {

    // === SLICK SLIDER ===

    $("div.pizza-group").slick({
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed: 1300
    })

    // === SLIDER BEBIDAS ===

    $('div.slider-bebidas').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
    })

    // === MUDAR O PREÇO ===

    // TIPO 1

    $('input.pequeno-um').click(function() {
        $('p.texto-preco-um').fadeOut(0);
        $('p.preco-pequeno-um').fadeIn(500)
    })

    $('input.medio-um').click(function() {
        $('p.texto-preco-um').fadeOut(0);
        $('p.preco-medio-um').fadeIn(500)
    })

    $('input.grande-um').click(function() {
        $('p.texto-preco-um').fadeOut(0);
        $('p.preco-grande-um').fadeIn(500)
    })

    // TIPO 2

    $('input.pequeno-dois').click(function() {
        $('p.texto-preco-dois').fadeOut(0);
        $('p.preco-pequeno-dois').fadeIn(500)
    })

    $('input.medio-dois').click(function() {
        $('p.texto-preco-dois').fadeOut(0);
        $('p.preco-medio-dois').fadeIn(500)
    })

    $('input.grande-dois').click(function() {
        $('p.texto-preco-dois').fadeOut(0);
        $('p.preco-grande-dois').fadeIn(500)
    })

    // TIPO 3

    $('input.pequeno-tres').click(function() {
        $('p.texto-preco-tres').fadeOut(0);
        $('p.preco-pequeno-tres').fadeIn(500)
    })

    $('input.medio-tres').click(function() {
        $('p.texto-preco-tres').fadeOut(0);
        $('p.preco-medio-tres').fadeIn(500)
    })

    $('input.grande-tres').click(function() {
        $('p.texto-preco-tres').fadeOut(0);
        $('p.preco-grande-tres').fadeIn(500)
    })

    // TIPO 4

    $('input.pequeno-quatro').click(function() {
        $('p.texto-preco-quatro').fadeOut(0);
        $('p.preco-pequeno-quatro').fadeIn(500)
    })

    $('input.medio-quatro').click(function() {
        $('p.texto-preco-quatro').fadeOut(0);
        $('p.preco-medio-quatro').fadeIn(500)
    })

    $('input.grande-quatro').click(function() {
        $('p.texto-preco-quatro').fadeOut(0);
        $('p.preco-grande-quatro').fadeIn(500)
    })

    // TIPO 5

    $('input.pequeno-cinco').click(function() {
        $('p.texto-preco-cinco').fadeOut(0);
        $('p.preco-pequeno-cinco').fadeIn(500)
    })

    $('input.medio-cinco').click(function() {
        $('p.texto-preco-cinco').fadeOut(0);
        $('p.preco-medio-cinco').fadeIn(500)
    })

    $('input.grande-cinco').click(function() {
        $('p.texto-preco-cinco').fadeOut(0);
        $('p.preco-grande-cinco').fadeIn(500)
    })

    // TIPO 6

    $('input.pequeno-seis').click(function() {
        $('p.texto-preco-seis').fadeOut(0);
        $('p.preco-pequeno-seis').fadeIn(500)
    })

    $('input.medio-seis').click(function() {
        $('p.texto-preco-seis').fadeOut(0);
        $('p.preco-medio-seis').fadeIn(500)
    })

    $('input.grande-seis').click(function() {
        $('p.texto-preco-seis').fadeOut(0);
        $('p.preco-grande-seis').fadeIn(500)
    })


    // VALIDAÇÃO DO FORMULARIO 

    $('fom#form-1').submit(function() {
        var endereco = $('input[id=endereco]').val();
        var numero = $('input[id=numero]').val();
        var email = $('input[id=email]').val();
        var telefone = $('input[id=telefone]').val();
        var nome = $('input[id=nome]').val();
        var mensagem = $('textarea[id=msg').val();

        if(verificarEndereco(endereco) == false) {
            aplicarCampoInvalido($('input[id=endereco]'));
            return false;
        }else if(verificarNumero(numero) == false) {
            aplicarCampoInvalido($('input[id=numero]'));
            return false;
        }else if (verificarEmail(email) == false) {
            aplicarCampoInvalido($('input[id=email]'));
            return false;
        }else if (verificarTelefone(telefone) == false) {
            aplicarCampoInvalido($('input[id=telefone]'));
            return false;
        }else if (verificarNome(nome) == false) {
            aplicarCampoInvalido($('input[id=nome]'));
            return false;
        }else if (verificarMsg(mensagem) == false) {
            aplicarCampoInvalido($('textarea[id=msg'));
            return false;
        }else {
            alert("Pedido enviado com sucesso!");
        }

    })

    // VERIFICA ENDEREÇO

    function verificarEndereco(endereco) {
        if(endereco == '') {
            return false;
            console.log('olá')
        }

        if(!endereco.match(/^[A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{1}[a-záàâãéèêíïóôõöúçñ]{1,}/)){
            return false;
        }

    }


})