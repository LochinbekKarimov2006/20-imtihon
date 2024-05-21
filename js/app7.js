fetch('http://localhost:3000/malumod').then((data)=>{
    return data.json()
}).then((data2)=>{
    malumod2(data2[3])
    console.log(data2)
})
let a1=document.querySelectorAll('#a1')
let b1=document.querySelectorAll('#b')
let p4=document.querySelector('#p4')
let h2=document.querySelector('#h2')
let img1=document.querySelectorAll('#img1')
let img2=document.querySelectorAll('#img2')
function malumod2(data){
    img1[0].src=`${data.gallery.first.desktop}`
    img1[1].src=`${data.gallery.second.desktop}`
    img1[2].src=`${data.gallery.third.desktop}`
    img2[0].src=`${data.others[0].image.desktop}`
    img2[1].src=`${data.others[1].image.desktop}`
    img2[2].src=`${data.others[2].image.desktop}`
    a1[0].textContent=`${data.others[0].name}`
    a1[1].textContent=`${data.others[1].name}`
    a1[2].textContent=`${data.others[2].name}`
    console.log(data.includes[1].item)
    b1[0].textContent=`${data.includes[1].item }`
    b1[1].textContent=`${data.includes[1].item }`
    b1[2].textContent=`${data.includes[2].item }`
    b1[3].textContent=`${data.includes[3].item }`
    b1[4].textContent=`${data.includes[4].item }`
    p4.textContent=`${data.description }`
    h2.textContent=`${data.name}`
    img1[0].style=`
    border-radius: 15PX;`
    img1[1].style=`
    border-radius: 15PX;`
    img1[2].style=`
    border-radius: 15PX;`
    p1.textContent=`${data.features}`
console.log(data.others[0]


    )
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