let num = 1;

function left() {
    num --;
    update();
}

function right() {
    num ++;
    update();
}

function update() {
    if (num == 0) {
        num = 5;
        update();
    }
    else if (num == 1) {
        document.getElementById("rotating_picture").src="bing_bong_1.png";
    }
    else if (num == 2) {
        document.getElementById("rotating_picture").src = "bing_bong_2.JPG";
    }
    else if (num == 3) {
        document.getElementById("rotating_picture").src = "bing_bong_3.JPG";
    }
    else if (num == 4) {
        document.getElementById("rotating_picture").src = "bing_bong_4.jpeg";
    }
    else if (num == 5) {
        document.getElementById("rotating_picture").src = "bing_bong_5.JPG";
    }
    else if (num == 6) {
        num = 1;
        update();
    }
}