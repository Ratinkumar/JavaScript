const max= prompt("Enter the max number.");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number.");

while(true)
{
    if(guess=="quit")
    {
        console.log("User quit.");
        break;
    }
    else if(guess == random)
    {
        console.log("You are right! Congrats!! random number was",random);
        break;
    }
    else if(guess < random)
    {
        guess=prompt("Your guess is too small.Please try again...");
    }
    else
    {
        guess=prompt("Your guess is too large.Please try again...");
    }
}