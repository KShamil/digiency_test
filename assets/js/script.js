"use strict"

const langItem = document.querySelectorAll('.js-link');
const langBtn = document.querySelector('.js-btn');
const langItemChoose = document.querySelector('.choose_title');
const langHeaderBtn = document.querySelector('.header_btn');
const langChooseBtn = document.querySelector('.choose_btn');
const langServiceTitle = document.querySelector('.service_title');
const langServiceSubtitle = document.querySelector('.service_subtitle');
const langCardTitle = document.querySelectorAll('.card_title');
const langAboutTitle = document.querySelector('.about_title');
const langAboutSubtitle = document.querySelector('.about_subtitle');
const langInfoLink = document.querySelectorAll('.info_link');

let changeLangArr = [
    ["Ana Səhifə","Haqqımızda","Xidmət","Portfolio","Blog","Əlaqə"], //index 0
    ["Home","About Us","Service","Portfolio","Blog","Contact Us"], //index 1
    ["Biznesiniz və Müştəriləriniz üçün nəyin vacib olduğunu seçin."], //index 2
    ["Choose What Matters To Your Business & Your Customers."],//index 3
    ["Danışaq"],//index 4
    ["Let’s Talk"],//index 5
    ["Indi Başla"],//index 6
    ["Get Start Now"],//index 7
    ["Bizim xidmətlə"],//index 8
    ["Our Services"],//index 9
    ["Biz Nə Edirik"],//index 10
    ["What We Do"],//index 11
    ["UX Dizaynı","Oyun Dizaynı","Qrafik dizayn","Veb Dizayn","Proqram İnkişafı","Rəqəmsal Marketinq"],//index 12
    ["UX Design","Game Design","Graphic Design","Web Design","App Development","Digital Marketing"],//index 13
    ["Haqqımızda"],//index 14
    ["About US"],//index 15
    ["Bizim agentlik ilə biznesinizi inkişaf etdirin"],//index 16
    ["Grow Your Business With Our Agency"],//index 17
    ["İnnovativ vebsayt dizaynı","Qlobal tendensiyalarla UI/UX dizaynı","Veb və e-poçt hostinq xidməti"],//index 18
    ["Innovative website design","UI/UX design with global trends","Web and email hosting service"]//index 19

];

const az = [
    {
        home: "Ana Shife"
        
    }
]

const en =[
    {
        home: "Home"
    }
]

const changeLangFunc =()=> {
    if (langBtn.innerHTML == "AZE" ) {
        for (let index = 0; index < changeLangArr[0].length; index++) {
            langItem[index].innerHTML = changeLangArr[0][index];
            langItemChoose.innerHTML = changeLangArr[2];
            langHeaderBtn.innerHTML = changeLangArr[4];
            langChooseBtn.innerHTML = changeLangArr[6];
            langServiceTitle.innerHTML = changeLangArr[8];
            langServiceSubtitle.innerHTML = changeLangArr[10];
            langBtn.innerHTML = "ENG";

            for (let index = 0; index < changeLangArr[12].length; index++) {
                langCardTitle[index].innerHTML = changeLangArr[12][index];
                
            }

            langAboutTitle.innerHTML = changeLangArr[14];
            langAboutSubtitle.innerHTML = changeLangArr[16];
            
            for (let index = 0; index < changeLangArr[18].length; index++) {
                langInfoLink[index].innerHTML = changeLangArr[18][index];
                
            }
        }
        
    } else {
        for (let index = 0; index < changeLangArr[1].length; index++) {
            langItem[index].innerHTML = changeLangArr[1][index];
            langItemChoose.innerHTML = changeLangArr[3];
            langHeaderBtn.innerHTML = changeLangArr[5];
            langChooseBtn.innerHTML = changeLangArr[7];
            langServiceTitle.innerHTML = changeLangArr[9];
            langServiceSubtitle.innerHTML = changeLangArr[11];
            langBtn.innerHTML = "AZE";

            for (let index = 0; index < changeLangArr[13].length; index++) {
                langCardTitle[index].innerHTML = changeLangArr[13][index];
                
            }

            langAboutTitle.innerHTML = changeLangArr[15];
            langAboutSubtitle.innerHTML = changeLangArr[17];

            for (let index = 0; index < changeLangArr[19].length; index++) {
                langInfoLink[index].innerHTML = changeLangArr[19][index];
                
            }
        }
        
    }
}

langBtn.onclick = changeLangFunc;




