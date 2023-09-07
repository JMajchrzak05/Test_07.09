const form = document.querySelector("form");
const date = document.querySelector("#date");
const topic = document.querySelector("#topic");
const report = document.querySelector("#report");
const hours = document.querySelector("#hours");
const level = document.querySelector("#level");
const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');
const display3 = document.querySelector('#display3');
const display4 = document.querySelector('#display4');
const displays = document.querySelector('#displays');
const back = document.querySelector('#back')

form.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const supervisor = document.querySelector(
        'input[name="supervisor"]:checked'
      ).value;

    display1.innerHTML = "Dnia: " + date.value;
    display1.innerHTML += " przerobiony został temat " + topic.value;
    display2.innerHTML = "Opiekunem tego dnia był " + supervisor.value;
    display3.innerHTML = "Temat przerabialiśmy przez " + hours.value + " godzin";
    display4.innerHTML = "Dzisiejszy temat opanowałem na " + level.value;

    form.classList.add('hidden');
    displays.classList.remove('hidden');
});

back.addEventListener('click', function(evt){
    form.classList.remove('hidden');
    displays.classList.add('hidden');
    display1.innerHTML = "";
    display2.innerHTML = "";
    display3.innerHTML = "";
    display4.innerHTML = "";
});