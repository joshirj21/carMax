// Animation Toggler

var toggler = document.querySelector(".toggler");
var btn_toggler = document.querySelector(".nav-links-toggler");

var togglerFlag = false;
var running = false;

btn_toggler.addEventListener("click",(ev)=>{
    ev.preventDefault();
    if(!togglerFlag && !running){
        anime({
            targets: '.toggler',
            direction: 'normal',
            easing: 'linear',
            width: ['0%', '30%'],
            begin: function () {
                running = true;
            },
            complete: function () {
                togglerFlag = true;
                running = false;
            }
        });
    }
    else if(togglerFlag && !running){
        anime({
            targets: '.toggler',
            direction: 'normal',
            easing: 'linear',
            width: ['30%', '0%'],
            begin: function () {
                running = true;
            },
            complete: function () {
                togglerFlag = false;
                running = false;
            }
        });
    }
})


