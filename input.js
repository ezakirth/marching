var keyboard = {};
var mouse = {
    position: new Vector(),
    mapX: 0,
    mapY: 0,
    active: false,
    paintSolid: false
};

function keyUpdate(e) {
    keyboard[e.key] = (e.type == "keydown");
}

window.addEventListener('keydown', keyUpdate);
window.addEventListener('keyup', keyUpdate);


function mouseUpdate(e) {
    mouse.position.x = e.clientX;
    mouse.position.y = e.clientY;


    // on annule la translation qu'on a fait pour l'affichage (voir drawTile)
    var offsetX = canvas.width / 2 - player.position.x * map.tileSize;
    var offsetY = canvas.height / 2 - player.position.y * map.tileSize;

    var mapX = Math.floor((e.clientX - offsetX) / map.tileSize);
    var mapY = Math.floor((e.clientY - offsetY) / map.tileSize);

    if (mouse.active && map.data[mapX] !== undefined && map.data[mapX][mapY] !== undefined) {
        map.data[mapX][mapY] = (mouse.paintSolid ? 1 : 0);
    }

    mouse.mapX = mapX;
    mouse.mapY = mapY;

}
window.addEventListener('mousemove', mouseUpdate);

// s'active si on appuis sur un bouton de la souris
window.addEventListener("mousedown", function (e) {
    mouse.active = true;
    mouse.paintSolid = (e.button == 0); // true si boutton gauche, sinon false

    if (mouse.active && map.data[mouse.mapX] !== undefined && map.data[mouse.mapX][mouse.mapY] !== undefined) {
        map.data[mouse.mapX][mouse.mapY] = (mouse.paintSolid ? 1 : 0);
    }
});

// s'active si on relache un bouton de la souris
window.addEventListener("mouseup", function (e) {
    mouse.active = false;
    // saveMap();
});


// gestion du click droit (on désactive le menu du navigateur)
window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
