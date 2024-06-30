let beginning = 0;
let numberMeaning = 0;
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
let sky = document.getElementById("body");
let resultPoint = document.getElementById("resultPoint");

//effects

let berd = document.getElementById("berd");
let berdPosition = -3000;
let cloud = document.getElementById("clouds");
let cloudHeight = -1500;
let air = document.getElementById("air");
let airHeight = -1900;
let plane = document.getElementById("plane");
let planeHeight = -1300;
let spacePeople = document.getElementById("spacePeople");
let spaceHeight = -300;

document.getElementById("button").onclick = function() {
    start();
    end();
    effects()
    heightEdit();
    berds();
};


let number = setInterval(function number(){
    numberMeaning++;
    const meaning = document.getElementById('numbers');
    meaning.style.marginLeft = numberMeaning * 5 + 'px';

    if(numberMeaning == 15){
        numberMeaning = 0;
    }
}, 190);

function end(){
    clearInterval(number);
}

function start(){
    let request = requestAnimationFrame(function step(){
        if(beginning < 120){
            beginning += 5;
            train.style.bottom = beginning + 'px';

            requestAnimationFrame(step);
        }
    })
}

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
       if(heightNumberMeaning == numberMeaning * 100){
        setTimeout(heightEnd, 1300);
       }

       if(heightNumberMeaning == 400){
        cloudFunc()
        }
        if(heightNumberMeaning == 600){
        airFunc();
        }   
        if(heightNumberMeaning == 900){
        planeFunc();
        }
        if(heightNumberMeaning == 1100){
            spaceFunc();
        }
        if(heightNumberMeaning == 1300){
            body.style.backgroundColor = '#19191a';
        }
        if(heightNumberMeaning == 1900){
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
    resultPoint.textContent = heightNumberMeaning + "м";
}

function repeatOnClick(repeat){
    location.reload ();
}

function effects(){
    floor.style.display = 'none';
    game.style.display = 'none';
}

// effects

function berds(){
    berd.style.display = 'flex';
    let plane = setInterval(function berdFly(){
        berdPosition += 15;
        berd.style.left = berdPosition + 'px';
        berd.style.top = berdPosition / 5 + 'px';

        if(berdPosition > 1500){
            clearInterval(berdFly);
            berd.display.style = 'none';
        }
    }, 20)
}

function cloudFunc(){
    clouds.style.display = 'flex';
    body.style.backgroundColor = '#98a3c7';
    let cloudFly = setInterval(function cloudFly(){
        cloudHeight++;
        clouds.style.top = cloudHeight + 'px';

        if(cloudHeight > 4000){
            clearInterval(cloudFly);
            clouds.display.style = 'none';
        }
    }, 100)
}

function airFunc(){
    body.style.backgroundColor = '#315ae0';

    air.style.display = 'flex';
    let airFly = setInterval(function airFly(){
        airHeight++;
        air.style.bottom = airHeight + 'px';

        if(cloudHeight > 1900){
            clearInterval(airFly);
            air.display.style = 'none';
        }
    }, 100)
}

function planeFunc(){
    body.style.backgroundColor = '#222252';

    plane.style.display = 'flex';
    let planeFly = setInterval(function planeFly(){
        planeHeight += 3;
        plane.style.left = planeHeight + 'px';

        if(planeHeight > 1300){
            clearInterval(planeFly);
            plane.display.style = 'none';
        }
    }, 100)
}

function spaceFunc(){
    body.style.backgroundColor = '#212136';

    spacePeople.style.display = 'flex';
    let spaceFly = setInterval(function spaceFly(){
        spaceHeight++;
        spacePeople.style.top = spaceHeight + 'px';

        if(spaceHeight > 600){
            clearInterval(planeFly);
            spacePeople.display.style = 'none';
        }
    }, 300)
}