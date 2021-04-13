var 첫번째줄 = document.querySelectorAll(".마우스오버");
var 서치 = document.querySelector("#searchclick");
var 탑서치 = document.querySelector("#topsearchline");
var 탑클로즈 = document.querySelector("#imgclose");


for(var i=0; i<첫번째줄.length; i++){
    첫번째줄[i].addEventListener("mouseover", function(){
        this.style.opacity ="0.5";
    })
    첫번째줄[i].addEventListener("mouseout", function(){
        this.style.opacity ="1";
    })
}

서치.addEventListener('click', function(){
    탑서치.style.top = "0px";
});

탑클로즈.addEventListener('click',function(){
    탑서치.style.top = "-140px"
})



