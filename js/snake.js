var newX;

var newY;

var snake = Array();

var apple = Array();

var memory = [];

var setTime = 400;

var widthCell = 60;

var heightCell = 60;

var margin = 10;

var radius = widthCell - margin;

var radiusM = widthCell - (widthCell - margin);

let score = 0;

class ApplePart {
    constructor (pos, ctx) {
        this.coord = pos;
        this.ctx = ctx;
        this.cell = {width: widthCell, height: heightCell};
    }

    AppleDraw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.rect (  this.cell.width * this.coord.x + margin, this.cell.height * this.coord.y, 
                         widthCell - margin, heightCell - margin);
        this.ctx.fill();   
    }
}

class SnakePart {
    constructor(pos, prev, next, ctx) {
        this.coord = pos;
        this.next = next;
        this.prev = prev;
        this.ctx = ctx;
        this.cell = {width: widthCell, height: heightCell};
    }  

    Draw() { // добавляем параметр методу Draw(), передаём канву 
       // делаем свойство текущему объекту, в которое присваиваем
                      // значение полученного параметра

        //palitra ();

        let dir = this.Shape ();
 
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

    Shape () {
        if (this.prev === null) {

            if (this.next.y > this.coord.y) { //вверх
                return 1;
            }
    
            else if (this.next.x < this.coord.x) { //право
                return 2;
            }

            else if (this.next.y < this.coord.y) { //вниз
                return 3;
            }
    
            else if (this.next.x > this.coord.x) { //влево
                return 4;
            }
        }

        if (this.next === null) {
   
            if (this.prev.y < this.coord.y) { //низ
                return 30;
            }
   
            else if (this.prev.x < this.coord.x) { //лево
                return 31;
            }

            else if (this.prev.x > this.coord.x) { //право
                return 32;
            }

            else if (this.prev.y > this.coord.y) { //вверх
                return 33;
            }
        }

        let dx = this.next.x - this.prev.x;
        let dy = this.next.y - this.prev.y;
        let cx = this.prev.x + this.next.x - 2*this.coord.x;
        let cy = this.prev.y + this.next.y - 2*this.coord.y;

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

        this.ctx.beginPath(); // везде, где нужно обратиться к канве, обращаемся к свойству объекта
        this.ctx.fillStyle = "black"; // это нужно вынести из if-а, begin path иначе 
                            // будет только когда dir=1 вызываться
        if (dir == 1) {

            this.ctx.moveTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1));
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1) - heightCell,
                                      this.cell.width * this.coord.x + widthCell/2 ,this.cell.height * (this.coord.y + 1) - heightCell);
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + widthCell - margin,this.cell.height * (this.coord.y + 1) - heightCell,
                                      this.cell.width * this.coord.x + widthCell - margin,this.cell.height * (this.coord.y + 1));
            this.ctx.lineTo (this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1));
        }
    
        else if(dir == 2) {
            this.ctx.moveTo(this.cell.width * this.coord.x, this.cell.height * this.coord.y + margin);
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + widthCell, this.cell.height * this.coord.y + margin,
                                     this.cell.width * this.coord.x + widthCell, this.cell.height * this.coord.y + heightCell/2);
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + widthCell, this.cell.height * this.coord.y + heightCell - margin,
                                     this.cell.width * this.coord.x, this.cell.height * this.coord.y + heightCell - margin);
            this.ctx.lineTo (this.cell.width * this.coord.x, this.cell.height * this.coord.y + margin);
        }
  
        else if(dir == 3) {
            this.ctx.moveTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y - 1) + heightCell - margin);
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1),
                                      this.cell.width * this.coord.x + widthCell/2, this.cell.height * (this.coord.y + 1));
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + widthCell - margin, this.cell.height * (this.coord.y + 1),
                                      this.cell.width * this.coord.x + widthCell - margin, this.cell.height * (this.coord.y - 1) + heightCell);
            this.ctx.lineTo (this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y - 1) + heightCell);
        }
  
        else if(dir == 4) {
            this.ctx.moveTo(this.cell.width * (this.coord.x + 1) - widthCell, this.cell.height * this.coord.y + heightCell/2);
            this.ctx.quadraticCurveTo(this.cell.width * (this.coord.x + 1) - widthCell, this.cell.height * this.coord.y + margin,
                                      this.cell.width * (this.coord.x + 1), this.cell.height * this.coord.y + margin);
            this.ctx.lineTo(this.cell.width * (this.coord.x + 1), this.cell.height * this.coord.y + heightCell - margin);
            this.ctx.quadraticCurveTo(this.cell.width * (this.coord.x + 1) - widthCell, this.cell.height * this.coord.y + heightCell - margin,
                                      this.cell.width * (this.coord.x + 1) - widthCell, this.cell.height * this.coord.y + heightCell/2);
        }

        this.ctx.fill();  
    }

    DrawTail(dir) {

        this.ctx.beginPath();
        this.ctx.fillStyle = "blue";
  
        if (dir == 30) {
            this.ctx.moveTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y - 1) + heightCell - margin);
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1),
                                      this.cell.width * this.coord.x + widthCell/2, this.cell.height * (this.coord.y + 1));
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + widthCell - margin, this.cell.height * (this.coord.y + 1),
                                      this.cell.width * this.coord.x + widthCell - margin, this.cell.height * (this.coord.y - 1) + heightCell);
            this.ctx.lineTo (this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y - 1) + heightCell);
        }

        else if (dir == 31) {
            this.ctx.moveTo(this.cell.width * this.coord.x, this.cell.height * this.coord.y + margin);
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + widthCell, this.cell.height * this.coord.y + margin,
                                     this.cell.width * this.coord.x + widthCell, this.cell.height * this.coord.y + heightCell/2);
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + widthCell, this.cell.height * this.coord.y + heightCell - margin,
                                     this.cell.width * this.coord.x, this.cell.height * this.coord.y + heightCell - margin);
            this.ctx.lineTo (this.cell.width * this.coord.x, this.cell.height * this.coord.y + margin);
        }
    
        else if (dir == 32) {
            this.ctx.moveTo(this.cell.width * (this.coord.x + 1) - widthCell, this.cell.height * this.coord.y + heightCell/2);
            this.ctx.quadraticCurveTo(this.cell.width * (this.coord.x + 1) - widthCell, this.cell.height * this.coord.y + margin,
                                      this.cell.width * (this.coord.x + 1), this.cell.height * this.coord.y + margin);
            this.ctx.lineTo(this.cell.width * (this.coord.x + 1), this.cell.height * this.coord.y + heightCell - margin);
            this.ctx.quadraticCurveTo(this.cell.width * (this.coord.x + 1) - widthCell, this.cell.height * this.coord.y + heightCell - margin,
                                      this.cell.width * (this.coord.x + 1) - widthCell, this.cell.height * this.coord.y + heightCell/2);
        }
  
        else if (dir == 33) {
            this.ctx.moveTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1));
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1) - heightCell,
                                      this.cell.width * this.coord.x + widthCell/2 ,this.cell.height * (this.coord.y + 1) - heightCell);
            this.ctx.quadraticCurveTo(this.cell.width * this.coord.x + widthCell - margin,this.cell.height * (this.coord.y + 1) - heightCell,
                                      this.cell.width * this.coord.x + widthCell - margin,this.cell.height * (this.coord.y + 1));
            this.ctx.lineTo (this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1));
        }

        this.ctx.fill(); 
    }     

    DrawStraight(dir){
    
        this.ctx.beginPath();
        this.ctx.fillStyle = "green";
    
        if (dir == 10) {
            this.ctx.rect(this.cell.width * this.coord.x, this.cell.height * this.coord.y + margin, widthCell, heightCell - 2 * margin);
            this.ctx.fill();   
        }

        else if (dir == 11) {
            this.ctx.rect(this.cell.width * this.coord.x + margin, this.cell.height * this.coord.y, widthCell - 2 * margin, heightCell);
            this.ctx.fill();    
        }
    }

    DrawTurn(dir){
    
        this.ctx.beginPath();
        this.ctx.fillStyle = "green";

        if (dir == 20) {
            this.ctx.arc(this.cell.width * (this.coord.x + 1), this.cell.height * (this.coord.y + 1), radius,  Math.PI, 3 * Math.PI/2, 0); //слева вниз
            this.ctx.lineTo(this.cell.width * (this.coord.x + 1), this.cell.height * this.coord.y + (heightCell - margin));
            this.ctx.arc(this.cell.width * (this.coord.x + 1), this.cell.height * (this.coord.y + 1),  radiusM,  - Math.PI/2, Math.PI, 1); //слева вниз
            this.ctx.lineTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1));
            this.ctx.fill();
        }

        else if (dir == 21) {
            this.ctx.arc(this.cell.width * (this.coord.x + 1), this.cell.height * this.coord.y, radius,  Math.PI/2,-Math.PI, 0); //слева вверх
            this.ctx.lineTo(this.cell.width * this.coord.x + widthCell-margin, this.cell.height * this.coord.y);
            this.ctx.arc(this.cell.width * (this.coord.x + 1), this.cell.height * this.coord.y, radiusM,  -Math.PI, Math.PI/2, 1);
            this.ctx.lineTo(this.cell.width * (this.coord.x + 1), this.cell.height * this.coord.y + heightCell - margin);
            this.ctx.fill();
        }

        else if(dir == 22) {
            this.ctx.arc(this.cell.width * this.coord.x, this.cell.height * (this.coord.y + 1), radius,  -Math.PI/2,0, 0); //право вниз
            this.ctx.lineTo(this.cell.width * this.coord.x + margin, this.cell.height * (this.coord.y + 1));
            this.ctx.arc(this.cell.width * this.coord.x, this.cell.height * (this.coord.y + 1), radiusM,  0, 3 * Math.PI/2, 1); //право вниз
            this.ctx.lineTo(this.cell.width * this.coord.x, this.cell.height * this.coord.y + margin);
            this.ctx.fill();
        }

        else if(dir == 23) {
            this.ctx.arc(this.cell.width * this.coord.x, this.cell.height * this.coord.y, radius,  0, Math.PI/2, 0); //право вверх
            this.ctx.lineTo(this.cell.width * this.coord.x, this.cell.height * this.coord.y + margin);
            this.ctx.arc(this.cell.width * this.coord.x, this.cell.height * this.coord.y,  radiusM,  -3*Math.PI/2, 2*Math.PI, 1); //право вверх
            this.ctx.lineTo(this.cell.width * this.coord.x + widthCell - margin, this.cell.height * this.coord.y);
            this.ctx.fill();
        }
    }
}

