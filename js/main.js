console.log("JavaScript File is linked");

//variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currentDraggedElement = null;
const resetBtn = document.querySelector(".reset-btn");
const labelBox = document.getElementById("label-box");

//functions

function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}

function resetGame() {
    console.log("Reset Game called");
    targetZones.forEach(zone => {
        if (zone.children.length > 0) {
            const label = zone.firstElementChild;
            labelBox.appendChild(label);
        }
    });
} 

//Event listeners

labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(target => {
    target.addEventListener("dragover", dragOver);
    target.addEventListener("drop", drop);
});
