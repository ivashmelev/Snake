field = document.querySelector("div.field");  
segment ="";
snakeBody=[];
weight=4;
dist="";
x=250;
y=250;
speed=1000;

    for (var i=0; i<weight; i++){
        segment = document.createElement("div");
        segment.className="segment-snake";
        segment.innerHTML = i;
        snakeBody.push({segment:segment, x:x-=10, y:y});
        field.appendChild(snakeBody[i].segment);
    }

    for (var i=0; i<weight; i++){
        ll = snakeBody[i].segment.style.top= snakeBody[i].y+"px";
        snakeBody[i].segment.style.left= snakeBody[i].x+"px";           
    }
    

    line = snakeBody.length-1; // Последний элемент массива
    count = snakeBody.length-line;
    

    console.log(line);

        line = snakeBody.length-1;


    a1=250;
    xHead = a1;
    yHead = y;

    console.log("x: "+xHead+" | "+"y: "+yHead);

    

start = Date.now();
var timer = setInterval(function() { // вычислить сколько времени прошло с начала анимации
    var timePassed = Date.now() - start;

  
  moveSnake(timePassed);     // рисует состояние анимации, соответствующее времени timePassed

}, speed);

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
                
                snakeBody.splice(0,0,{segment:segment, x:snakeBody[0].x+10, y:snakeBody[0].y});
                field.removeChild(snakeBody[line].segment);
                
                for (var i=0; i<1; i++){    
                        segment = document.createElement("div");
                        segment.className="segment-snake";
                        segment.innerHTML = i;
                        field.appendChild(snakeBody[i].segment);
                        snakeBody[i].segment.style.top= snakeBody[i].y+"px";
                        snakeBody[i].segment.style.left= snakeBody[i].x+"px";
                }
                
                console.log(snakeBody[0].x+" | "+snakeBody[1].x);
        break;

        case "up":
            snakeBody.splice(0,0,{segment:segment, x:snakeBody[0].x, y:snakeBody[0].y-10});
            field.removeChild(snakeBody[line].segment);
            for (var i=0; i<1; i++){
                        segment = document.createElement("div");
                        segment.className="segment-snake";
                        segment.innerHTML = i;
                        field.appendChild(snakeBody[i].segment);
                        snakeBody[i].segment.style.top= snakeBody[i].y+"px";
                        snakeBody[i].segment.style.left= snakeBody[i].x+"px";
                }
        break;

        case "left":
            snakeBody.splice(0,0,{segment:segment, x:snakeBody[0].x-10, y:snakeBody[0].y});
            field.removeChild(snakeBody[line].segment);
            for (var i=0; i<1; i++){
                        segment = document.createElement("div");
                        segment.className="segment-snake";
                        segment.innerHTML = i;
                        field.appendChild(snakeBody[i].segment);
                        snakeBody[i].segment.style.top= snakeBody[i].y+"px";
                        snakeBody[i].segment.style.left= snakeBody[i].x+"px";
                }
                if (snakeBody[0].x<snakeBody[1].x){
                    snakeBody[0].y-10;
                    snakeBody[0].segment.style.top=snakeBody[0].y+"px";
                    console.log("alarm!");
                }

                console.log(snakeBody[0].x+" | "+snakeBody[1].x);
        break;

        case "down":
            snakeBody.splice(0,0,{segment:segment, x:snakeBody[0].x, y:snakeBody[0].y+10});
            field.removeChild(snakeBody[line].segment);
            for (var i=0; i<1; i++){
                        segment = document.createElement("div");
                        segment.className="segment-snake";
                        segment.innerHTML = i;
                        field.appendChild(snakeBody[i].segment);
                        snakeBody[i].segment.style.top= snakeBody[i].y+"px";
                        snakeBody[i].segment.style.left= snakeBody[i].x+"px";
                }
        break;
    }

        // if (x>500 || y>500 || x<0 || y<0){           
            
            
        // }
    
}

addEventListener ("keydown", moveSnake)