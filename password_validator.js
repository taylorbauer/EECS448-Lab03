function validate() {
    let first_input = document.getElementById("first_field");
    let second_input = document.getElementById("second_field");
    let message = document.getElementById("message");

    if (first_input.value != second_input.value) {
        console.log("These don't match!");
        message.innerHTML = "The two passwords must match.";
    }

    else if (first_input.value.length < 8)
    {
        console.log("Not long enough");
        message.innerHTML = "Your password must be at least 8 characters long.";
    }

    else {
        console.log("Great job")
        message.innerHTML = "Great job! You followed instructions!"
    }
}