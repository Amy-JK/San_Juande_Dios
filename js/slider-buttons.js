let newsButtonOne = document.getElementById('btnSliderOne')
let newsButtonTwo = document.getElementById('btnSliderTwo')
let newsButtonThree = document.getElementById('btnSliderThree')
let newsButtonFour = document.getElementById('btnSliderFour')
let newsButtonFive = document.getElementById('btnSliderFive')


newsButtonOne.addEventListener('click', function () {
  Swal.fire({
    title: 'Kermés con causa',
    icon: 'info',
    html: `                          
    <p>Habrá venta de antojitos mexicanos, postres, aguas frescas y más.</p> </br>
    <p>Te esperamos el domingo en el atrio de la iglesia. ¡No faltes!</p> </br>
        <span>Domingo 18 de Julio - Desde las 8:00am hasta las 8:00pm.</span>
        <span>Calle Escobedo #600, San Luis Potosí, Mexico.</span>
    `,

    confirmButtonText: '¡Gracias!'
  })
})

newsButtonTwo.addEventListener('click', function () {
  Swal.fire({
    title: 'Bazar de artículos diversos',
    icon: 'info',
    html: `                          
    <p>Venta de ropa, zapatos, juguetes, pinturas y mucho más a precios bajos.</p> </br>
    <p> Si tienes algún producto o accesorio que ya no utilices y está en buenas
     condiciones puedes donarlo al bazar. ¡Todo regalo es bien recibido!</p> </br>
    <span>De martes a sabado - Desde las 10:00am hasta 6:00pm</span>
    <span>Calle de San Agustin 610, Centro Historico, 78000 San Luis, S.L.P.</span>
    `,

    confirmButtonText: '¡Gracias!'
  })
})

newsButtonThree.addEventListener('click', function () {
  Swal.fire({
    title: 'Dispensario Médico',
    icon: 'info',
    html: `                          
    <p>Atención médica y medicamento con receta completamente gratuitos.</p> </br>
    <p>Si tienes mucha necesidad y no cuentas con recursos, acercate sin problema y
      solicita tu consulta. </p> </br>
    <p>Tambien se aceptan donaciones de medicamentos.</p> </br>
    <span>Martes - De 9:00am a 1:00pm y Jueves de 9:00am a 1:00pm - 4:00pm a 7:00pm</span>
    <span>Calle de San Agustin 610, Centro Historico, 78000 San Luis, S.L.P.</span>
    `,

    confirmButtonText: '¡Gracias!'
  })
})

newsButtonFour.addEventListener('click', function () {
  Swal.fire({
    title: 'Tienda de artículos religiosos',
    icon: 'info',
    html: `                          
    <p>Todo lo que necesitas para nutrir tu fe.</p> </br>
    <p>Desde escapularios, pulseras, medallas, libros de oraciones, imágenes en bultos,
      cromos, etc.</p> </br>
    <p>Pregunta sin compromiso por lo que necesites.</p> </br>
    <span>De martes a sabado - De 10:00am a 6:00pm Lunes y Domingos cerrado</span>
    <span>Calle de San Agustin 610, Centro Historico, 78000 San Luis, S.L.P.</span>
    `,
    confirmButtonText: '¡Gracias!'
  })
})

newsButtonFive.addEventListener('click', function () {
  Swal.fire({
    title: '¡Hay feretros y urnas gratis!',
    icon: 'info',
    html: `                          
    <p>Contamos con un número limitado de féretros y urnas para dar de manera gratuita a
    todo aquel que más lo necesite.</p> </br>
    <p>Solicitalo directamente en las oficinas de la iglesia.</p> </br>
    <p>Datos e información acerca del poder adquirirlo, se brinda solo en la iglesia.</p> </br>
    <span>De martes a sabado - De 10:00am a 6:00pm</span>
    <span>Calle de San Agustin 610, Centro Historico, 78000 San Luis, S.L.P.</span>
    `,
    confirmButtonText: '¡Gracias!'
  })
})