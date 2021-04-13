var 체크이미지 = document.querySelector("#checkimg");
var 체크텍스트 = document.querySelector("#checktext");
var 기본값 = false;
var 서치 = document.querySelector("#searchclick");
var 탑서치 = document.querySelector("#topsearchline");
var 탑클로즈 = document.querySelector("#imgclose");

서치.addEventListener('click', function(){
    탑서치.style.top = "0px";
});

탑클로즈.addEventListener('click',function(){
    탑서치.style.top = "-140px"
})

체크이미지.addEventListener('click',function(){
    if(기본값 == false){
        var 컨펌 = confirm("로그인 상태를 유지하시겠습니까?\n타인이 개인정보를 도용할 수 있으니,\n주의하시기 바랍니다.");
        if(컨펌 == true){
            체크이미지.src= "bg_checkbox_checked.png";
            기본값 = true;
        }
        else{
            체크이미지.src = "bg_checkbox.png";
        }
    }
    else{
        체크이미지.src = "bg_checkbox.png";
        기본값 = false;
    }
})

체크텍스트.addEventListener('click',function(){
    if(기본값 == false){
        var 컨펌 = confirm("로그인 상태를 유지하시겠습니까?\n타인이 개인정보를 도용할 수 있으니,\n주의하시기 바랍니다.");
        if(컨펌 == true){
            체크이미지.src= "bg_checkbox_checked.png";
            기본값 = true;
        }
        else{
            체크이미지.src = "bg_checkbox.png";
        }
    }
    else{
        체크이미지.src = "bg_checkbox.png";
        기본값 = false;
    }
})