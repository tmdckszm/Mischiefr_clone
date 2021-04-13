var 이미지체인지 = document.querySelector("#imgchange1");
var 이미지체인지2 = document.querySelector("#imgchange2");
var 이미지체인지3 = document.querySelector("#imgchange3");
var 서치 = document.querySelector("#searchclick");
var 탑서치 = document.querySelector("#topsearchline");
var 탑클로즈 = document.querySelector("#imgclose");

서치.addEventListener('click', function(){
    탑서치.style.top = "0px";
});

탑클로즈.addEventListener('click',function(){
    탑서치.style.top = "-140px"
})


이미지체인지.addEventListener('mouseover', function(){
    이미지체인지.src = "outer_change_1.jpg"
    
})

이미지체인지.addEventListener('mouseout', function(){
    이미지체인지.src = "outer.img1.jpg"
    
})

이미지체인지2.addEventListener('mouseover', function(){
    이미지체인지2.src = "outer_change_img2.jpg"
    
})

이미지체인지2.addEventListener('mouseout', function(){
    이미지체인지2.src = "outer.img2.jpg"
    
})

이미지체인지3.addEventListener('mouseover', function(){
    이미지체인지3.src = "outer_change_img3.jpg"
    
})

이미지체인지3.addEventListener('mouseout', function(){
    이미지체인지3.src = "outer.img3.jpg"
    
})