class SnakePart {
  constructor(pos, prev, next) {
    this.coord = pos;
    this.next = next;
    this.prev = prev;
  }
Draw(ctx){ // добавляем параметр методу Draw(), передаём канву
  this.ctx = ctx; // делаем свойство текущему объекту, в которое присваиваем
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
    this.ctx.moveTo(253,250);
    this.ctx.bezierCurveTo(253,240,265,240,267,250);
    this.ctx.fill();
  }
    
  else if(dir == 2) {
    this.ctx.moveTo(250,247);
    this.ctx.bezierCurveTo(260,247,260,233,250,233);
    this.ctx.fill();
  }
  
  else if(dir == 3) {
    this.ctx.moveTo(20*this.coord.x+4,20*(this.coord.y+1));
    this.ctx.quadraticCurveTo(20*this.coord.x+3,20*(this.coord.y+1)-17,20*this.coord.x+10,20*(this.coord.y+1)-17);
    this.ctx.moveTo(20*this.coord.x+16,20*(this.coord.y+1));
    this.ctx.quadraticCurveTo(20*this.coord.x+17,20*(this.coord.y+1)-17,20*this.coord.x+10,20*(this.coord.y+1)-17);
    //this.ctx.moveTo(20*this.coord.x,20*this.coord.y);
    //this.ctx.quadraticCurveTo (20*this.coord.x,20*this.coord.y,267,270); // this.coord.x+3, 20 * this.coord.y
    this.ctx.stroke(); 
  }
  
  else if(dir == 4) {
    this.ctx.moveTo(230,247);
    this.ctx.bezierCurveTo(220,247,220,233,230,233);
    this.ctx.fill();
  }
  return;   
}

