field = document.querySelector("div.field");
segment ="";
snakeBody=[];
var weight=5;
dist="";
x=250;
y=250;
speed=1000;

    for (var i=0; i<weight; i++){
        segment = document.createElement("div");
        segment.className="segment-snake";
        segment.innerHTML = i;
        snakeBody.push({segment:segment, x:x, y:y});
        field.appendChild(snakeBody[i].segment);
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

//Кролик
max=490;
min=0;
rabbit=null;

    if (rabbit==null){
        randomX = Math.floor(Math.floor(Math.random()*(max-min+1)+min) / 10) * 10;
        randomY = Math.floor(Math.floor(Math.random()*(max-min+1)+min) / 10) * 10;
        rabbit = document.createElement("div");
        rabbit.className="rabbit";
        field.appendChild(rabbit);
        rabbit.style.top=250+"px";
        rabbit.style.left=270+"px";
        console.log(parseInt(rabbit.style.left),parseInt(rabbit.style.top));
    }

function moveSnake(e, timePassed,speed){
        if (snakeBody[0].x==parseInt(rabbit.style.left) && snakeBody[0].y==parseInt(rabbit.style.top)){
            console.log("eat!");
            field.removeChild(rabbit);

            randomX = Math.floor(Math.floor(Math.random()*(max-min+1)+min) / 10) * 10;
            randomY = Math.floor(Math.floor(Math.random()*(max-min+1)+min) / 10) * 10;




            rabbit = document.createElement("div");
            rabbit.className="rabbit";
            field.appendChild(rabbit);

            rabbit.style.top=randomY+"px";
            rabbit.style.left=randomX+"px";
            weight+=1;

            for (var i=0; i<1; i++){
                    segment = document.createElement("div");
                    segment.className="segment-snake";
                    segment.innerHTML = i;
                    field.appendChild(segment);
                    snakeBody[i].segment.style.top= snakeBody[i].y+"px";
                    snakeBody[i].segment.style.left= snakeBody[i].x+"px";
            }
            console.log(snakeBody);
            console.log(weight);

    }

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
                snakeBody.pop();
                field.removeChild(snakeBody[line].segment);

                for (var i=0; i<1; i++){
                        segment = document.createElement("div");
                        segment.className="segment-snake";
                        segment.innerHTML = i;
                        field.appendChild(snakeBody[i].segment);
                        snakeBody[i].segment.style.top= snakeBody[i].y+"px";
                        snakeBody[i].segment.style.left= snakeBody[i].x+"px";
                }
                if (snakeBody[0].x==snakeBody[2].x){
                    snakeBody[0].y-=10;
                    snakeBody[0].segment.style.top=snakeBody[0].y+"px";

                    // console.log("alarm!");
                }

                // console.log(snakeBody[0].x+" | "+snakeBody[1].x);
        break;

        case "up":
            snakeBody.splice(0,0,{segment:segment, x:snakeBody[0].x, y:snakeBody[0].y-10});
            snakeBody.pop();
            field.removeChild(snakeBody[line].segment);
            for (var i=0; i<1; i++){
                        segment = document.createElement("div");
                        segment.className="segment-snake";
                        segment.innerHTML = i;
                        field.appendChild(snakeBody[i].segment);
                        snakeBody[i].segment.style.top= snakeBody[i].y+"px";
                        snakeBody[i].segment.style.left= snakeBody[i].x+"px";
                }
            if (snakeBody[0].y==snakeBody[2].y){
                snakeBody[0].x+=10;
                snakeBody[0].segment.style.left=snakeBody[0].x+"px";

                // console.log("alarm!");
            }
        break;

        case "left":
            snakeBody.splice(0,0,{segment:segment, x:snakeBody[0].x-10, y:snakeBody[0].y});
            snakeBody.pop();
            field.removeChild(snakeBody[line].segment);
            for (var i=0; i<1; i++){
                        segment = document.createElement("div");
                        segment.className="segment-snake";
                        segment.innerHTML = i;
                        field.appendChild(snakeBody[i].segment);
                        snakeBody[i].segment.style.top= snakeBody[i].y+"px";
                        snakeBody[i].segment.style.left= snakeBody[i].x+"px";
                }
                if (snakeBody[0].x==snakeBody[2].x){
                    snakeBody[0].y-=10;
                    snakeBody[0].segment.style.top=snakeBody[0].y+"px";

                    // console.log("alarm!");
                }

                // console.log(snakeBody[0].x+" | "+snakeBody[1].x+" | "+snakeBody[0].y);
        break;

        case "down":
            snakeBody.splice(0,0,{segment:segment, x:snakeBody[0].x, y:snakeBody[0].y+10});
            snakeBody.pop();
            field.removeChild(snakeBody[line].segment);
            for (var i=0; i<1; i++){
                        segment = document.createElement("div");
                        segment.className="segment-snake";
                        segment.innerHTML = i;
                        field.appendChild(snakeBody[i].segment);
                        snakeBody[i].segment.style.top= snakeBody[i].y+"px";
                        snakeBody[i].segment.style.left= snakeBody[i].x+"px";
                }
            if (snakeBody[0].y==snakeBody[2].y){
                snakeBody[0].x+=10;
                snakeBody[0].segment.style.left=snakeBody[0].x+"px";

                // console.log("alarm!");
            }
        break;

    }


}



        // }

        // if(randomX%5==0){
        //     rabbit.style.left=randomX+"px";
        // }
        // if(randomY%5==0){
        //     rabbit.style.top=randomY+"px";
        // }
        console.log(randomX);
        console.log(randomY);

        // }
addEventListener ("keydown", moveSnake);
