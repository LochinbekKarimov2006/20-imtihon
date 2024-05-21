fetch('http://localhost:3000/malumod').then((data)=>{
    return data.json()
}).then((data2)=>{
    malumod2(data2[3])
    console.log(data2)
})
// let h1=document.querySelector('#h1')
let h1=document.getElementById('h1')
let img1=document.querySelectorAll('#img1')
function malumod2(malumod){
    console.log(malumod.others        )
    console.log(h1)
    h1.textContent=`${malumod.name}`
}

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