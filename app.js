const inputt = document.querySelector('.input');
const button = document.querySelector('.btn');
const output = document.querySelector('.output');

console.log(inputt);
console.log(button);
console.log(output);

function perform() {
    output.innerHTML = inputt.value;
    inputt.value = "";
}

// Add keydown event listener to the input field
inputt.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        perform();
    }
});

// Add click event listener to the button
button.addEventListener('click', () => {
    perform();
});
