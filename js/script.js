let menuBtn = document.getElementById('menu__burger'),
  menuBlock = document.getElementById('menu');

menuBtn.onclick = function() {
  menuBlock.classList.toggle("active")
};

$( function() {
  $( "#orderSelect" ).selectmenu();
} );