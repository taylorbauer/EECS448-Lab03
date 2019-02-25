function manipulate() {
    console.log("Manipulating...");

    let red_border = document.getElementById("red_border").value;
    let green_border = document.getElementById("green_border").value;
    let blue_border = document.getElementById("blue_border").value;
    let width_border = document.getElementById("width_border").value;

    let red_bg = document.getElementById("red_bg").value;
    let blue_bg = document.getElementById("blue_bg").value;
    let green_bg = document.getElementById("green_bg").value;

    let paragraph = document.getElementById("paragraph");

    let color_border = "rgb(" + red_border + ", " + green_border + ", " + blue_border + ")";
    width_border += "px";

    let bg_color = "rgb(" + red_bg + ", " + green_bg + ", " + blue_bg + ")";

    paragraph.style.backgroundColor = bg_color;
    paragraph.style.borderWidth = width_border;
    paragraph.style.borderColor = color_border;
}