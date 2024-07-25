const display = document.getElementById("display");


const deleteChar = () => {
    display.value = display.value.slice(0,-1)
}

const displayChar = (char) => {
    display.value += char
}

const clearDisplay = () => {
    display.value = ''
}

const calculate = () => {
    display.value = eval(display.value)
}
 




