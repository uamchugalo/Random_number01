alert('Hya! Welcome to the secret number');
let limit = 100
let secret_number = parseInt(Math.random()*limit + 1);
let guess; //chute
let guess_count=1;
while (secret_number != guess){
    guess = prompt(`Digite um numero de 1 and ${limit}`);
    if (secret_number == guess){
        //correção da concordancia numerica do ingles
        let word_attempts = guess_count > 1 ? 'attempts' : 'attempt';
            alert(`Well done, you win in ${guess_count} ${word_attempts}`) 
    }
    else{//errou entrou aqui
        //dica se é maior ou menor
        if(guess < secret_number){
            alert(`The secret number is less than your guess ${guess}`);
        }
        else{
            alert(`The secret number is greater than your guess ${guess}`);
        }
        guess_count++;
    }
}