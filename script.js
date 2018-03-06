field = document.querySelector("div.field");  
segment ="";
snakeBody=[];
weight=3;
dist="";
x=250;
y=250;
speed=10;

    for (var i=0; i<weight; i++){
        segment = document.createElement("div");
        segment.className="segment-snake";
        segment.innerHTML = i;
        snakeBody.push({segment:segment, x:x-=10, y:y, i:i});
        field.appendChild(snakeBody[i].segment);
    }
    console.log(snakeBody);

    for (var i=0; i<weight; i++){
        x-=10;
        ll = snakeBody[i].segment.style.top= snakeBody[i].y+"px";
        snakeBody[i].segment.style.left= snakeBody[i].x+"px";           
    }
    

    line = snakeBody.length-1; // Последний элемент массива
    count = snakeBody.length-line;
    //field.removeChild(snakeBody[line]); // Удаление последнего элемента массива (связь через weight)
    // snakeBody.pop();
    // field.removeChild(snakeBody[line]);
    
    console.log(line);

    // for (var i=0; i<count; i++){
    //     line = snakeBody.length-1;
        
    //     field.removeChild(snakeBody[i]);
    // }

    // firstSegment = x+=10; //Перенос последнего элемента в начало
    a1=250;
    xHead = a1;
    yHead = y;
    // console.log(Number(firstSegment));
    // yHead = snakeBody[0].style.top;
    console.log("x: "+xHead+" | "+"y: "+yHead);
    // snakeBody[line].style.left = xHead +"px";
    // snakeBody[line].style.top = yHead + "px";
    // console.log(snakeBody[2].style.left);    
    

start = Date.now();
var timer = setInterval(function() { // вычислить сколько времени прошло с начала анимации
    var timePassed = Date.now() - start;

  
//   moveSnake(timePassed);     // рисует состояние анимации, соответствующее времени timePassed

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
            for (var i=0; i<3; i++){
                snakeBody[0].x+=10; 
                if (snakeBody[0].x>240){
                    snakeBody[0].segment.style.left=snakeBody[0].x+"px";
                    snakeBody[i].x=snakeBody[0].x-10;
                    snakeBody[i].segment.style.left=snakeBody[i].x+"px";

                }
            }
            // for (var i in snakeBody){
            //     snakeBody[0]=[snakeBody[i], snakeBody[i]=snakeBody[0]][0]; //Перебор ассоциативного массива
            // }

        break;

        case "up":
            for(var i=0; i<3; i++){
                snakeBody[0].y-=10;
                if (snakeBody[0].y<250){
                    snakeBody[0].segment.style.top=snakeBody[0].y +"px";
                    snakeBody[i].y=snakeBody[0].y-10;
                    snakeBody[i].segment.style.top=snakeBody[i].y+"px";
                }
            }
        // console.log(snakeBody);

        // for (var i in snakeBody){
        //     snakeBody[0]=[snakeBody[i], snakeBody[i]=snakeBody[0]][0]; //Перебор ассоциативного массива
        // }
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