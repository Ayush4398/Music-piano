
for (var i = 0;i < document.querySelectorAll(".btn").length; i++) {
  document.querySelectorAll('.btn')[i].addEventListener('click',function(){
    sound(this.innerHTML);
  });
}




document.addEventListener('keypress', function(e){
   sound(e.key);
 });



  function sound(word) {
      var x = new Audio("sound/"+word+".mp3");
      x.play();
  }
