canvas = document.getElementById("canvas");    //Объявление элемента холста
canvas.width=500;   //Ширина холста
canvas.height=500;  //Высота холста
snake = canvas.getContext("2d");  //Присваивание контекста
snake.fillStyle = "black";    //Тип контекста
x = 250;    //Отступ по оси x
y= 250;     //Отступ по оси y
width=10;   //Ширина контекста
height=10;  //Высота контекста
snake.fillRect(x, y, width, height); //Размер и расположение контекста на холсте
speed=10; //Скорость змейки
function move(e){ //Функция движения змейки
    console.log(e.which);
    switch(e.keyCode){
        case 39:    //Движение вправо
            for(var i=0; i<speed; i++){
                x+=1;
                snake.fillRect(x, y, width, height);
                snake.clearRect(x-10,y, width, height);                
            }
        break;
        case 38:    //Движение вверх
            for(var i=0; i<speed; i++){
                y-=1;
                snake.fillRect(x, y, width, height);
                snake.clearRect(x, y+10, width, height);
            }
        break;

        case 40:    //Движение вниз
            for(var i=0; i<speed; i++){
                y+=1;
                snake.fillRect(x, y, width, height);
                snake.clearRect(x, y-10, width, height);
            }
        break;

        case 37:    //Движение влево
            for(var i=0; i<speed; i++){
                x-=1;
                snake.fillRect(x, y, width, height);
                snake.clearRect(x+10, y, width, height);
            }
        break;
    }

    if (x>500 || y>500 || x<0 || y<0){  //Выход за границу возвращает змейку в центр
        x=250; y=250;
    }
    // console.log(e.keyCode);
    console.log("x:"+x+"; "+"y:"+y);
}

// addEventListener ("keydown", move); //Слушатель нажатия клавиши для функции move
addEventListener ("keydown", move);