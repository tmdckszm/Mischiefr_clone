var 서치 = document.querySelector("#searchclick");
var 탑서치 = document.querySelector("#topsearchline");
var 탑클로즈 = document.querySelector("#imgclose");


var 슬라이드 = document.querySelector("#slidewindow");
var 스위치넥스트 = document.querySelector("#switchicon_img1");
var 스위치이전 = document.querySelector("#switchicon_img2");
var 인포이미지1 = document.querySelector("#info_opacity1");
var 인포이미지2 = document.querySelector("#info_opacity2");
var 인포이미지3 = document.querySelector("#info_opacity3");
var 인포이미지4 = document.querySelector("#info_opacity4");
var 인포이미지5 = document.querySelector("#info_opacity5");
var 인포이미지6 = document.querySelector("#info_opacity6");
var 인포이미지7 = document.querySelector("#info_opacity7");
var count = 0;

var 폰트클릭1 = document.querySelector("#fontcolorchange1 a");
var 폰트클릭2 = document.querySelector("#fontcolorchange2 a");
var 폰트클릭3 = document.querySelector("#fontcolorchange3 a");

var 클릭텍스트 = document.querySelector("#info_detail_text");
var 클릭텍스트2 = document.querySelector("#info_detail_text2");
var 클릭텍스트3= document.querySelector("#info_detail_text3");

서치.addEventListener('click', function(){
    탑서치.style.top = "0px";
});

탑클로즈.addEventListener('click',function(){
    탑서치.style.top = "-140px"
})


폰트클릭1.addEventListener('click', function(){
    클릭텍스트.style.display = "block"
    클릭텍스트2.style.display = "none"
    클릭텍스트3.style.display = "none"
    폰트클릭1.style.color = "black";
    폰트클릭2.style.color = "#999";
    폰트클릭3.style.color = "#999";
})

폰트클릭2.addEventListener('click', function(){
    클릭텍스트2.style.display = "block"
    클릭텍스트.style.display = "none"
    클릭텍스트3.style.display ="none"
    폰트클릭1.style.color = "#999";
    폰트클릭2.style.color = "black"
    폰트클릭3.style.color = "#999";
})

폰트클릭3.addEventListener('click', function(){
    클릭텍스트3.style.display = "block"
    클릭텍스트.style.display = "none"
    클릭텍스트2.style.display = "none"
    폰트클릭1.style.color = "#999";
    폰트클릭2.style.color = "#999"
    폰트클릭3.style.color = "#black";
})

function 슬라이드이동(count){
    슬라이드.style.left = count * -557 + 'px';
}


스위치넥스트.addEventListener('click', function(){
   if(count<6){
       count++;
       슬라이드이동(count);
       console.log(count);
       if(count ==1){
            인포이미지1.style.opacity = "0.5";
            인포이미지2.style.opacity = "1";
            인포이미지3.style.opacity = "0.5";
       }
       else if(count ==2){
            인포이미지2.style.opacity = "0.5";
            인포이미지3.style.opacity = "1";
            인포이미지4.style.opacity = "0.5";
       }
       else if(count ==3){
            인포이미지3.style.opacity = "0.5";
            인포이미지4.style.opacity = "1";
            인포이미지5.style.opacity = "0.5";
       }
       else if(count ==4){
            인포이미지4.style.opacity = "0.5";
            인포이미지5.style.opacity = "1";
            인포이미지6.style.opacity = "0.5";
       }
       else if(count==5){
            인포이미지6.style.opacity = "0.5";
            인포이미지7.style.opacity = "1";
       }
   }
   else { 
        슬라이드이동(6);
   }
});

스위치이전.addEventListener('click', function(){
    if(count>=0){
        count--;
        슬라이드이동(count);
        console.log(count);
        if(count ==1){
             인포이미지1.style.opacity = "0.5";
             인포이미지2.style.opacity = "1";
             인포이미지3.style.opacity = "0.5";
        }
        else if(count ==2){
             인포이미지2.style.opacity = "0.5";
             인포이미지3.style.opacity = "1";
             인포이미지4.style.opacity = "0.5";
        }
        else if(count ==3){
             인포이미지3.style.opacity = "0.5";
             인포이미지4.style.opacity = "1";
             인포이미지5.style.opacity = "0.5";
        }
        else if(count ==4){
             인포이미지4.style.opacity = "0.5";
             인포이미지5.style.opacity = "1";
             인포이미지6.style.opacity = "0.5";
        }
        else if(count==5){
             인포이미지6.style.opacity = "0.5";
             인포이미지7.style.opacity = "1";
        }
        else if(count ==0){
            인포이미지1.style.opacity="1";
            인포이미지2.style.opacity="0.5";
        }
        else{
            슬라이드이동(0);
        }
    }
 });