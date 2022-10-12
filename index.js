const c = console.log.bind(console)
const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

//Created elements
const price = document.createElement('div')
price.classList.add('price', 'bg-dark')

// //////////
const head = document.querySelector('head')
const bars = document.querySelectorAll('.bar')

window.addEventListener('DOMContentLoaded',animate);
for (const bar of bars) {
  bar.addEventListener('mouseover',showPrice)
  bar.addEventListener('mouseout',hidePrice)
}

function showPrice(e){
  const curr= e.currentTarget;
  const parent=curr.parentElement
  
  // hover price
  for (let i = 0; i < bars.length; i++) {
    if(parent.innerText===data[i].day)
    price.innerText=`$${data[i].amount}`
  }
  // 
  parent.prepend(price)
  price.classList.remove('hidden')
  
}
function hidePrice(e) {
  const curr= e.currentTarget
  price.classList.add('hidden')
}

function animate() {
  for (let i = 0; i < bars.length; i++) {
    let parent =bars[i].parentElement
  if(parent.innerText===data[i].day){
 
bars[i].style.paddingTop= `calc(3 * ${data[i].amount}px)`
// bars[i].style.transition=` all 1s ease`
  }
}
  
}

