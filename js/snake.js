window.onload = function() {
    const canvas = document.getElementById("snake");
    const ctx = canvas.getContext("2d");
            class SnakePart {
                constructor(pos, prev, next) {
                    this.coord = pos;
                    this.next = next;
                    this.prev = prev;
                }
                    Draw() {
                        ctx.beginPath();
                        ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  -Math.PI/2,0, 0);
                        ctx.arc(20 * this.coord.x, 20 * this.coord.y, 3,  0, 3*Math.PI/2, 1);
                        ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  Math.PI/2,-Math.PI, 0);
                        ctx.arc(20 * this.coord.x, 20 * this.coord.y, 3,  -Math.PI, Math.PI/2, 1);
                        ctx.closePath();
                        ctx.fill();
                        ctx.beginPath();
                        ctx.rect(20 * this.coord.x, 20 * this.coord.y, 14, 20);
                        ctx.rect(20 * this.coord.x, 20 * this.coord.y, 20, 14);
                        ctx.fillStyle = "blue";
                        ctx.fill();
                    }
                    Snape (){
                        if (snake[1] === 1) {
                            this.coord.y = this.coord.y - 1;
                        }
                            if (snake[1] === 2) {
                                this.coord.x = this.coord.x + 1;
                            }
                                if (snake[1] === 3) {
                                    this.coord.y = this.coord.y + 1;
                                }
                                    if (snake[1] === 4) {
                                        this.coord.x = this.coord.x - 1;
                                    }
                    }  

                        }
var snake = Array();
snake[2].Draw();
snake[1] = new SnakePart({x: 7, y: 8}, null,[7,8]);
snake[2] = new SnakePart({x: 7, y: 7}, snake[1].coord, snake[3].coord);
snake[3] = new SnakePart({x: 7, y: 6}, snake[2].coord, snake[4].coord);
snake[4] = new SnakePart({x: 6, y: 6}, snake[3].coord, snake[5].coord);
snake[5] = new SnakePart({x: 5, y: 6}, snake[4].coord, snake[6].coord);
snake[6] = new SnakePart({x: 5, y: 5}, snake[5].coord, snake[7].coord);
snake[7] = new SnakePart({x: 5, y: 4}, snake[7].coord, null);
}
