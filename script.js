// Initialize scores from localStorage or set to default values
let userScore = localStorage.getItem("userScore") ? parseInt(localStorage.getItem("userScore")) : 0;
let computerScore = localStorage.getItem("computerScore") ? parseInt(localStorage.getItem("computerScore")) : 0;

// Display scores when the page loads
document.querySelector(".userScore h1").innerText = userScore;
document.querySelector(".compScore h1").innerText = computerScore;

const pickkUserHand = (hand) => {
    // Hide current hands page
    let options = document.querySelector(".hands");
    options.style.display = "none";

    // Show the contest page
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // Set the user pick
    document.getElementById("userPickImg").src = `/assets/${hand}.png`;

    let cpHand = pickComputerHand();
    gameOn(hand, cpHand);
};

const pickComputerHand = () => {
    let hands = ["Rock", "Paper", "Scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];

    // Set comp pick
    document.getElementById("compPickImg").src = `/assets/${cpHand}.png`;

    return cpHand;
};

const gameOn = (userHand, cpHand) => {
    if (userHand === "Paper" && cpHand === "Scissors") {
        setDecision("YOU LOOSE!");
    } else if (userHand === "Paper" && cpHand === "Rock") {
        setDecision("YOU WIN!");
    } else if (userHand === "Paper" && cpHand === "Paper") {
        setDecision("ITS A TIE!");
    } else if (userHand === "Rock" && cpHand === "Rock") {
        setDecision("ITS A TIE!");
    } else if (userHand === "Rock" && cpHand === "Paper") {
        setDecision("YOU LOOSE!");
    } else if (userHand === "Rock" && cpHand === "Scissors") {
        setDecision("YOU WIN!");
    } else if (userHand === "Scissors" && cpHand === "Paper") {
        setDecision("YOU WIN!");
    } else if (userHand === "Scissors" && cpHand === "Rock") {
        setDecision("YOU LOOSE!");
    } else if (userHand === "Scissors" && cpHand === "Scissors") {
        setDecision("ITS A TIE");
    }
};

const setDecision = (decision) => {
    console.log(decision);

    document.querySelector(".resultHeading").innerText = decision;

    if (decision === "YOU WIN!") {
        userScore++;
        document.querySelector(".userScore h1").innerText = userScore;
        localStorage.setItem("userScore", userScore); // Update userScore in localStorage
    }
    if (decision === "YOU LOOSE!") {
        computerScore++;
        document.querySelector(".compScore h1").innerText = computerScore;
        localStorage.setItem("computerScore", computerScore); // Update computerScore in localStorage
    }

    const nextButton = document.querySelector(".Next");
    if (userScore > computerScore) {
        nextButton.style.display = "block";
    } else {
        nextButton.style.display = "none";
    }

    return decision;
};

const nextFunction = () => {
    window.location.href = "winner.html";
};

const restartGame = () => {
    let options = document.querySelector(".hands");
    options.style.display = "flex";

    let contest = document.querySelector(".contest");
    contest.style.display = "none";
};

function toggleRules() {
    const rulesContainer = document.querySelector(".rulecard");
    if (rulesContainer.style.display === "none" || rulesContainer.style.display === "") {
        rulesContainer.style.display = "block";
    } else {
        rulesContainer.style.display = "none";
    }
}
const resetScores = () => {
    // Clear scores in localStorage
    localStorage.setItem("userScore", 0);
    localStorage.setItem("computerScore", 0);

    // Reset the score variables
    userScore = 0;
    computerScore = 0;

    // Update the displayed scores
    document.querySelector(".userScore h1").innerText = userScore;
    document.querySelector(".compScore h1").innerText = computerScore;

    
    const nextButton = document.querySelector(".Next");
    nextButton.style.display = "none";

    alert("Scores have been reset!");
};