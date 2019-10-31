let socket;
let yourColor;
let yourSize;

function setup() {
    createCanvas(600, 600);
    background(0);
    yourColor = [random(255), random(255), random(255)];
    let randomSize = random(10, 50);
    yourSize = [randomSize, randomSize];

    socket = io.connect('http://localhost:3000');
    socket.on('mouse', otherDrawing);
}

function draw() {
    
}

function otherDrawing(data) {
    noStroke();
    fill(data.color);
    ellipse(data.x, data.y, data.size[0], data.size[1]);
}

function mouseDragged() {   
    socket.emit('mouse',
        {
            x: mouseX,
            y: mouseY,
            color: yourColor,
            size: yourSize
        });
    fill(yourColor[0], yourColor[1], yourColor[2]);
    noStroke();
    ellipse(mouseX, mouseY, yourSize[0], yourSize[1]);
}
