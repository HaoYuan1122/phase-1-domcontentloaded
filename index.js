// Your code goes here
// document.addEventListener('DOMContentLoaded',()=>{
//     const p=document.querySelector('p')
//     p.textContent='This is really cool!'
// })

document.addEventListener('DOMContentLoaded',()=>{
    const text=document.getElementById('text')
    text.textContent='This is really cool!'
}
    
   
)
console.log(
    'This console.log()fires when index.js loads - before DOMContentLoaded is triggered'
)