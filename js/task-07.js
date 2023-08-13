const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
fontSizeControl.setAttribute("value", "16");

function changeFontSize() {
  const fontSizeValue = fontSizeControl.value;
  textSpan.style.fontSize = `${fontSizeValue}px`;
}
fontSizeControl.addEventListener("input", changeFontSize);
