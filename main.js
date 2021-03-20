// tady je místo pro náš program

//přidání třídy co CSS pomocí classListu
let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");

//odstaraním třídu
nadpis.classList.remove("zluty");

//pokud tam třída není tak se tam přídá pomocí toggle
nadpis.classList.toggle("zluty");


// při najetí myši onclickover sečti do console
function secti(a , b) {
    nadpis.innerHTML = a + b;
}


// po kliknutí křížku se zobrazuje v celém okně window dotaz zda chceme skutečně odejít
window.onbeforeunload = function () {
    return "Opravdu ?";
}

//! play
// audio - přehraj/play
/**
 * Funkce která přehraje předaný prvek
 * @param {string} elementSelector 
 */
function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

/**
    function prehraj() {
    let audioElement = document.querySelector(#js-audio);
    audioElement.play();
}
 */

//! pause
// audio - stopni/pause
/**
 * Funkce která pozastaví předaný prvek
 * @param {string} elementSelector 
 */
function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}





//! UKOL 0
// Ukol 1
function ztucni(ukol1) {
    ukol1.target.style.fontWeight = "bold"; 
    //nebo přidám třídu ztucni do css pomocí ukol1.target.classList.add('ztucni')
    // nebo document.querySelector(".odstavec").style.fontWeight = "bold"
}



//!UKOL 1
//Tlačítko “červené po kliknutí” bude odstavci přidávat/odebírat třídu, která bude barvu písma v odstavci měnit na červenou.
function zacervenej(ukol2) {
    let zacervenejOdstavec = document.querySelector(".odstavec");
    zacervenejOdstavec.classList.toggle("cerveny");
}



//!UKOL-2
//TODO nepřišla jsem jsem na správné řešení:(
//přidej tlačítko “větší po kliknutí”, které písmo zvětší o jeden pixel oproti jeho aktuální velikost.
function priKliknuti() {
    //let a = parseInt(".odstavec", 16) + "px";
    document.querySelector(".odstavec").style.fontSize = "x-large" ; 
}


//! UKOL 3
// ztišit
/**
 * Funkce která pozastaví předaný prvek
 * @param {string} elementSelector 
 */
function ztis(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0;
}

// hlasitost tak akorát 
/**
 * Funkce která pozastaví předaný prvek
 * @param {string} elementSelector 
 */
function medium(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}

// Na maximum
/**
 * Funkce která pozastaví předaný prvek
 * @param {string} elementSelector 
 */
function maximum(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}


// vrátit na začátek
/**
 * Funkce která pozastaví předaný prvek
 * @param {string} elementSelector 
 */
function naZacatek(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.currentTime = 0;
}