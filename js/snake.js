class SnakePart {
                constructor(pos, prev, next) {
                    this.coord = pos;
                    this.next = next;
                    this.prev = prev;
                }
            }
window.onload = function() {
    const canvas = document.getElementById("field");
    const ctx = canvas.getContext("2d");
            Draw(){
               Snape ();
               this.Shape() = dir;
               switch (dir){
                        case 1:
                            this.DrawHead(dir);
                            break;
                        case 2:
                            this.DrawHead(dir);
                            break;
                        case 3:
                            this.DrawHead(dir);
                            break;
                        case 4:
                            this.DrawHead(dir);
                            break;
                        case 10:
                            this.DrawStraight(dir);
                            break;
                        case 11:
                            this.DrawStraight(dir);
                            break;
                        case 20:
                            this.DrawTurn(dir);
                            break;
                        case 21:
                            this.DrawTurn(dir);
                            break;
                        case 22:
                            this.DrawTurn(dir);
                            break;
                        case 23:
                            this.DrawTurn(dir);
                            break;
                        case 30:
                            this.DrawTail(dir);
                            break;
                        case 31:
                            this.DrawTail(dir);
                            break;
                        case 32:
                            this.DrawTail(dir);
                            break;
                        case 33:
                            this.DrawTail(dir);
                            break;    
                            }
            }

               Snape () {
                    if (this.next === null) {
                        if (this.prev.y < this.coord.y) { //вверх
                            return 1;
                        }
                            if (this.prev.x < this.coord.x) { //право
                                return 2;
                            }
                                if (this.prev.y > this.coord.y) { //вниз
                                    return 3;
                                }
                                    if (this.prev.x > this.coord.x) { //влево
                                        return 4;
                                    }
                    }
                    if (this.prev === null) {
                        if (this.next.y > this.coord.y) {
                            return 33;
                        }
                            if (this.next.x > this.coord.x) {
                                return 32;
                            }
                                if (this.next.y < this.coord.y) {
                                    return 31;
                                }
                                    if (this.next.x < this.coord.x) {
                                        return 30;
                                    }
                    }
                        dx = this.prev.x - this.next.x;
                        dy = this.prev.y - this.next.y;
                            if (dy == 0) {
                                dir = 10;
                            }
                                else if (dx == 0) {
                                    dir = 11;
                                }
                                    if (dx == 1 && dy == -1) {
                                        dir = 20;
                                    }
                                        else if (dx == 1 && dy == 1) {
                                            dir = 21;
                                        }
                                            else if (dx == -1 && dy == -1) {
                                                dir = 22;
                                            }
                                                else if (dx == -1 && dy == 1) {
                                                    dir = 23;
                                                }
                    let dir = this.DrawHead(dir) {
                        if(dir == 1) {
                            ctx.beginPath();
                            ctx.moveTo(253,250);
                            ctx.bezierCurveTo(253,240,265,240,267,250);
                        }
                            else if(dir == 2) {
                                ctx.moveTo(250,247);
                                ctx.bezierCurveTo(260,247,260,233,250,233);
                            }
                                else if(dir == 3) {
                                    ctx.moveTo(253,270);
                                    ctx.bezierCurveTo(253,280,265,280,267,270); 
                                }
                                    else if(dir == 4) {
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
                            }
                                else if(dir == 31) {
                                    ctx.moveTo(230,247);
                                    ctx.bezierCurveTo(210,247,210,233,230,233);
                                }
                                    else if(dir == 32) {
                                        ctx.moveTo(250,247);
                                        ctx.bezierCurveTo(270,247,270,233,250,233);  
                                    }
                                        else if(dir == 33) {
                                            ctx.moveTo(253,250);
                                            ctx.bezierCurveTo(253,230,265,230,267,250);
                                            ctx.fillStyle = "red";
                                            ctx.fill();
                                        }
                            return result;   
                        }     
                            let dir = this.DrawStraight(dir){
                                if(dir == 10) {
                                    ctx.beginPath();
                                    ctx.rect(20 * this.coord.x, 20 * this.coord.y, 20, 14);   
                                }
                                    else if(dir == 11) {
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
                                    }
                                        else if(dir == 21) {
                                            ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  Math.PI/2,-Math.PI, 0);
                                            ctx.arc(20 * this.coord.x, 20 * this.coord.y, 3,  -Math.PI, Math.PI/2, 1);
                                        }
                                            else if(dir == 22) {
                                                  ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  -Math.PI/2,0, 0);
                                                  ctx.arc(20 * this.coord.x, 20 * this.coord.y, 3,  0, 3*Math.PI/2, 1);
                                            }
                                                else if(dir == 23) {
                                                    ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  0, Math.PI/2, 0); //право вверх
                                                    ctx.arc(20 * this.coord.x, 20 * this.coord.y,  3,  -3*Math.PI/2, 2*Math.PI, 1); //право вверх
                                                    ctx.closePath();
                                                    ctx.fill();
                                                }
                                    return result;
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
        snake[part].Draw();
    }
}
