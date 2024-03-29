// this is for the title 
let doctitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Back Play!!!";
});
window.addEventListener("focus", () => {
    document.title = doctitle;
});




// ################
// hna fin dart button ta3 close
const closingthegame = document.getElementById('close-game-button')
closingthegame.onclick = function (){
    window.close()
} 
// ###################









const container = document.querySelector('.container')
const number = ["☢", "☢", "☠", "☠", "☃", "☃", "☣", "☣", "❄", "❄", "⚛︎", "⚛︎", "✹", "✹", "✪", "✪"];

let sound_match = new Audio('sounds effect/match.mp3');
let sound_win = new Audio('sounds effect/winnig.mp3');
sound_win.volume=0.5;
const messageBox = document.getElementById("message-box");
const startGameButton = document.getElementById("start-game-button");

startGameButton.addEventListener("click", () => {
  messageBox.style.display = "none";
  messageBox.style.justifyContent = "center"
//   #hna fin dark dik l3ayba taa3 button ila click katban lik l game
  container.style.display = 'flex'
});


var shuf_number = number.sort(() => (Math.random() > .5) ? 2 : -1);
for (var i = 0; i < number.length; i++) {
    let box = document.createElement('div');
    
    box.className = 'item';
    box.innerHTML = shuf_number[i];
    box.onclick = function() {
        this.classList.add('boxOpen');
        setTimeout(function() {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML)
                 {
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    sound_match.play();
                    
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    
                };
                  
                
                if (document.querySelectorAll('.boxMatch').length == shuf_number.length) {
                    
                    sound_win.play()
                   setTimeout(function(){
                    alert('Congradulations!!!');
                   } , 700);
                    


                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    
                }; 
               
            }
        },750);
    };
    document.querySelector('.game').appendChild(box);
}