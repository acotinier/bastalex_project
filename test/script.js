var flipboxState = 0;


function flipToConn(){
    if(flipboxState == 0){
        alert("Vous êtes déjà sur l'onglet de connexion.");
    }
    else{
        const labelinscr = document.querySelector("#labelinscr");
        const labelconn = document.querySelector("#labelconn");
        const card = document.querySelector("#flip-box-inner");
        card.classList.add("flipboxtofront");
        card.classList.remove("flipingboxback");
        flipboxState = 0;
        labelinscr.classList.add("nonactiveflip");
        labelconn.classList.remove("nonactiveflip");
        console.log("flipToConn success -> " , flipboxState);
    }
}
function flipToInscr(){
    if(flipboxState == 1){
        alert("Vous êtes déjà sur l'onglet d'inscription.");
    }
    else{
        const labelinscr = document.querySelector("#labelinscr");
        const labelconn = document.querySelector("#labelconn");
        const card = document.querySelector("#flip-box-inner");
        card.classList.remove("flipboxtofront");
        card.classList.add("flipingboxback");
        flipboxState = 1;
        labelconn.classList.add("nonactiveflip");
        labelinscr.classList.remove("nonactiveflip");
        console.log("flipToInscr success -> " , flipboxState);
    }
}


// var toggleAnim = 0;
// function testF(){
//     console.log(toggleAnim);
//     const card = document.querySelector('#flip-box-inner');
//     if (toggleAnim == 0){
//         card.classList.remove("flipboxtofront");
//         card.classList.add("flipingboxback");
//         toggleAnim = 1;
//     }
//     else{
//         card.classList.add("flipboxtofront");
//         card.classList.remove("flipingboxback");
//         toggleAnim = 0;
//     }
// }