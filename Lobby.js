function nombre(){
    nom=document.getElementById("Nombre").value;
    document.getElementById("datnom").innerHTML="Hola "+nom;
}
function redactar(){
    document.write('<!DOCTYPE html><html lang="es"><head><title>Cuentanos tu Experiencia - Bitacora de Viaje</title><script src="Lobby.js"></script><link rel="stylesheet" href="Guardar.css"></head><body><form action="Experiencias.html" method="post"><button type="submit">Regresar</button><h1>Nos parecio muy interesante tu experiencia, cuentanos más!</h1><table><tr><td> Que ciudad visitaste? </td><td><textarea type="text" id="ciudad" placeholder="Dinos que cuidad has visitado, intenta ser especifico"></textarea></td></tr><tr><td>Como llegaste ahi?</td><td><textarea type="text" id="camino" placeholder="Indicanos que camino tomaste, alguna ruta recomendada, algun problema que tuviste para llegar ahi, etc"></textarea></td></tr><tr><td>Que lugares visitaste?</td><td><textarea type="text" id="lugares" placeholder="Que lugares recomendarias visitar si alguien viaja a esa ciudad, comentanos que restaurantes visitaste, en que hotel te quedaste, etc"></textarea></td></tr><tr><td>Como es el clima en la ciudad que visitaste?</td><td><textarea type="text" id="clima" placeholder="En que epoca del año fuiste, el clima fue soleado, templado o lluvioso"></textarea></td></tr><tr><td>Ahora... cuentanos tu experiencia completa</td><td><textarea type="text" id="experiencia" placeholder="En este espacio, puedes escribir cuanto deseas... Explica toda tu experiencia, comenta que recomiendas y que no recomiendas de los lugares que visitaste. ESTE ES TU ESPACIO, ASI QUE MUESTRATE COMO TU MISM@!!!"></textarea></td></tr><tr><td></td><td><button type="button" onclick="Publicar()">Publicar</button></td></tr></table><table><tr><td>Ciudad:</td><td><p id="ubicacion"></p></td></tr><tr><td>Como llegar:</td><td><p id="llegar"></p></td></tr><tr><td>Estos lugares visite:</td><td><p id="turistico"></p></td></tr><tr><td>Clima:</td><td><p id="clim"></p></td></tr><tr><td colspan="2">...Y esta fue mi experiencia completa...</td></tr><tr><td colspan="2"><p id="resena"></p></td></tr></table></body></html>')
}
function Publicar(){
    ubi=document.getElementById("ciudad").value;
    cam=document.getElementById("camino").value;
    lug=document.getElementById("lugares").value;
    cli=document.getElementById("clima").value;
    exp=document.getElementById("experiencia").value;
    document.getElementById("ubicacion").innerHTML=ubi;
    document.getElementById("llegar").innerHTML=cam;
    document.getElementById("turistico").innerHTML=lug;
    document.getElementById("clim").innerHTML=cli;
    document.getElementById("resena").innerHTML=exp;
}
