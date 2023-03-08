let copy =["cat","dog","mouse","goat","bike","ant","car",
"plane","building","ship","shop","book","lion","bird"
]
let data = [...copy]


let welcome = document.querySelector(".welcome")
let btn = document.querySelector(".btn")
let word = document.querySelector(".word")
let nextwords = document.querySelector(".nextwords")
let input = document.querySelector("input[type='text']")
let time = document.querySelector(".time")
time.innerHTML=3

btn.onclick = ()=>{
  welcome.style.display="none"
  btn.style.display="none";
  word.style.display="block";
  time.style.display="block";
  let play =()=>{
  let random =Math.floor(Math.random()*data.length)
  word.innerHTML=`${data[random]}`
  nextwords.style.display="flex";
  input.style.display="block";
  input.focus()
  data.splice(random, 1)
  nextwords.innerHTML=""
  data.forEach(e=>{
    let div = document.createElement("div")
    div.classList.add("item")
    div.appendChild(document.createTextNode(e))
    nextwords.appendChild(div)
  })
  }
  let timing = setInterval(()=>{
    time.innerHTML--
  }, 1000)
  play()
  let gen =setInterval(()=>{
    if(input.value===word.innerHTML){
      time.innerHTML=3
      console.log("nice")
      if(data.length >=1){
        input.value=""
        play()
      }else{
        replay("Play again",gen,timing)
      }
    }else{
      replay("Try again",gen,timing)
    }
  }, 3000)
}
let replay =(text,g,timing)=>{
  console.log(text)
  clearInterval(g)
  clearInterval(timing)
  input.style.display="none";
  time.style.display="none";
  nextwords.style.display="none";
  word.style.display="none";
  btn.style.display="block";
  btn.innerHTML= text;
  time.innerHTML= 3;
  data=[...copy]
}