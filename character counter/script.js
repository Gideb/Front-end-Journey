const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

const maxLength = 50;

textInput.addEventListener("input", () => {
    const currentLength = textInput.value.length;
    charCount.textContent = `Character Count: ${currentLength}/${maxLength}`;
    if(currentLength >= maxLength){
        charCount.style.color = "red";
        textInput.setAttribute("maxLength", 50);
    }else {
        charCount.style.color = "green";
    }
})