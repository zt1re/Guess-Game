let body = document.querySelector("body");
let againBtn = document.querySelector(".again-btn");
let title = document.querySelector(".title");
let input = document.querySelector(".input");
let checkBtn = document.querySelector(".check-btn");
let score = document.querySelector(".score");

let computerNum = Math.floor((Math.random() * 20) + 1);

againBtn.addEventListener('click', function() {
    location.reload();
});

checkBtn.addEventListener('click', check);
input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        check();
    }
});

console.log(computerNum);

function check() {
    let userNum = Number(input.value);
    
    if(!input.value) {
        alert('Enter a number');
        return;
    }
    if(computerNum == userNum) {
        title.textContent = "You Win 🎉";
        title.style.color = "green";
        input.disabled = true;
    }
    else {
        title.textContent = "Try Again"
        title.style.color = "orange";
        score.textContent--;
    }

    if(score.textContent == 0 ) {
        title.textContent = "You lose ☹️";
        title.style.color = "red";
        input.disabled = true;
    }

    input.value = '';
}

