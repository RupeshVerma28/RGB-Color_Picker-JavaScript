function updateColor() {
    
    const color = document.getElementById("colorPicker").value;

   
    const colorDisplay = document.getElementById("colorDisplay");
    const hexCode = document.getElementById("hexCode");

    colorDisplay.style.backgroundColor = color;
    hexCode.innerText = color;
}


window.onload = updateColor;
