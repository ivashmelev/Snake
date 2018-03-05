field = document.querySelector("div.field");  
segment = document.createElement("div");
snakeBody=[];
weight=3;
dist="";
x=250;
y=250;


    for (var i=0; i<weight; i++){
        segment = document.createElement("div");
        segment.className = "segment-snake";
        snakeBody.push(segment);
        field.appendChild(snakeBody[i]);        
    }
    console.log(snakeBody);

    for (var i=0; i<weight; i++){
        x-=10;
        snakeBody[i].style.top= y+"px";
        snakeBody[i].style.left= x+"px";
        
               
    }
    

    line = weight-1;
    field.removeChild(snakeBody[line]); // Удаление последнего элемента массива (связь через weight)
    
    console.log(line);

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

        // if (x>500 || y>500 || x<0 || y<0){           
            
            
        // }
    
}

addEventListener ("keydown", moveSnake)