window.onload = function() {
    class SnakePart {
        constructor(pos, prev, next) {
            this.coord = pos;
            this.prev = prev;
            this.next = next;
        }
    }
var snake = Array();
snake[1] = new SnakePart([5,4], [5,4], null);
snake[2] = new SnakePart([5,5], snake[1].coord, snake[3].coord);
snake[3] = new SnakePart([5,6], snake[2].coord, snake[4].coord);
snake[4] = new SnakePart([6,6], snake[3].coord, snake[5].coord);
snake[5] = new SnakePart([7,6], snake[4].coord, snake[6].coord);
snake[6] = new SnakePart([7,7], snake[5].coord, snake[7].coord);
snake[7] = new SnakePart([7,8], null, snake[i].coord);
}