window.onload = function() {

    document.body.onkeydown = Game;

    const canvas = document.getElementById("field");
    const ctx = canvas.getContext("2d");

    //snakeObject();

    snake[0] = new SnakePart({x: 6, y: 7}, {x: 6, y: 6}, null, ctx);
    snake[1] = new SnakePart({x: 6, y: 6}, {x: 6, y: 5}, {x: 6, y: 7}, ctx);
    snake[2] = new SnakePart({x: 6, y: 5}, null, {x: 6, y: 6}, ctx);

    for (part in snake) {
        snake[part].Draw();
    }

    apple[0] = new ApplePart({x: 2, y: 5}, ctx);
    apple[1] = new ApplePart({x: 5, y: 7}, ctx);

    for (part in apple) {
        apple[part].AppleDraw();
    }

    setTimeout(check, setTime);
} 



function Game (event) {
   
    if (event.keyCode == 37) {
        memory[memory.length] = event.keyCode;
    }

    if (event.keyCode == 38) {
        memory[memory.length] = event.keyCode;
    }

    if (event.keyCode == 39) {
        memory[memory.length] = event.keyCode;
    }

    if (event.keyCode == 40) {
        memory[memory.length] = event.keyCode;
    }

    
}

function check () {


    newX = snake[snake.length - 1].coord.x;
    newY = snake[snake.length - 1].coord.y; 
    var deltaX = snake[snake.length - 1].coord.x - snake[snake.length - 2].coord.x;
    var deltaY = snake[snake.length - 1].coord.y - snake[snake.length - 2].coord.y;
    
    var boll = 1;

    while (boll == 1 && memory.length > 0) {
        
        if ((memory[0] == 38 || memory[0] == 40) && deltaY == 0) {
            if (memory[0] == 38) {
                newY = newY - 1;
            }

            else if (memory[0] == 40) {
                newY = newY + 1;
            }

            boll = 0;
        }
        
        if ((memory[0] == 37 || memory[0] == 39) && deltaX == 0) {
            if (memory[0] == 37) {
                newX = newX - 1;
            }

            else if (memory[0] == 39) {
                newX = newX + 1;
            }
            boll = 0;
        }

        memory.shift();

    }

    if (boll != 0) {
        newX = newX + deltaX;
        newY = newY + deltaY;
    }

    if (newX * widthCell < 0 || newY * heightCell < 0 || 
        newX * widthCell > document.getElementById('field').width - widthCell || 
        newY * heightCell > document.getElementById('field').height - heightCell) {

        GameOver ();
        return;
    }

    

    for (var i = 1; i < snake.length; i++) {

        if (newX == snake[i].coord.x && newY == snake[i].coord.y) {
            GameOver ();
            return;
        }
    }
 
    for (var i = 0; i < apple.length; i++) {
  
        if (newX == apple[i].coord.x && newY == apple[i].coord.y) {
   
            score++;

            if (score < 90) {
                setTime = setTime - 10;
            }

            document.getElementById('score').innerHTML = 'Your score:'+score;

            snakeGrow (newX, newY);

            setTimeout (check, setTime);

            return;
        }
    }

    if (setTime < 150) {
        setTime = 149;
    }

    if (score >= 90) {
        setTime = 100;
    }

    snakeMove (newX, newY);

    setTimeout(check, setTime);

}

