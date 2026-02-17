let count = 0;

function updateCounter() {
    document.getElementById("counter").textContent = count;
}

function tickUp() {
    count++;
    updateCounter();
}

function tickDown() {
    count--;
    updateCounter();
}

function runForLoop() {
    let result = "";
    for (let i = 0; i <= count; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").textContent = result.trim();
}

function showOddNumbers() {
    let result = "";
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").textContent = result.trim();
}

function addMultiplesToArray() {
    let arr = [];
    for (let i = 5; i <= count; i += 5) {
        arr.unshift(i);
    }
    console.log(arr);
}

function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };
    console.log(car);
}

function loadCar(n) {
    let car;
    if (n === 1) car = carObject1;
    if (n === 2) car = carObject2;
    if (n === 3) car = carObject3;
    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(n) {
    let p = document.getElementById("styleParagraph");
    if (n === 1) p.style.color = "red";
    if (n === 2) p.style.color = "green";
    if (n === 3) p.style.color = "blue";
}
