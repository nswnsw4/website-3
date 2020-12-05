window.addEventListener("scroll",function(){
    var navBar = document.querySelector(".nav-bar");
    var sec1 = document.querySelector(".sec-1");
    var sec2 = document.querySelector(".sec-2");
    var logo = document.querySelector(".logo");
    var toggle = document.querySelector(".toggle");
    var links = document.getElementsByClassName("links");

    navBar.classList.toggle("sticky",window.scrollY > 130);
    sec1.classList.toggle("white",window.scrollY > 130);
    sec2.classList.toggle("white",window.scrollY > 130);
    logo.classList.toggle("black",window.scrollY > 130);
    toggle.classList.toggle("black",window.scrollY > 130);
    for (var e =0; e <= links.length; e++){
        links[e].classList.toggle("black",window.scrollY > 130);
    }
});

var i = 0;

function toggle(){
    if (i == 0){
        document.querySelector(".sec-2").style.display = "none";
        i++
    }

    else if (i == 1){
        document.querySelector(".sec-2").style.display = "flex";
        i--
    }
};

