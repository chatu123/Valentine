const yes= document.querySelector(".yes")
const no=document.querySelector(".no")
const que=document.querySelector(".que")
const my=document.querySelector(".my")
var div = document.getElementById("x");

var img = document.createElement("img");
    img.src = "hchc.gif";


let allstringsforno=
["You sure?",
"You really sure?",
"you really really sure??",
"please boo boo ",
"Aise karega tu mere saath",
"Kitna bura hai tu",
"Katti",
"Roo dega mai ab :((",
"Mera dil tut gaya",
"Maan bhi jaao na",
"Dekh le..",
"Kitna sochega ab bass bhi kar.."
];
let index=0;


//for no button
function FunctionToExecute(){
     //yes.style.padding="13px 18px";
     //no.textContent="hello";
     let currentsize=parseInt(window.getComputedStyle(yes).fontSize);
     yes.style.fontSize=(currentsize+9)+'px';


     no.innerText=allstringsforno[index];
     index=(index+1)%allstringsforno.length;
}




// After clicking yes button

    yes.addEventListener("click", function () {
        que.textContent = "YAYYY LETS PARTY..!!!  I LOVE YOUU ^-^";
        que.style.textAlign="center";
        que.style.fontSize="18px";
        yes.remove();
        no.remove();
        my.remove();
        div.appendChild(img);
  div.setAttribute("style", "text-align:center");
   //my.src="C:\web development\web yes or no\cutu.gif";

    });

