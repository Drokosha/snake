class SnakePart {
  constructor(pos, prev, next) {
    this.coord = pos;
    this.next = next;
    this.prev = prev;
    this.cell = {width: 20, height: 20};
    this.ctx = ctx;


  }
Draw(ctx){ // добавляем параметр методу Draw(), передаём канву 
           // делаем свойство текущему объекту, в которое присваиваем
                  // значение полученного параметра
  let dir = this.Snape ();
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
    
    if (this.prev.y > this.coord.y) { //вверх
     return 1;
    }
    else if (this.prev.x < this.coord.x) { //право
     return 2;
    }
    else if (this.prev.y < this.coord.y) { //вниз
     return 3;
    }
    else if (this.prev.x > this.coord.x) { //влево
     return 4;
    }
  }

  if (this.prev === null) {
   if (this.next.y < this.coord.y) { //низ
    return 30;
   }
   else if (this.next.x < this.coord.x) { //лево
    return 31;
   }
   else if (this.next.x > this.coord.x) { //право
    return 32;
   }
   else if (this.next.y > this.coord.y) { //лево
    return 33;
   }
  }
    let dx = this.prev.x - this.next.x;
    let dy = this.prev.y - this.next.y;
    let cx = this.next.x + this.prev.x - 2*this.coord.x;
    let cy = this.next.y + this.prev.y - 2*this.coord.y;

  if (dy == 0) {
   return 10;
  }
  else if (dx == 0) {
   return 11;
  }
  
  if (cx == 1 && cy == 1) {
   return 20;
  }
  else if (cx == 1 && cy == -1) {
   return 21;
  }
  else if (cx == -1 && cy == 1) {
   return 22;
  }
  else if (cx == -1 && cy == -1) {
    return 23;
  }
}

DrawHead(dir) {
  // везде, где нужно обратиться к канве, обращаемся к свойству объекта
  // this.ctx
  this.ctx.beginPath();
  this.ctx.fillStyle = "red"; // это нужно вынести из if-а, begin path иначе 
                        // будет только когда dir=1 вызываться
  if(dir == 1) {
    this.ctx.moveTo(this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y+1));
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y+1)-17,
                              this.cell.width*this.coord.x+10,this.cell.height*(this.coord.y+1)-17);
    this.ctx.moveTo(this.cell.width*this.coord.x+16,this.cell.height*(this.coord.y+1));
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+17,this.cell.height*(this.coord.y+1)-17,
                              this.cell.width*this.coord.x+10,this.cell.height*(this.coord.y+1)-17);
  }
    
  else if(dir == 2) {
    this.ctx.moveTo(this.cell.width*this.coord.x,this.cell.height*this.coord.y+3);
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x +17,this.cell.height*this.coord.y+3,
                              this.cell.width*this.coord.x+17,this.cell.height*this.coord.y+10);
    this.ctx.moveTo(this.cell.width*this.coord.x,this.cell.height*this.coord.y+17);
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x +17,this.cell.height*this.coord.y+17,
                              this.cell.width*this.coord.x+17,this.cell.height*this.coord.y+10);
  }
  
  else if(dir == 3) {
    this.ctx.moveTo(this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y-1));
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y+1)-17,
                              this.cell.width*this.coord.x+10,this.cell.height*(this.coord.y+1)-17);
    this.ctx.moveTo(this.cell.width*this.coord.x+16,this.cell.height*(this.coord.y-1));
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+17,this.cell.height*(this.coord.y+1)-17,
                              this.cell.width*this.coord.x+10,this.cell.height*(this.coord.y+1)-17);
  }
  
  else if(dir == 4) {
    this.ctx.moveTo(this.cell.width*(this.coord.x+1)-17,this.cell.height*this.coord.y+10);
    this.ctx.quadraticCurveTo(this.cell.width*(this.coord.x+1) -17,this.cell.height*this.coord.y+3,
                              this.cell.width*(this.coord.x+1),this.cell.height*this.coord.y+3);
    this.ctx.moveTo(this.cell.width*(this.coord.x+1)-17,this.cell.height*this.coord.y+10);
    this.ctx.quadraticCurveTo(this.cell.width*(this.coord.x+1) -17,this.cell.height*this.coord.y+17,
                              this.cell.width*(this.coord.x+1),this.cell.height*this.coord.y+17);
  }
  this.ctx.fill();
  return;   
}

