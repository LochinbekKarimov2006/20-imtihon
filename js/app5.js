let button1=document.getElementById('button1')
let div1=document.getElementById('div1')
let t=this
function haritlar(){
    if(t){
        div1.style.display='flex'
    }else{
        div1.style.display='none'
    }
    t=!t
}
button1.addEventListener('click',haritlar);