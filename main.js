const ageChecker = document.querySelector('#Age-Checker')
const yesButton = document.querySelector('.Si-Mayor');

yesButton.addEventListener('click', underAge)

function underAge() {
    ageChecker.classList.add('inactive')
} 