const links = document.querySelector('.links')
const logregister = document.querySelector('.log-register')
const header = document.querySelector('header')


// navbarlinks.addEventListener('click',()=>{
//     links.classList.toggle('done')
//     logregister.classList.toggle('done')
    
    
// })
const navbarlinks = document.querySelector('.navbarlinks')


navbarlinks.addEventListener('click',()=>{
    header.classList.toggle('doit')
    navbarlinks.classList.toggle('open')
    logregister.classList.toggle('done')
    links.classList.toggle('done')
})

// dropdown button

const dropdownn1 = document.querySelector('.dropdown1')
const dropdown2 = document.querySelector('.dropdown2')
const dropdowncontent1 = document.querySelector('.dropdown1-content')
const dropdowncontent2 = document.querySelector('.dropdown2-content')


dropdownn1.addEventListener('click',()=>{
    dropdowncontent1.classList.toggle('show')
})
dropdown2.addEventListener('click',()=>{
    dropdowncontent2.classList.toggle('show')
})



// window.onclick = function(e){
//     if(!e.target.matches('.dropdown1')){
       
//         if(dropdowncontent1.classList.contains('show')){
//             dropdowncontent1.classList.remove('show')
//         }
//     }
// }
// window.onclick = function(e){
// if(!e.target.matches('.dropdown2')){
//     if(dropdowncontent2.classList.contains('show')){
//         dropdowncontent2.classList.remove('show')
//     }
// }
// }




