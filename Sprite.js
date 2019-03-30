var cachedImages = {};


var cachedImages = {};
function sprite(img, x, y) {
    var tileSize = map.tileSize;
    var view = player.position;

    var offsetX = canvas.width / 2 + tileSize / 2;
    // L'origine y (donc 0) de l'écran devient le milieu de la hauteur de l'écran (donc 600/2)
    var offsetY = canvas.height / 2 + tileSize / 2;

    // ensuite on transforme position de la tile par rapport à la position du joueur dans la map
    offsetX -= view.x * tileSize;
    offsetY -= view.y * tileSize;




    let image = cachedImages[img];

    if (!image) {
        cachedImages[img] = new Image(256, 256);
        image = cachedImages[img];
        image.src = img;
        image.onload = function () {
            ctx.drawImage(this, Math.floor(x + offsetX), Math.floor(y + offsetY), tileSize, tileSize);
        }
    }
    else {
        ctx.drawImage(image, Math.floor(x + offsetX), Math.floor(y + offsetY), tileSize, tileSize);
    }
};
