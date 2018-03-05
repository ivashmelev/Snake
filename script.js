
// field = document.querySelector("div.field");
 field=document.getElementsByClassName("field")[0];        
 element = document.createElement("div");
 snake=[];
 dist="";
 console.log(snake);

 // field.appendChild(element);
    for (var i=0; i<10; i++){
        
        // console.log(snake);
        
    }
    snake.push(element);
    console.log(snake);
    field.appendChild(element);
    console.log(field);   


    ul = document.createElement("ul");
    li = document.createElement("li");
    list = [];
    console.log(list);
    for (var i=0; i<10; i++){
        list.push(li);
        // ul.appendChild(list[0]);
        ul.appendChild(list[1]);
        
    }
    // ul.appendChild(list[i]);   
    console.log(list);
    console.log(ul);
    document.body.appendChild(ul);
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