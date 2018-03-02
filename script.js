field = document.querySelector("div.field");
element = document.createElement("div");
snake=[element];
console.log(snake);
// field.appendChild(element);
console.log(element);
for (var i=0; i<10; i++){
    snake.push(element);
       
}
    fx = document.createElement("h2");
    field.appendChild(fx);    

start = Date.now();
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
            
        break;

        case "up":
            
        break;

        case "left":
            
        break;

        case "down":
            
        break;
    }

        if (x>500 || y>500 || x<0 || y<0){           
            
            
        }
    
}

addEventListener ("keydown", moveSnake)