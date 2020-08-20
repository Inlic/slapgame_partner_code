// data
let health = 100

//program

function slap(){
  health -=1
  console.log(health)
update()
}
function punch(){
  health -=5
  console.log(health)
update()
}
function kick(){
  health -=10
  console.log(health)
update()
}
//Draw
function update(){
  document.getElementById("health").innerText = health.toString()
}


update()