let copy =["cat","dog","mouse","goat","bike","ant","car",
"plane","building","ship","shop","book","lion","bird"
]
let data = [...copy]


let welcome = document.querySelector(".welcome")
let btn = document.querySelector(".btn")
let word = document.querySelector(".word")
let nextwords = document.querySelector(".nextwords")
let input = document.querySelector("input[type='text']")


btn.onclick = ()=>{
  welcome.style.display="none"
  btn.style.display="none";
  word.style.display="block";
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
  play()
  let gen =setInterval(()=>{
    if(input.value===word.innerHTML){
      console.log("nice")
      if(data.length >=1){
        input.value=""
        play()
      }else{
        replay("Play again",gen)
      }
    }else{
      replay("Try again",gen)
    }
  }, 3000)
}
let replay =(text,g)=>{
  console.log(text)
  clearInterval(g)
  input.style.display="none";
  nextwords.style.display="none";
  word.style.display="none";
  btn.style.display="block";
  btn.innerHTML= text;
  data=[...copy]
}