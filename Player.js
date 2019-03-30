class Player {
    constructor(x, y) {

        this.position = new Vector(x, y);
        this.direction = new Vector(1, 0);

        this.speed = 10;
    }


    update() {
        this.direction = Vector.subtract(new Vector(canvas.width / 2, canvas.height / 2), mouse.position).normalize();
        //  this.direction = Vector.subtract(this.position, mouse.position).normalize();
        this.dirSide = Vector.rotate(this.direction, Math.PI / 2);

        if (!editMode) {
            if (keyboard.ArrowUp) {
                this.position.subtract(this.direction.multiply(timer.delta * this.speed));
            }
            if (keyboard.ArrowDown) {
                this.position.add(this.direction.multiply(timer.delta * this.speed));
            }
            if (keyboard.ArrowLeft) {
                this.position.add(this.dirSide.multiply(timer.delta * this.speed));
            }
            if (keyboard.ArrowRight) {
                this.position.subtract(this.dirSide.multiply(timer.delta * this.speed));
            }
        }
        else {
            if (keyboard.ArrowUp) {
                this.position.y -= this.speed / 50;
            }
            if (keyboard.ArrowDown) {
                this.position.y += this.speed / 50;
            }
            if (keyboard.ArrowLeft) {
                this.position.x -= this.speed / 50;
            }
            if (keyboard.ArrowRight) {
                this.position.x += this.speed / 50;
            }
        }

    }

    draw() {
        let ang = Math.atan2(this.direction.y, this.direction.x);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        //        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(ang);
        ctx.fillRect(-16, -16, 32, 32);
        ctx.restore();
    }

}
