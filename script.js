// Клік по кнопці = дзвінок
document.getElementById("leadForm").addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "tel:+380682901881";
});

// Купюри (менше, акуратно)
for(let i=0;i<30;i++){
    let money=document.createElement("div");
    money.innerHTML="💵";
    money.style.position="absolute";
    money.style.top="-100px";
    money.style.left=Math.random()*100+"vw";
    money.style.fontSize=(20+Math.random()*20)+"px";
    money.style.opacity="0.8";
    money.style.animation=`fall ${4+Math.random()*4}s linear infinite`;
    document.body.appendChild(money);
}

// Анімація падіння
let style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
0%{transform:translateY(-100px) rotate(0deg);}
100%{transform:translateY(110vh) rotate(360deg);}
}`;
document.head.appendChild(style);
