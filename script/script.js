let bigText = document.querySelector("#jumbo-text")
let holder = "";
let insertText = "The Golden Land of All things Birds"
let count=0;
function animationText(){
    if(holder!=insertText){
        holder+=insertText[count]
        bigText.innerHTML=holder;
        count++
        console.log(holder)
    }
    else{
        holder=""
        count=0;
    }
}
setInterval(function(){
    animationText()
 },200)
var body = document.getElementsByTagName('body')[0]

var navy = document.getElementsByTagName('nav')[0];

let check = 0
console.log(navy)
body.onscroll=(e)=>{

    if(e.target.scrollingElement.scrollTop>navy.clientHeight){navy.classList.add('scrolled');
}else navy.classList.remove('scrolled')
    //alert('rat')

    
}

let images = document.querySelector('.rat')
ScrollReveal().reveal('.rat',{ delay: 1000 });
