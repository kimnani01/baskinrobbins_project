const gnb = document.querySelectorAll('.gnb > li')
for(let i of gnb){
    i.addEventListener('mouseover', ()=>{
        console.log(i)
        i.lastElementChild.style.display = 'flex'
        i.firstChild.style.color = '#000'
    })
    i.addEventListener('mouseout', ()=>{
        i.lastElementChild.style.display = 'none'
        i.firstChild.style.color = '#fff'
    })
}
const sub = document.querySelectorAll('.sub > li')
const depth1 = document.querySelectorAll('.depth1 > li > a')
for(let i of sub){
    i.addEventListener('mouseover', ()=>{
        console.log(i)
        i.firstElementChild.style.color = '#ff4d72'
    })
    i.addEventListener('mouseout', ()=>{
        console.log(i)
        i.firstElementChild.style.color = '#000'
    })
}
for(let j of depth1){
    j.addEventListener('mouseover', ()=>{
        j.style.color = '#ff4d72'
        j.parentElement.parentElement.previousElementSibling.style.color = '#ff4d72'
    })
    j.addEventListener('mouseout', ()=>{
        j.style.color = '#000'
        j.parentElement.parentElement.previousElementSibling.style.color = '#000'
    })
}
