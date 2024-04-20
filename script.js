// Function to append numbers or operators to the input box
function append(value) {
    document.getElementById("input-box1").value += value;
}

// Function to delete the last character from the input box
function deleteChar() {
    var input = document.getElementById("input-box1");
    input.value = input.value.slice(0, -1);
}

// Function to clear the input box
function clearInput() {
    document.getElementById("input-box1").value = "";
}

// Function to calculate the result
function calculate() {
    var input = document.getElementById("input-box1").value;
    var result = eval(input);
    document.getElementById("result").innerText = "Result: " + result;
}