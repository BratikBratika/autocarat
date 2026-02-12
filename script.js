// ===== ПАДАЮЧІ ДОЛАРИ =====

for(let i=0;i<40;i++){
    let money=document.createElement("div");
    money.innerHTML="💵";
    money.style.position="fixed";
    money.style.top="-100px";
    money.style.left=Math.random()*100+"vw";
    money.style.fontSize=(20+Math.random()*30)+"px";
    money.style.opacity="0.8";
    money.style.zIndex="5";
    money.style.animation=`fall ${4+Math.random()*4}s linear infinite`;
    money.style.animationDelay=Math.random()*5+"s";
    document.body.appendChild(money);
}

let style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
0%{transform:translateY(-100px) rotate(0deg);}
100%{transform:translateY(110vh) rotate(360deg);}
}`;
document.head.appendChild(style);