DrawTail(dir) {
  this.ctx.beginPath();
  this.ctx.fillStyle = "red";
  
  if(dir == 30) {
    
    this.ctx.moveTo(253,270);
    this.ctx.bezierCurveTo(253,290,265,290,267,270);
    this.ctx.fill();
  }

  else if(dir == 31) {
    this.ctx.moveTo(230,247);
    this.ctx.bezierCurveTo(210,247,210,233,230,233);
    this.ctx.fill();
  }
    
  else if(dir == 32) {
    this.ctx.moveTo(250,247);
    this.ctx.bezierCurveTo(270,247,270,233,250,233);
    this.ctx.fill();  
  }
  
  else if(dir == 33) {
    this.ctx.moveTo(253,250);
    this.ctx.bezierCurveTo(253,230,265,230,267,250);
    this.ctx.fill();
  }
  return;   
}     

  DrawStraight(dir){
    this.ctx.beginPath();
    this.ctx.fillStyle = "blue";
    
    if(dir == 10) {
      
      this.ctx.rect(20 * this.coord.x, 20 * this.coord.y+3, 20, 14);
      this.ctx.fill();   
    }

    else if(dir == 11) {
      this.ctx.rect(20 * this.coord.x+3, 20 * this.coord.y, 14, 20);
      this.ctx.fill();    
    }
    return;
}

  DrawTurn(dir){
    this.ctx.beginPath();

    if(dir == 20) {
      this.ctx.arc(20 * this.coord.x+20, 20 * this.coord.y+20, 17,  Math.PI, 3*Math.PI/2, 0); //слева вниз
      this.ctx.arc(20 * this.coord.x+20, 20 * this.coord.y+20,  3,  -Math.PI/3, Math.PI, 1); //слева вниз
      this.ctx.moveTo(20 * this.coord.x+17, 20 * this.coord.y+20);
      this.ctx.lineTo(20 * this.coord.x+3, 20 * this.coord.y+20);
      this.ctx.moveTo(20 * this.coord.x+20, 20 * this.coord.y+3);
      this.ctx.lineTo(20 * this.coord.x+20, 20 * this.coord.y+17);
      this.ctx.fill();
      
    }

    else if(dir == 21) {
      this.ctx.arc(20 * this.coord.x+20, 20 * this.coord.y, 17,  Math.PI/2,-Math.PI, 0); //слева вверх
      this.ctx.arc(20 * this.coord.x+20, 20 * this.coord.y, 3,  -Math.PI, Math.PI/2, 1);
      this.ctx.moveTo(20 * this.coord.x+20, 20 * this.coord.y+17);
      this.ctx.lineTo(20 * this.coord.x+20, 20 * this.coord.y+3);
      this.ctx.moveTo(20 * this.coord.x+17, 20 * this.coord.y);
      this.ctx.lineTo(20 * this.coord.x+3, 20 * this.coord.y);
      this.ctx.fill();
      
      
    }

    else if(dir == 22) {
      this.ctx.arc(20 * this.coord.x, 20 * this.coord.y+20, 17,  -Math.PI/2,0, 0); //право вниз
      this.ctx.arc(20 * this.coord.x, 20 * this.coord.y+20, 3,  0, 3*Math.PI/2, 1); //право вниз
      this.ctx.moveTo(20 * this.coord.x, 20 * this.coord.y+17);
      this.ctx.lineTo(20 * this.coord.x, 20 * this.coord.y+3);
      this.ctx.moveTo(20 * this.coord.x+17, 20 * this.coord.y+20);
      this.ctx.lineTo(20 * this.coord.x+3, 20 * this.coord.y+20);
      this.ctx.fill();
      
    
    }

    else if(dir == 23) {
      this.ctx.arc(20 * this.coord.x, 20 * this.coord.y, 17,  0, Math.PI/2, 0); //право вверх
      this.ctx.arc(20 * this.coord.x, 20 * this.coord.y,  3,  -3*Math.PI/2, 2*Math.PI, 1); //право вверх
      this.ctx.moveTo(20 * this.coord.x, 20 * this.coord.y+17);
      this.ctx.lineTo(20 * this.coord.x, 20 * this.coord.y+3);
      this.ctx.moveTo(20 * this.coord.x+17, 20 * this.coord.y);
      this.ctx.lineTo(20 * this.coord.x+3, 20 * this.coord.y);
      this.ctx.fill();
      
    }
    return;
  }
}
window.onload = function() {

var snake = Array();
  snake[0] = new SnakePart({x: 6, y: 7}, null, {x: 6, y: 6});
  snake[1] = new SnakePart({x: 6, y: 6}, snake[0].coord, {x: 6, y: 5});
  snake[2] = new SnakePart({x: 6, y: 5}, snake[1].coord, {x: 5, y: 5});
  snake[3] = new SnakePart({x: 5, y: 5}, snake[2].coord, {x: 4, y: 5});
  snake[4] = new SnakePart({x: 4, y: 5}, snake[3].coord, {x: 4, y: 4});
  snake[5] = new SnakePart({x: 4, y: 4}, snake[4].coord, {x: 4, y: 3});
  snake[6] = new SnakePart({x: 4, y: 3}, snake[5].coord, {x: 5, y: 3});
  snake[7] = new SnakePart({x: 5, y: 3}, snake[6].coord, {x: 6, y: 3});
  snake[8] = new SnakePart({x: 6, y: 3}, snake[7].coord, {x: 7, y: 3});
  snake[9] = new SnakePart({x: 7, y: 3}, snake[8].coord, {x: 8, y: 3});
  snake[10] = new SnakePart({x: 8, y: 3}, snake[9].coord, {x: 8, y: 4});
  snake[11] = new SnakePart({x: 8, y: 4}, snake[10].coord, {x: 8, y: 5});
  snake[12] = new SnakePart({x: 8, y: 5}, snake[11].coord, {x: 9, y: 5});
  snake[13] = new SnakePart({x: 9, y: 5}, snake[12].coord, {x: 9, y: 4});
  snake[14] = new SnakePart({x: 9, y: 4}, snake[13].coord, {x: 9, y: 3});
  snake[15] = new SnakePart({x: 9, y: 3}, snake[14].coord, {x: 9, y: 2});
  snake[16] = new SnakePart({x: 9, y: 2}, snake[15].coord, null);

  const canvas = document.getElementById("field");
  const ctx = canvas.getContext("2d");
  for (part in snake) {
    snake[part].Draw(ctx);
  }
}