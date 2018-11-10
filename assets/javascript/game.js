//Create array of choices for computer
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u" ,"v", "w", "x", "y", "z"]

//Create blank array to hold user guesses for future display
var userGuessesArray = [];

//Create variables to hold number of wins, losses
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var sessionsLeft = 10; //10 guesses per 1 session



//Create variables that reference places in the HTML to display things
var userGuessesText = document.getElementById("user-guesses-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var sessionsLeftText = document.getElementById("sessions-left-text");
var evaluationText = document.getElementById("evaluation-text");
var evaluationText2 = document.getElementById("evaluation-text2");

//Message to instructors
// alert("Welcome.  I have console.logged the computer choices if you would like to cheat the system.  I have also added keystroke validation to exclude duplicates and anything other than alphabet.  There are also escalating psychic evaluation messages.");


//Initialize Randomized computer guess 
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("This is the initialize computerChoice: " + computerChoice)


//Evaluate user guess by key event
document.onkeyup = function(event) {
    function resetPage() {    
        evaluation = 0;
        wins = 0;
        losses = 0;
        sessionsLeft = 10;
        resetSession();
    }
    
    function resetSession() {
        userGuessesArray = [];
        guessesLeft = 10;
        //Randomized computer guess 
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("This is the reset computerChoice: " + computerChoice)
    };
    
    //Determines what key was pressed by user
    var userGuess = event.key;
    // console.log(userGuess); // TEST OK
    
    //Validate user keystroke 
    function validateUserKey() {
        if (userGuessesArray.includes(userGuess)) {
        //Excludes entry of duplicate letters in array.  
        //Maintains # of guessesLeft    
        alert("You have already entered this letter genius.");
        guessesLeft++;
        } else if (alphabet.includes(userGuess)){
        //Add user guess to userGuessesArray
        userGuessesArray.push(userGuess);
        // console.log(userGuessesArray); //TEST OK
        } else {
        alert("Not a valid letter of the alphabet.");
        guessesLeft++;
        }
    };
    


    //Evaluate user vs. compter 
    if (sessionsLeft === 0) {
        resetPage();
        alert("Thank you for your participation.  You can now put your tinfoil hat back on.");
    } else if (guessesLeft <= 1) {
        losses++;
        resetSession();
       
    } else if (userGuess === computerChoice) {
        wins++;
        sessionsLeft--;
        resetSession();
    } else {
         //Subtract 1 from guessesLeft
         validateUserKey();
         guessesLeft--;
    };

    
    
    //Evaluate user psychic ability
    var evaluation = (wins/10)*100;
    if (evaluation <= 30) {
        evaluationText.textContent = evaluation.toFixed(2) + "% psychic ability.";
        evaluationText2.textContent = "Even a monkey is better than this.";
    
    } else if ((evaluation >= 31) && (evaluation <= 60)) {
        evaluationText.textContent = evaluation.toFixed(2) + "% psychic ability."; evaluationText2.textContent = "Blind luck is not a skill.";

    } else {
        evaluationText.textContent = evaluation.toFixed(2) + "% psychic ability. ";
        evaluationText2.textContent = "An NSA operative will contact you shortly.";
    }

    //Display the user guesses and wins/losses/ties
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    sessionsLeftText.textContent = sessionsLeft;
    userGuessesText.textContent = userGuessesArray.toString();
}


