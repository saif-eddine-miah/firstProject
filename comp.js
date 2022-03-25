let battleValue = 0;
document.getElementById("empire-select").addEventListener("change",function(event){
console.log(event);
let key=event.target.value;
document.getElementById('id_img_empire').src = 'src/img/EmpireImage/' + key + '.png';
var myBar = document.getElementById('myBar');
console.log(key);
if (key==1){
battleValue = 80;
}
else if (key==2){
battleValue = 85;
}
else if (key==3){
battleValue = 70;
}
else if (key==4){
battleValue = 90;
}
else if (key==5){
battleValue = 65;
}

})
document.getElementById("rebel-select").addEventListener("change",function(event){
console.log(event);
let key=event.target.value;
document.getElementById('id_img_rebel').src = 'src/img/RebelImage/' + key + '.png';
if (key==1){
battleValue -= 45;
}
else if (key==2){
battleValue -= 60;
}
else if (key==3){
battleValue -= 35;
}
else if (key==4){
battleValue -= 35;
}
else if (key==5){
battleValue -= 25;
}
})
let winner = document.getElementById('win')
function loadBattleBar(){
window.scrollTo(0,450);
console.log(battleValue)
myBar.style.width = `${battleValue}%`;
if (battleValue<50){winner.innerText =  ("Rebel's won !") ;winner.style.color='rgb(0, 183, 255)';}
if (battleValue>50){winner.innerText =  ("The Empire won !") ;winner.style.color='rgb(224, 0, 0)';}
battleValue = 0;
console.log(battleValue)

}

document.getElementById("reload").addEventListener("click",function(event){
    
    window.location.reload();
});
history.scrollRestoration ="manual";
window.onbeforeunload=function(){
    window.scrollTo(0,0);
}