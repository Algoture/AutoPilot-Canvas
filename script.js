let canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");
car = new Car(100, 100, 50, 50);
car.draw(ctx);
car2 = new Car(200, 200, 50, 50);
car2.draw(ctx);
