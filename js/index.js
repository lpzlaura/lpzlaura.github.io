function ver_certificados () {
    
    document.getElementById('certificados').style.display = 'None'

    document.getElementById('btn-certificados').addEventListener('click', function() {

        txt = document.getElementById('btn-certificados').textContent

        if (txt == 'Ver certificados') {
            document.getElementById('certificados').style.display = 'flex'
            document.getElementById('btn-certificados').textContent = 'Ocultar certificados'
            window.scroll(0, screen.height)
        } else if (txt == 'Ocultar certificados') {
            document.getElementById('certificados').style.display = 'None'
            document.getElementById('btn-certificados').textContent = 'Ver certificados'
            window.scroll(0, 0)
        }

    })

}

ver_certificados()