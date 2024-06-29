let beginning = 0;
let numberMeaning = 1;
let heightPosition = 0;
let heightNumberMeaning = 100;
let heightPositionNew = 6;

let train = document.getElementById("train");
let floor = document.getElementById("floor");
let game = document.getElementById("game");
let height = document.getElementById("height");
let heightNumber = document.getElementById("heightNumber");
let display = document.getElementById("display");
let repeatButton = document.getElementById("repeatButton");

document.getElementById("button").onclick = function() {
    start();
    end();
    effects()
    heightEdit();
};


let number = setInterval(function number(){
    numberMeaning++;
    const meaning = document.getElementById('numbers');
    meaning.textContent = numberMeaning;

    if(numberMeaning == 15){
        numberMeaning = 0;
    }

    return;
}, 190);

function end(){
    clearInterval(number);
}

function start(){
    let request = requestAnimationFrame(function step(){
        if(beginning < 150){
            beginning += 5;
            train.style.bottom = beginning + 'px';

            requestAnimationFrame(step);
        }
    })
}

let intervalId;
function heightEdit(){
    intervalId = setInterval(function heightEditInterval(){
       heightPosition += heightPositionNew;
       height.style.top = heightPosition + 'px';

       if(heightPosition >= 900){
        heightPosition = 0;
        height.style.top = 0;
        heightPositionNew++;

        heightNumberMeaning += 100;
        heightNumber.textContent = heightNumberMeaning + "м";
       }
       if(heightNumberMeaning == numberMeaning){
        setTimeout(heightEnd, 1300);
       }
    }, 15);
}

function heightEnd(){
    clearInterval(intervalId);

    setTimeout(result, 900);
}

function result(){
    display.style.display = 'flex';
}

function repeatOnClick(repeat){
    floor.style.display = 'block';
    game.style.display = 'block';
    display.style.display = 'none';
    heightNumberMeaning = 100;
    heightNumber.textContent = "100м"
    heightPositionNew = 6;

    height.style.top = 180 + 'px';
    train.style.bottom = 5 + 'px';
}

function effects(){
    floor.style.display = 'none';
    game.style.display = 'none';
    numberMeaning = 1;
}

console.log(numberMeaning);