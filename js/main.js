var btnToTop = document.getElementById("btnToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
};

btnToTop.addEventListener("click", function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
});



// Courses

function updateCourseLink() {
    var linkElement = document.getElementById('coursesLink');
    if (window.innerWidth >= 992) { 
        linkElement.href = '#l-courses';
    } else { 
        linkElement.href = '#courses';
    }
}

window.onload = updateCourseLink;
window.onresize = updateCourseLink;



// Price

//BYN,онлайн, Инд
//BYN,онлайн, Груп
//BYN,офлайн, Инд
//BYN,офлайн, Груп
//USD,онлайн, Инд
//USD,онлайн, Груп
//USD,офлайн, Инд
//USD,офлайн, Груп

//4 8 16 20 занятий
var tableOfPrice = [
    [ // BYN
        [ // онлайн
            [["100", "190", "370", "420"], // индивид
            ["80", "224", "416", "480"]], // группа
            // оффлайн
            [["100", "190", "370", "420"], // индивид
            ["80", "224", "416", "480"]]], // группа
        [ // USD
            [["50", "95", "185", "210"], // индивид
            ["44", "85", "160", "180"]], // группа
            // оффлайн
            [["50", "95", "185", "210"], // индивид
            ["44", "85", "160", "180"]]] // группа
    ],
    [ // EN
        [ // BYN
            [["200", "360", "700", "800"], // индивид
            ["0", "0", "0", "0"]], // группа
            // оффлайн
            [["200", "360", "700", "800"], // индивид
            ["0", "0", "0", "0"]]], // группа
        [ // USD
            [["50", "95", "180", "200"], // индивид
            ["0", "0", "0", "0"]], // группа
            // оффлайн
            [["50", "95", "180", "200"], // индивид
            ["0", "0", "0", "0"]]] // группа
    ]
];

var tableOfPriceOne = [
    [ // BYN
        [ // онлайн
            [["25", "24", "23", "21"], // индивид
            ["20", "19", "18", "16"]], // группа
            // оффлайн
            [["25", "24", "23", "21"], // индивид
            ["20", "19", "18", "16"]]], // группа
        [ // USD
            [["12.5", "12", "11.5", "10.5"], // индивид
            ["11", "10.5", "10", "9"]], // группа
            // оффлайн
            [["12.5", "12", "11.5", "10.5"], // индивид
            ["11", "10.5", "10", "9"]]] // группа
    ],
    [ // EN 
        [ // BYN
            [["50", "45", "44", "40"], // индивид
            ["0", "0", "0", "0"]], // группа
            // оффлайн
            [["50", "45", "44", "40"], // индивид
            ["0", "0", "0", "0"]]], // группа
        [ // USD
            [["12,5", "12", "11", "10"], // индивид
            ["0", "0", "0", "0"]], // группа
            // оффлайн
            [["12,5", "12", "11", "10"], // индивид
            ["0", "0", "0", "0"]]] // группа
    ]
]; 

window.currency = 0
window.format = 0
window.group = 0
window.language = 0; // 0 - русский 1 - английский
window.textCurrency = " BYN"

setValueInTableOfPrice(currency, format, group)

document.getElementById("currency1").onclick = function() {
    currency = 0
    textCurrency = " BYN"
    setValueInTableOfPrice(currency, format, group)
}
document.getElementById("currency2").onclick = function() {
    currency = 1
    textCurrency = " USD"
    setValueInTableOfPrice(currency, format, group)
}

// document.getElementById("currency3").onclick = function() {
//     currency = 2
//     textCurrency = " RUB"
//     setValueInTableOfPrice(currency, format, group)
// }

document.getElementById("typeFormat1").onclick = function() {
    format = 0
    setValueInTableOfPrice(currency, format, group)
}
document.getElementById("typeFormat2").onclick = function() {
    format = 1
    setValueInTableOfPrice(currency, format, group)
}

document.getElementById("typeGroup1").onclick = function() {
    group = 0 
    document.getElementById("timeOfLesson").innerHTML = "Занятия по 60 минут"
    setValueInTableOfPrice(currency, format, group)
}
document.getElementById("typeGroup2").onclick = function() {
    group = 1
    document.getElementById("timeOfLesson").innerHTML = "Занятия по 80 минут"
    setValueInTableOfPrice(currency, format, group)
}

document.getElementById("languageRU").onclick = function() {
    language = 0;
    setValueInTableOfPrice(currency, format, group);
}
document.getElementById("languageEN").onclick = function() {
    language = 1;
    setValueInTableOfPrice(currency, format, group);
}

function setValueInTableOfPrice(currency, format, group) {    
    document.getElementById("textPrice1").innerHTML = "<span>" + tableOfPrice[language][currency][format][group][0] + "</span>" + textCurrency;
    document.getElementById("textPrice2").innerHTML = "<span>" + tableOfPrice[language][currency][format][group][1] + "</span>" + textCurrency;
    document.getElementById("textPrice3").innerHTML = "<span>" + tableOfPrice[language][currency][format][group][2] + "</span>" + textCurrency;
    document.getElementById("textPrice4").innerHTML = "<span>" + tableOfPrice[language][currency][format][group][3] + "</span>" + textCurrency;

    document.getElementById("textPriceOne1").innerHTML = tableOfPriceOne[language][currency][format][group][0] + textCurrency + " за занятие";
    document.getElementById("textPriceOne2").innerHTML = tableOfPriceOne[language][currency][format][group][1] + textCurrency + " за занятие";
    document.getElementById("textPriceOne3").innerHTML = tableOfPriceOne[language][currency][format][group][2] + textCurrency + " за занятие";
    document.getElementById("textPriceOne4").innerHTML = tableOfPriceOne[language][currency][format][group][3] + textCurrency + " за занятие";
}

// Modal


document.querySelectorAll('.open-popup').forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var targetPopupId = button.getAttribute('data-popup');
        var targetPopup = document.getElementById(targetPopupId);
        targetPopup.classList.add('active');
    });
});

document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        var targetPopup = closeButton.closest('.popup');
        targetPopup.classList.remove('active');
    });
});





// _________Circles___________


      
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
        circle.style.transform = 'scale(0.8)';
    });

    circle.addEventListener('mouseleave', () => {
        circle.style.transform = 'scale(1)';
    });
});



const rings = document.querySelectorAll('.ring');

rings.forEach(ring => {
    ring.addEventListener('mouseenter', () => {
        ring.style.transform = 'scale(0.7)';
    });

    ring.addEventListener('mouseleave', () => {
        ring.style.transform = 'scale(1)';
    });
})
  











