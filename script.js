window.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelector('div'),
		won = document.querySelector('.won'),
		didNotGuess = document.querySelector('.did-not-guess'),
		lose = document.querySelector('.lose'),
		youHaveTries = document.querySelector('.you-have-tries');

const secretNumber = Math.ceil(Math.random() * 10);
let tries = 3;

console.log(secretNumber);

buttons.addEventListener('click', (event) => {
	let target = event.target;
	let id = target.id;
	while(tries >=1) {
	tries--;
	if(target.nodeName == 'BUTTON') {
		target.classList.add('addColor');
		youHaveTries.classList.add('hide');
	}
	if (id != secretNumber) {
		didNotGuess.classList.add('show');
		didNotGuess.textContent = `Sorry, you did not guess the number. Try again! Left tries: ${tries}`;
		if(tries === 0) {
			lose.classList.add('show');
			didNotGuess.classList.remove('show');
		}
		break;
	} else {
		// alert('You have guessed a number!');
		won.classList.add('show');
		youHaveTries.classList.add('hide');
		didNotGuess.classList.remove('show');
		tries=0;
		break;
		}
	}
	});
});





