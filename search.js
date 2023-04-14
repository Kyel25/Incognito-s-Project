
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

  if(li.style.display = "none"){
    ul = document.getElementById("search-list");
    li = ul.getElementsByTagName('li');
    li = "Brand does not exist"
  }
}

const result = Array.from(document.querySelectorAll('.search-list ul li'))
.map(e => e.innerText);

console.log(result);