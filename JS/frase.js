
    
    $(function () {
        let palavras  = ["Html", "Css", "Jquery", "WordPress", "Design Responsivo"]
        let inicio    = 0
        let intervalo = 1500
        $('.texto').text(palavras[inicio++])
            setInterval(function() {
                
        }, intervalo);
        setInterval(function() {
              //$('#texto').fadeOut(function() {
                $('#texto').slideUp(function() {
                    if (inicio >= palavras.length) {
                     inicio = 0;
                    }
              //$(this).text(palavras[inicio++]).fadeIn();
                $(this).text(palavras[inicio++]).slideDown();
                });
        }, intervalo);
    });
