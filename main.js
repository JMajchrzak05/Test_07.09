const form = document.querySelector('form');
const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');
const display3 = document.querySelector('#display3');
const display4 = document.querySelector('#display4');
const firstName = document.querySelector('#firstName')
const surName = document.querySelector('#surName')
const grade = document.querySelector('#grade')
const schoolYear = document.querySelector('#schoolYear')
const company = document.querySelector('#company')
const startDate = document.querySelector("#startDate")
const endDate = document.querySelector("#endDate")
const questions = document.querySelector('#questions')
const displays = document.querySelector('#displays')


form.addEventListener('submit', function(evt) {
    evt.preventDefault()

    display1.innerHTML = "Praktykant: " + firstName.value
    display1.innerHTML += " " + surName.value
    display2.innerHTML = "z klasy: " + grade.value
    display3.innerHTML = "odbył praktykę w roku szkolnym " + schoolYear.value
    display3.innerHTML += " w firmie " + company.value
    display4.innerHTML = "Praktyka odbyła się od " + startDate.value + " do " + endDate.value 
    questions.classList.toggle('hidden')
    displays.classList.toggle('hidden')
    
    
})

form.addEventListener('#back', function(evt){

    questions.classList.toggle('hidden')
    displays.classList.toggle('hidden')
    display1.innerHTML = "";
    display2.innerHTML = "";
    display3.innerHTML = "";
    display4.innerHTML = "";
})