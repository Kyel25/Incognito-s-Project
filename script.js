const result = Array.from(document.querySelectorAll('.category-list li'))
.map(e => e.innerText);

console.log(result);

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchbar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-list");
  li = ul.getElementsByTagName('li');


  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  console.log("Completed")
}


function w3_open() {
  document.getElementById("search-list").style.display = "block";
}

function w3_close() {
  document.getElementById("search-list").style.display = "none";
}

