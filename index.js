// Your code goes here
document.addEventListener("DOMContentLoaded", replaceParagraphText);

function replaceParagraphText() {
    const paragraph = document.getElementById("text");
    paragraph.textContent = "This is really cool!";
}