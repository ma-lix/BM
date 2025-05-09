// Function to change the background color of the main area

function changeBgColor() {
    const color = document.getElementById('bgColorInput').value;
    document.getElementById('mainArea').style.backgroundColor = color;
    // alert("Background color changed")
}


// Function to change the heading text

function changeHeading() {
    const text = document.getElementById('headingTextInput').value;
    document.getElementById('mainHeading').textContent = text;
    // alert("Heading text changed")
}


// Function to change the text alignment of the heading 

function changeTextAlign() {
    const align = document.getElementById('textAlignInput').value;
    document.getElementById('mainHeading').style.textAlign = align;
}

function changeParaHeight() {
    const height = document.getElementById('paraHeightInput').value;
    document.getElementById('mainPara').style.height = height;
}

function changeParaWidth() {
    const width = document.getElementById('paraWidthInput').value;
    document.getElementById('mainPara').style.width = width;
}

function changeFlexDirection() {
    const dir = document.getElementById('flexDirectionInput').value;
    document.getElementById('boxContainer').style.flexDirection = dir;
}

function changeBoxGap() {
    const gap = document.getElementById('boxGapInput').value;
    document.getElementById('boxContainer').style.gap = gap;
}

function changeJustifyContent() {
    const justify = document.getElementById('justifyContentInput').value;
    document.getElementById('boxContainer').style.justifyContent = justify;
}


