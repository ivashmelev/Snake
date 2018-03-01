field = document.getElementsByClassName("field")[0];
snake = document.getElementsByClassName("snake")[0];
x = 250;
y = 250;
snake.style.left=x+"px";
snake.style.top=y+"px";
dist="";
speed=1;
start=Date.now();
width=10;
height=10;
snake.style.width=width+"px";
snake.style.height=height +"px";
bodysnake=[{x:250, y:250}];

var timer = setInterval(function() { // вычислить сколько времени прошло с начала анимации
    var timePassed = Date.now() - start;

  
  moveSnake(timePassed);     // рисует состояние анимации, соответствующее времени timePassed

}, 20);


function moveSnake(e, timePassed){
    switch(e.keyCode){
        case 39: dist="right";
        break;
        case 38: dist="up";
        break;
        case 37: dist="left";
        break;
        case 40: dist="down";
        break;
    }

    switch(dist){
        case "right": 
            var timePassed = Date.now() - start;
            // x+=speed;
            bodysnake.x+=speed;
            console.log(bodysnake.x);
            // snake.style.left=x+"px";
            // snake.style.top=y+"px";

        break;

        case "up":
            var timePassed = Date.now() - start;
            y-=speed;
            snake.style.left=x+"px";
            snake.style.top=y+"px";
        break;

        case "left":
            var timePassed = Date.now() - start;
            x-=speed;
            snake.style.left=x+"px";
            snake.style.top=y+"px";
        break;

        case "down":
            var timePassed = Date.now() - start;
            y+=speed;
            snake.style.left=x+"px";
            snake.style.top=y+"px";
        break;
    }

        if (x>500 || y>500 || x<0 || y<0){           
            x=250;
            y=250;            
            snake.style.left=x+"px";
            snake.style.top=y+"px";
            
        }
    
}

addEventListener ("keydown", moveSnake)