DrawTail(dir) {
  this.ctx.beginPath();
  this.ctx.fillStyle = "yellow";
  
  if(dir == 30) {
    
    this.ctx.moveTo(this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y-1));
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y+1),
                              this.cell.width*this.coord.x+10,this.cell.height*(this.coord.y+1));
    this.ctx.moveTo(this.cell.width*this.coord.x+16,this.cell.height*(this.coord.y-1));
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+17,this.cell.height*(this.coord.y+1),
                              this.cell.width*this.coord.x+10,this.cell.height*(this.coord.y+1));
    this.ctx.moveTo(this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y-1));
    this.ctx.lineTo (this.cell.width*this.coord.x+16,this.cell.height*(this.coord.y-1));
  }

  else if(dir == 31) {
    this.ctx.moveTo(this.cell.width*this.coord.x,this.cell.height*this.coord.y+17);
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+17,this.cell.height*this.coord.y+17,
                              this.cell.width*this.coord.x+17,this.cell.height*this.coord.y+10);
    this.ctx.moveTo(this.cell.width*this.coord.x,this.cell.height*this.coord.y+3);
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+17,this.cell.height*this.coord.y+3,
                              this.cell.width*this.coord.x+17,this.cell.height*this.coord.y+10);
    this.ctx.moveTo(this.cell.width*this.coord.x,this.cell.height*this.coord.y+17);
    this.ctx.lineTo (this.cell.width*this.coord.x,this.cell.height*this.coord.y+3);
  }
    
  else if(dir == 32) {
    this.ctx.moveTo(this.cell.width*(this.coord.x+1)-17,this.cell.height*this.coord.y+10);
    this.ctx.quadraticCurveTo(this.cell.width*(this.coord.x+1) -17,this.cell.height*this.coord.y+3,
                              this.cell.width*(this.coord.x+1),this.cell.height*this.coord.y+3);
    this.ctx.moveTo(this.cell.width*(this.coord.x+1)-17,this.cell.height*this.coord.y+10);
    this.ctx.quadraticCurveTo(this.cell.width*(this.coord.x+1) -17,this.cell.height*this.coord.y+17,
                              this.cell.width*(this.coord.x+1),this.cell.height*this.coord.y+17);
    this.ctx.moveTo(this.cell.width*(this.coord.x+1)-17,this.cell.height*this.coord.y+10);
    this.ctx.lineTo (this.cell.width*(this.coord.x+1)-17,this.cell.height*this.coord.y+10);
  }
  
  else if(dir == 33) {
    this.ctx.moveTo(this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y+1));
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y+1)-17,
                              this.cell.width*this.coord.x+10,this.cell.height*(this.coord.y+1)-17);
    this.ctx.moveTo(this.cell.width*this.coord.x+17,this.cell.height*(this.coord.y+1));
    this.ctx.quadraticCurveTo(this.cell.width*this.coord.x+17,this.cell.height*(this.coord.y+1)-17,
                              this.cell.width*this.coord.x+10,this.cell.height*(this.coord.y+1)-17);
    this.ctx.moveTo(this.cell.width*this.coord.x+17,this.cell.height*(this.coord.y+1));
    this.ctx.lineTo (this.cell.width*this.coord.x+3,this.cell.height*(this.coord.y+1));
  }
  this.ctx.fill(); 
}     

  DrawStraight(dir){
    this.ctx.beginPath();
    this.ctx.fillStyle = "blue";
    
    if(dir == 10) {
      
      this.ctx.rect(this.cell.width * this.coord.x, this.cell.height * this.coord.y+3, 20, 14);
      this.ctx.fill();   
    }

    else if(dir == 11) {
      this.ctx.rect(this.cell.width * this.coord.x+3, this.cell.height * this.coord.y, 14, 20);
      this.ctx.fill();    
    }
}

  DrawTurn(dir){
    this.ctx.beginPath();
    this.ctx.fillStyle = "black";

    if(dir == 20) {
      this.ctx.arc(this.cell.width * this.coord.x+20, this.cell.height * this.coord.y+20, 17,  Math.PI, 3*Math.PI/2, 0); //слева вниз
      this.ctx.arc(this.cell.width * this.coord.x+20, this.cell.height * this.coord.y+20,  3,  -Math.PI/2, Math.PI, 1); //слева вниз
      this.ctx.moveTo(this.cell.width * this.coord.x+17, this.cell.height * this.coord.y+20);
      this.ctx.lineTo(this.cell.width * this.coord.x+3, this.cell.height * this.coord.y+20);
      this.ctx.moveTo(this.cell.width * this.coord.x+20, this.cell.height * this.coord.y+3);
      this.ctx.fill();
      
    }

    else if(dir == 21) {
      this.ctx.arc(this.cell.width * this.coord.x+20, this.cell.height * this.coord.y, 17,  Math.PI/2,-Math.PI, 0); //слева вверх
      this.ctx.arc(this.cell.width * this.coord.x+20, this.cell.height * this.coord.y, 3,  -Math.PI, Math.PI/2, 1);
      this.ctx.moveTo(this.cell.width * this.coord.x+20, this.cell.height * this.coord.y+17);
      this.ctx.lineTo(this.cell.width * this.coord.x+20, this.cell.height * this.coord.y+3);
      this.ctx.moveTo(this.cell.width * this.coord.x+17, this.cell.height * this.coord.y);
      this.ctx.lineTo(this.cell.width * this.coord.x+3, this.cell.height * this.coord.y);
      this.ctx.fill();
      
      
    }

    else if(dir == 22) {
      this.ctx.arc(this.cell.width * this.coord.x, this.cell.height * this.coord.y+20, 17,  -Math.PI/2,0, 0); //право вниз
      this.ctx.arc(this.cell.width * this.coord.x, this.cell.height * this.coord.y+20, 3,  0, 3*Math.PI/2, 1); //право вниз
      this.ctx.moveTo(this.cell.width * this.coord.x, this.cell.height * this.coord.y+17);
      this.ctx.lineTo(this.cell.width * this.coord.x, this.cell.height * this.coord.y+3);
      this.ctx.moveTo(this.cell.width * this.coord.x+17, this.cell.height * this.coord.y+20);
      this.ctx.lineTo(this.cell.width * this.coord.x+3, this.cell.height * this.coord.y+20);
      this.ctx.fill();
    }

    else if(dir == 23) {
      this.ctx.arc(this.cell.width * this.coord.x, this.cell.height * this.coord.y, 17,  0, Math.PI/2, 0); //право вверх
      this.ctx.arc(this.cell.width * this.coord.x, this.cell.height * this.coord.y,  3,  -3*Math.PI/2, 2*Math.PI, 1); //право вверх
      this.ctx.moveTo(this.cell.width * this.coord.x, this.cell.height * this.coord.y+17);
      this.ctx.lineTo(this.cell.width * this.coord.x, this.cell.height * this.coord.y+3);
      this.ctx.moveTo(this.cell.width * this.coord.x+17, this.cell.height * this.coord.y);
      this.ctx.lineTo(this.cell.width * this.coord.x+3, this.cell.height * this.coord.y);
      this.ctx.fill();
      
    }
  }
}
window.onload = function() {
document.addEventListener ("keydown", direction);

function direction (event){
  if (event.keyCode === 37) {

        var new_x = this.coord.x-1;
        var new_y = this.coord.y;
  }

  if (event.keyCode === 38) {

        var new_x = this.coord.x;
        var new_y = this.coord.y-1;
  }

  if (event.keyCode === 39) {

        var new_x = this.coord.x+1;
        var new_y = this.coord.y;
  }

  if (event.keyCode === 40) {

        var new_x = this.coord.x;
        var new_y = this.coord.y;
  }
}
var snake = Array();
  snake[0] = new SnakePart({x: 5, y: 6}, null, {x: 5, y: 7});
  snake[1] = new SnakePart({x: 5, y: 7}, snake[0].coord, {x: 6, y: 7});
  snake[2] = new SnakePart({x: 6, y: 7}, snake[1].coord, {x: 6, y: 6});
  snake[3] = new SnakePart({x: 6, y: 6}, snake[2].coord, {x: 6, y: 5});
  snake[4] = new SnakePart({x: 6, y: 5}, snake[3].coord, null);

  const canvas = document.getElementById("field");
  const ctx = canvas.getContext("2d");
  for (part in snake) {
    snake[part].Draw(ctx);
  }
}