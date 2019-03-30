var nbSprites = 0;
class Map {

    constructor() {
        this.w = 60;
        this.h = 60;
        this.tileSize = 64;

        this.data = [];
        for (let x = 0; x < this.h; x++) {
            this.data[x] = [];
            for (let y = 0; y < this.w; y++) {
                if (Math.random() > .8) {
                    this.data[x][y] = 1;
                } else {
                    this.data[x][y] = 0;
                }
                //      this.data[x][y] = 1;
            }
        }
    }



    draw() {
        let p1, p2, p3, p4, index;

        let viewSizeX = Math.ceil((canvas.width / 2) / this.tileSize) + 1;
        let viewSizeY = Math.ceil((canvas.height / 2) / this.tileSize) + 1;

        let pMapX = Math.floor(player.position.x);
        let pMapY = Math.floor(player.position.y);

        nbSprites = 0;
        // on boucle sur toutes les tiles autour du joueur
        for (let x = pMapX - viewSizeX; x < pMapX + viewSizeX; x++) {
            for (let y = pMapY - viewSizeY; y < pMapY + viewSizeY; y++) {
                // on empeche de regarder en dehors de la map (là où il n'y a pas de tile)
                if (x >= 0 && x + 1 < this.w && y >= 0 && y + 1 < this.h) {

                    p1 = this.data[x][y];
                    p2 = this.data[x + 1][y];
                    p3 = this.data[x + 1][y + 1];
                    p4 = this.data[x][y + 1];

                    index = (p1 * 8) + (p2 * 4) + (p3 * 2) + p4;

                    sprite("assets/" + (showGrid ? "grid_" : "") + index + ".png", x * this.tileSize, y * this.tileSize);
                    nbSprites++;
                }


            }
        }

        var text = [];
        text.push('sprites: ' + nbSprites);
        text.push('x: ' + pMapX);
        text.push('y: ' + pMapY);
        text.push('mx: ' + mouse.mapX);
        text.push('my: ' + mouse.mapY);
        document.getElementById("sprites").innerHTML = text.join('<br>');

    }

}
