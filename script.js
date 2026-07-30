const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

// ---------------------------
// Музыка
// ---------------------------

const music = document.getElementById("music");
const welcome = document.getElementById("welcome");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {

    music.play();

    welcome.style.transition = "1.5s";
    welcome.style.opacity = "0";

    setTimeout(() => {
        welcome.remove();
    }, 1500);

};

// ---------------------------
// Звезды
// ---------------------------

const stars = [];

for(let i=0;i<200;i++){

    stars.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        a:Math.random()

    });

}

// ---------------------------
// Сердце
// ---------------------------

const points=[];

for(let scale=11;scale<=17;scale++){

    for(let i=0;i<120;i++){

        let angle=i*Math.PI*2/120;

        let x=16*Math.pow(Math.sin(angle),3)*scale;

        let y=(13*Math.cos(angle)
        -5*Math.cos(2*angle)
        -2*Math.cos(3*angle)
        -Math.cos(4*angle))*scale;

        points.push({x,y});

    }

}

let drawIndex=0;

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // --------- Звезды ---------

    stars.forEach(s=>{

        ctx.beginPath();
        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle="rgba(255,255,255,"+s.a+")";
        ctx.fill();

    });

    // -------- Сердце ---------

    ctx.fillStyle="#ff9ac5";
    ctx.font="16px Arial";
    ctx.textAlign="center";

    for(let i=0;i<drawIndex;i++){

        let p=points[i];

        ctx.fillText(
            "Madina MOL",
            canvas.width/2+p.x,
            canvas.height/2-p.y
        );

    }

    if(drawIndex<points.length)
        drawIndex++;

    requestAnimationFrame(animate);

}

animate();
