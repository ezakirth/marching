var canvas, ctx;
var timer, player, map;

var editMode = true;
var showGrid = true;
var showTex = false;

window.onresize = function () {
    canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function setup() {
    window.onresize();

    ctx = canvas.getContext('2d');

    timer = new Timer();
    player = new Player(30, 30);
    map = new Map();


    draw();
}

function draw() {
    window.requestAnimationFrame(draw);
    timer.update();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update();

    map.draw();

    if (!editMode) player.draw();
}



(function () {
    var script = document.createElement('script');
    script.onload = function () {
        var stats = new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
            stats.update();
            requestAnimationFrame(loop)
        });
    };
    script.src = 'lib/stats.js';
    document.head.appendChild(script);
})()
