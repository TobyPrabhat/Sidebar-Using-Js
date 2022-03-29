const Lessthan = document.querySelector(".Less")
const Greaterthan = document.querySelector(".greater")
const hideelement = document.querySelector("#hidden")
const hideelement2 = document.querySelectorAll('.LeftContent span')
const LeftWidth = document.querySelector('.LeftContent')
const Increase = document.querySelectorAll('.Lsec2 i, .Lsec3 i')
const removehover = document.querySelectorAll('.Lsec2 h3, .Lsec3 h3')
function Less(){
  Lessthan.style.display = 'none'
  Greaterthan.style.display = 'block'
  hideelement.style.display = 'none'
  hideelement2.forEach(hides=>{
    hides.style.display = 'none'
  })
  LeftWidth.style.width = '38%';
  Increase.forEach(Inc =>{
    Inc.classList.add('Increament')
  })
  removehover.forEach(rh =>{
    rh.classList.remove('Hover')
  })
}

function Greater(){
  Lessthan.style.display = 'block'
  Greaterthan.style.display = 'none'
  hideelement.style.display = 'block'
  hideelement2.forEach(hides=>{
    hides.style.display = 'initial'
  })
  LeftWidth.style.width = 'initial';
  Increase.forEach(Inc =>{
    Inc.classList.remove('Increament')
  })
  removehover.forEach(rh =>{
    rh.classList.add('Hover')
  })
}