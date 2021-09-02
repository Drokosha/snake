window.onload = function() {
    const canvas = document.getElementById("snake");
    const ctx = canvas.getContext("2d");
            class SnakePart {
                constructor(pos, prev, next) {
                    this.coord = pos;
                    this.next = next;
                    this.prev = prev;
                }
            }
                    switch (this.Snape()){
                        case 1:
                            this.DrawHead(1);
                            break;
                        case 2:
                            this.DrawHead(2);
                            break;
                        case 3:
                            this.DrawHead(3);
                            break;
                        case 4:
                            this.DrawHead(4);
                            break;
                        case 10:
                            this.DrawStraight(10);
                            break;
                        case 11:
                            this.DrawStraight(11);
                            break;
                        case 20:
                            this.DrawTurn(20);
                            break;
                        case 21:
                            this.DrawTurn(21);
                            break;
                        case 22:
                            this.DrawTurn(22);
                            break;
                        case 23:
                            this.DrawTurn(23);
                            break;
                        case 30:
                            this.DrawTail(30);
                            break;
                        case 31:
                            this.DrawTail(31);
                            break;
                        case 32:
                            this.DrawTail(32);
                            break;
                        case 33:
                            this.DrawTail(33);
                            break;    
                            }

                Snape () {
                    let dir = this.DrawHead(dir) {
                        if(dir == 1) {
                            ctx.beginPath();
                            ctx.moveTo(253,250);
                            ctx.bezierCurveTo(253,240,265,240,267,250);
                            ctx.fillStyle = "red";
                            ctx.fill();
                        }
                            if(dir == 2) {
                                ctx.beginPath();
                                ctx.moveTo(250,247);
                                ctx.bezierCurveTo(260,247,260,233,250,233);
                                ctx.fillStyle = "red";
                                ctx.fill();
                            }
                                if(dir == 3) {
                                    ctx.beginPath();
                                    ctx.moveTo(253,270);
                                    ctx.bezierCurveTo(253,280,265,280,267,270);
                                    ctx.fillStyle = "red";
                                    ctx.fill();    
                                }
                                    if(dir == 4) {
                                        ctx.beginPath();
                                        ctx.moveTo(230,247);
                                        ctx.bezierCurveTo(220,247,220,233,230,233);
                                        ctx.fillStyle = "red";
                                        ctx.fill();
                                    }
                        return result;   
                    }
                        let dir = this.DrawTail(dir) {
                            if(dir == 30) {
                                ctx.beginPath();
                                ctx.moveTo(253,270);
                                ctx.bezierCurveTo(253,290,265,290,267,270);
                                ctx.fillStyle = "red";
                                ctx.fill();
                            }
                                if(dir == 31) {
                                    ctx.beginPath();
                                    ctx.moveTo(230,247);
                                    ctx.bezierCurveTo(210,247,210,233,230,233);
                                    ctx.fillStyle = "red";
                                    ctx.fill();
                                }
                                    if(dir == 32) {
                                        ctx.beginPath();
                                        ctx.moveTo(250,247);
                                        ctx.bezierCurveTo(270,247,270,233,250,233);
                                        ctx.fillStyle = "red";
                                        ctx.fill();   
                                    }
                                        if(dir == 33) {
                                            ctx.beginPath();
                                            ctx.moveTo(253,250);
                                            ctx.bezierCurveTo(253,230,265,230,267,250);
                                            ctx.fillStyle = "red";
                                            ctx.fill();
                                        }
                            return result;   
                        }     
                            let dir = this.DrawStraight(){
                                if(dir == 10) {
                                    ctx.beginPath();
                                    ctx.rect(20 * this.coord.x, 20 * this.coord.y, 20, 14);
                                    ctx.fillStyle = "blue";
                                    ctx.fill();    
                                }
                                    if(dir == 11) {
                                        ctx.beginPath();
                                        ctx.rect(20 * this.coord.x, 20 * this.coord.y, 14, 20);
                                        ctx.fillStyle = "blue";
                                        ctx.fill();    
                                    }
                                return result;
                            }
                                let dir = this.DrawTurn(dir){
                                    if(dir == 20) {
                                        ctx.beginPath();
                                        ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  Math.PI, 3*Math.PI/2, 0); //слева вниз
                                        ctx.arc(20 * this.coord.x, 20 * this.coord.y,  3,  -Math.PI/3, Math.PI, 1); //слева вниз
                                        ctx.closePath();
                                        ctx.fill(); 
                                    }
                                        if(dir == 21) {
                                            ctx.beginPath();
                                            ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  Math.PI/2,-Math.PI, 0);
                                            ctx.arc(20 * this.coord.x, 20 * this.coord.y, 3,  -Math.PI, Math.PI/2, 1);
                                            ctx.closePath();
                                            ctx.fill();
                                        }
                                            if(dir == 22) {
                                                  ctx.beginPath();
                                                  ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  -Math.PI/2,0, 0);
                                                  tx.arc(20 * this.coord.x, 20 * this.coord.y, 3,  0, 3*Math.PI/2, 1);
                                                  ctx.closePath();
                                                  ctx.fill();
                                            }
                                                if(dir == 23) {
                                                    ctx.beginPath();
                                                    ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  0, Math.PI/2, 0); //право вверх
                                                    ctx.arc(20 * this.coord.x, 20 * this.coord.y,  3,  -3*Math.PI/2, 2*Math.PI, 1); //право вверх
                                                    ctx.closePath();
                                                    ctx.fill();
                                                }
                                    return result;
                                }

                    }  
var snake = Array();
snake[0] = new SnakePart({x: 7, y: 8}, null, {x: 7, y: 7});
snake[1] = new SnakePart({x: 7, y: 7}, snake[0].coord, {x: 7, y: 6});
snake[2] = new SnakePart({x: 7, y: 6}, snake[1].coord, {x: 6, y: 6});
snake[3] = new SnakePart({x: 6, y: 6}, snake[2].coord, {x: 5, y: 6});
snake[4] = new SnakePart({x: 5, y: 6}, snake[3].coord, {x: 5, y: 5});
snake[5] = new SnakePart({x: 5, y: 5}, snake[4].coord, {x: 5, y: 4});
snake[6] = new SnakePart({x: 5, y: 4}, snake[5].coord, null);
    for (part in snake) {
        snake[part].Snape();
    }
}
