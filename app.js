const countField = document.getElementById('word-field');
const submitButton = document.getElementById('submit-button');
const total = document.getElementById('total');
total.innerText = "Enter your text in the field below and hit enter.";
submitButton.addEventListener("click", (event) =>{
    event.preventDefault();
    
    if (countField.value === "" || countField.value <= 0){
        total.style.color = 'red';
        total.innerText = "The word count field cannot be empty.";
    } else {
        let words = countField.value.split(' ');
        words = words.filter(Boolean);
        let count = words.length;
        total.style.color = 'green';
        total.innerText = `There are a total of ${count} words.`;
    }
});

