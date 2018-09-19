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