function GameOver () {

    alert ("GAME OVER");
}

function snakeGrow (newX, newY){
    const canvas = document.getElementById("field");
    const ctx = canvas.getContext("2d");

    
    snake[snake.length] = new SnakePart({x: newX, y: newY}, null, {x: snake[snake.length - 1].coord.x, y: snake[snake.length - 1].coord.y}, ctx);

    snake[snake.length - 2].prev = {x: snake[snake.length-1].coord.x, y: snake[snake.length-1].coord.y};

    for (var i = 0; i < apple.length; i++) {
        if (snake[snake.length -1].coord.x == apple[i].coord.x && snake[snake.length -1].coord.y == apple[i].coord.y) {
        appleMatch (i);
        }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (part in snake) {
        snake[part].Draw();
    }

    for (part in apple) {
        apple[part].AppleDraw();
    }

}

function snakeMove (newX, newY) {
    
    var i;
    
    for (let i = 0; i < snake.length-2; i++) {
        snake[i].coord = {x: snake[i+1].coord.x, y: snake[i+1].coord.y};
        snake[i].prev = {x: snake[i+1].prev.x, y: snake[i+1].prev.y};
        snake[i].next = {x: snake[i+1].next.x, y: snake[i+1].next.y};
    }

    snake[0].next = null;
  
    snake[snake.length - 2].coord.x = snake[snake.length -1].coord.x;
    snake[snake.length - 2].coord.y = snake[snake.length -1].coord.y;
    snake[snake.length - 2].next.x = snake[snake.length - 1].next.x;
    snake[snake.length - 2].next.y = snake[snake.length - 1].next.y;
  
   
    snake[snake.length - 1].coord.x = newX;
    snake[snake.length - 1].coord.y = newY;
        

    snake[snake.length - 2].prev.x = snake[snake.length - 1].coord.x;
    snake[snake.length - 2].prev.y = snake[snake.length - 1].coord.y;

    snake[snake.length - 1].next.x = snake[snake.length - 2].coord.x;
    snake[snake.length - 1].next.y = snake[snake.length - 2].coord.y;


    const canvas = document.getElementById("field");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (part in snake) {
        snake[part].Draw();
    }

    for (part in apple) {
        apple[part].AppleDraw();
    }
}

function snakeObject() {

    const canvas = document.getElementById("field");
    const ctx = canvas.getContext("2d");

     // Переменная, которая отвечает за крайнию цифру в строке canvas/
    var i = 0; //задаю координату х элементов массива snake.
    var p = 0; //переменная которая считает элементы массива snake 
    var line = 0; //задаю координату Y элементов массива, так же она она определяет в какой строке canvas мы находимся.
    var widthH = canvas.width/widthCell;
    
    do {
        if (line % 2 == 0) { // проверка на четность, если line (строка) не четная то заходим в оператора и производит действия
            snake[p] = new SnakePart({x: i, y: line}, {x: i + 1, y: line}, {x: i, y: line - 1}, ctx); //аналогично 585 строке

            for (i = 1; i <= widthH - 2; i++) {// собственно цикл создания объектов с 1 до 28
                snake[p + 1] = new SnakePart({x: i, y: line}, {x: i + 1, y: line}, {x:i - 1, y: line}, ctx); // аналогично строке 586
                p++;// увеличиваю количество элементов массива 
            }
            
            p++;// увеличиваю количество элементов массива.

            snake[p] = new SnakePart({x: i, y: line}, {x: i, y: line + 1}, {x: i - 1, y: line}, ctx); // создаем элемента массива (поворот в конце строки)
        }

        else { //убрать полностью else не получилось. 
            i = widthH - 1; //Так как у нас координаты пойдут справа на лево и последняя клетка в строке имеет данное значение, это и будет 1 координата 1 элемента массива во второй строке. 
            p++; // увеличиваю количество элементов массива snake

            snake[p] = new SnakePart({x: i, y: line}, {x: i - 1, y: line}, {x: i, y: line - 1}, ctx); //задаю поворот 1 элементв массива объекта snake нечетной строки

            for (i = widthH - 2; i >= 1; i--) {// собственно цикл создания элементов массива snake с 28 до 1
                snake[p + 1] = new SnakePart({x: i, y: line}, {x: i - 1, y: line}, {x:i + 1, y: line}, ctx); // координаты вычесления нечетной строки при создании элементов массива snake 
                p++; // увеличиваю количество элементов массива 
            }
            
            p++; // увеличиваю количество объектов массива 
            snake[p] = new SnakePart({x: i, y: line}, {x: i, y: line + 1}, {x: i + 1, y: line}, ctx); // создаем элемента массива (поворот в конце строки)
            p++;
            
        }
        line++;

    } while (line <= 0); // завершаем большой цикл.  в зависимости от параметра line определяем количество необходимых строк, т.е сколько раз цикл будет выполнять код

    snake[p] = new SnakePart({x: snake[p - 1].prev.x, y: snake[p - 1].prev.y}, null, {x: snake[p - 1].coord.x, y: snake[p - 1].coord.y}, ctx)
    // создаем последний элемент массива snake, в котором будет распологаться голова.
    snake[0].next = null;
}

function appleMatch (appleID) {

    const canvas = document.getElementById("field");
    const ctx = canvas.getContext("2d");

    var widthH = canvas.width/widthCell;

    do {
        var collision = 0;
        var son = 0;
        var app = 0;
        
        var newX = apple[appleID].coord.x;
        var newY = apple[appleID].coord.y; 
        
        apple[appleID].coord = {x: Math.floor((Math.random() * ((widthH - 1) - 0 + 1))), y: Math.floor((Math.random() * ((widthH - 1) - 0 + 1)))};
        
        for ( ; son < snake.length-1; son++) {
           
            if (apple[appleID].coord.x == snake[son].coord.x && apple[appleID].coord.y == snake[son].coord.y) {
                collision = 1;
                break;
            }
        }
            
        if (collision == 1 || (apple[appleID].coord.x != newX && apple[appleID].coord.x != newY)) {
            continue;
        }

        for ( ; app < apple.length; app++) {
            
            if ( app == appleID ) {
                continue;
            }
                    
            if (apple[appleID].coord.x == apple[app].coord.x && apple[appleID].coord.y == apple[app].coord.y) {
                collision = 1;
                break;
            }
        }
         
    } while (collision == 1);
}

function palitra () {
    const canvas = document.getElementById("field");
    const ctx = canvas.getContext("2d");

    for (var i=0;i<30;i++){
        for (var j=0;j<30;j++){
            ctx.fillStyle = 'rgb('+
            Math.floor(Math.random()*256)+','+
            Math.floor(Math.random()*256)+','+
            Math.floor(Math.random()*256)+')';
            ctx.fillRect(j*20,i*20,20,20);
        }
    }
}



