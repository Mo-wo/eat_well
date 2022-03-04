addEventListener('DOMContentLoaded', function(){
    document.querySelector('.registerformwrap').style.display = 'none'
})
document.querySelector('.signinbutton').onclick = function(){
    document.querySelector('.registerformwrap').style.display = 'flex'
}
document.querySelector('.closebtn').onclick = function(){
  document.querySelector('.registerformwrap').style.display = 'none'
}
document.querySelector('.loginlink').onclick = function(){
    document.querySelector('.signupwrap').style.display = 'flex'
    document.querySelector('.signin').style.display = 'none'
}
document.querySelector('.signuplink').onclick = function(){
    document.querySelector('.signupwrap').style.display = 'none'
    document.querySelector('.signin').style.display = 'flex'
}