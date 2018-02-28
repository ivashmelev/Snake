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
speed=1; //Скорость змейки
start = Date.now(); // сохранить время начала
dist="";

var timer = setInterval(function() { // вычислить сколько времени прошло с начала анимации
    var timePassed = Date.now() - start;

  
  move(timePassed);     // рисует состояние анимации, соответствующее времени timePassed

}, 20);

function move(e, timePassed){ //Функция движения змейки
    switch(e.keyCode){
        case 39: dist="right";
        break;

        case 38: dist="up";
        break;

        case 40: dist="down";
        break;

        case 37: dist="left";
        break;
    }

    switch(dist){
        case "right":
            timePassed = Date.now() - start;
            x+=1;
            snake.fillRect(x, y, width, height);
            snake.clearRect(x-10,y, width, height);
        break; 

        case "up":
            timePassed = Date.now() - start;
            y-=1;
            snake.fillRect(x, y, width, height);
            snake.clearRect(x, y+10, width, height);
        break; 

        case "down":
            timePassed = Date.now() - start;
            y+=1;
            snake.fillRect(x, y, width, height);
            snake.clearRect(x, y-10, width, height);
        break; 

        case "left":
            timePassed = Date.now() - start;
            x-=1;
            snake.fillRect(x, y, width, height);
            snake.clearRect(x+10, y, width, height); 
        break;        
    }

    if (x>500 || y>500 || x<-10 || y<-10){  //Выход за границу возвращает змейку в центр
        x=250; y=250;
    }
}

addEventListener ("keydown", move); //Слушатель нажатия клавиши для функции move