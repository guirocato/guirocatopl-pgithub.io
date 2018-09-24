//Loading gif
window.onload = function(){
  document.getElementById('col-md-8').style.display = "none";
  setTimeout(function() {
    document.getElementById('loader').style.display = "none";
    document.getElementById('col-md-8').style.display = "block"
  }, 1200);
}

//Botão Menu
function myFunction(y) {
    var x = document.getElementById("col-md-4");
    if (x.style.display === "block") {
    	y.classList.toggle("change");
        x.style.display = "none";
    } else {
    	y.classList.toggle("change");
        x.style.display = "block";
    }
}

document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://codes-grupo2-p1.firebaseio.com/')

  
  let params = extract()

  let path = '/' + params['category'] + '/projetos/' + params['projeto']

  db.download(path, function(data) {
   
    replace('body', {
        'name': data['name'],
        'items': data['items'],
    })
    replace('title', {
        'name': data['name'],
    })
  })
})

//Carrossel

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

