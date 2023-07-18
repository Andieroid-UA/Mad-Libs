//variables for user input
const adj1 = document.getElementById("adj1");
const noun1 = document.getElementById("noun1");
const adj2 = document.getElementById("adj2");
const clothing = document.getElementById("clothing");
const bodyPart = document.getElementById("bodyPart");
const verb1 = document.getElementById("verb1");
const food = document.getElementById("food");

//Keeping the console information for fun
arr = [adj1, adj2, noun1, clothing, bodyPart, verb1, food];

console.table(arr);

//Variable to display the mad lib
const madLibDisplay = document.querySelector('.mad-lib');
console.log(madLibDisplay);

//Variable for the form
const form = document.querySelector("form");
console.log(form);

//Variable for the mad lib story (Template Literal CSS housing HTML)
const story = 'My friends and I started a secret club! We meet every day by the <b>${adj1}</b> <b>${noun1}</b>. Our club has some very special rules to join, you have to wear a <b>${adj2}</b> <b>${clothing}</b> on your <b>${bodyPart}</b>. You are allowed to <b>${verb1}</b> during meetings, and you can only eat <b>${food}</b> for your meals. If you are interested in joining please let me know!'

form.addEventListener("submit", function (event) {
    event.preventDefault();

//Took out the emphasis on value name and put just the text for the pop-ups
    if (adj1.value == "") {
        alert(`"Adjective 1" must be filled out`);
        adj1.focus();
    } else if (noun1.value == "") {
        alert(`"Noun" must be filled out`);
        noun1.focus();
    } else if (adj2.value == "") {
        alert(`"Adjective 2" must be filled out`);
        adj2.focus();
    } else if (clothing.value == "") {
        alert(`"Clothing" must be filled out`);
        clothing.focus();
    } else if (bodyPart.value == "") {
        alert(`"Body Part" must be filled out`);
        bodyPart.focus();
    } else if (verb1.value == "") {
        alert(`"Verb" must be filled out`);
        verb1.focus();
    } else if (food.value == "") {
        alert(`"Food" must be filled out`);
        food.focus();
    } else {
        madLibStoryDisplay();
    }
});

function madLibStoryDisplay() {
    madLibDisplay.innerHTML = story
        .replace('${adj1}', adj1.value)
        .replace('${adj2}', adj2.value)
        .replace('${verb1}', verb1.value)
        .replace('${noun1}', noun1.value)
        .replace('${clothing}', clothing.value)
        .replace('${food}', food.value)
        .replace('${bodyPart}', bodyPart.value);
}
