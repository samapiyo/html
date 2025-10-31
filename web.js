//document.getElementById("search").addEventListener("click", function() 

//username =window.prompt("Enter your Git#450a9702Hub username:");
//console.log(username);
const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "  #0b8dff1f";





let searchhistory;
document.getElementById("submit").onclick = function() {
    searchhistory = document.getElementById("search").value;
    console.log(searchhistory);

    
}
let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
   // console.log(username);
}
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Believe you can and you're halfway there.",
    "We are not what we know but what we are willing to learn.",
    "Good people are good because they've come to wisdom through failure.",
    "Your word is a lamp for my feet, a light for my path.",
    "The first problem for all of us, men and women, is not to learn, but to unlearn."
];
const usedIndexes = new Set();
const quoteElement = document.getElementById("quotes");
function generateQuote() {
   // quoteElement.innerHTML = "Here is your quote:"
   const randomIdx = Math.floor(Math.random() * quotes.length);
   const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;

}
