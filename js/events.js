function getIt(){
  $('p').on('click', function() {
    window.alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.which === 71){
      window.alert('G was pressed!')
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    
  })
}

$(document).ready(function(){

// call functions here

});
