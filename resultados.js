(function(){
    let numMesas= localStorage.getItem('numMesas'); 
    let mensaje= ''; 
    if(numMesas > 1){mensaje += '<h1>Reservación de las '+numMesas+' Mesas</h1>';} 
    else{mensaje += '<h1>Reservación de la mesa</h1>';}

    let valoresAdultos = localStorage.getItem('valoresAdultos'); 
    let adultos = valoresAdultos.split(','); 
    for(let i = 0; i < adultos.length; i++){
        mensaje += '<div class="form-group">'+'<h3>Adultos en la mesa '+(i+1)+' : '+adultos[i]+'</h3>'+'</div>';}
    let valoresMenores = localStorage.getItem('valoresMenores'); 
    let menores = valoresMenores.split(','); 
    for(let i = 0; i < menores.length; i++){
        mensaje += '<div class="form-group">'+'<h3>Niños en la mesa '+(i+1)+' : '+menores[i]+'</h3>'+'</div>';}

    let valoresEdad = localStorage.getItem('valoresEdad'); 
    let edades = valoresEdad.split(','); 
    mensajef =mensaje+'<h2>Edades de los Niños:</h2>';
    for(let i = 0; i < edades.length; i++){
        if(edades[i]){
            mensajef += '<div class="form-group">'+'<h3>Niño(a) '+(i+1)+': '+edades[i]+' años.</h3>'+'</div>';}
    }document.getElementById("nodos").innerHTML= mensajef; 
})();