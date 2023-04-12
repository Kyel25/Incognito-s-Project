function loadSearchData() {
  // Data to be used in the searchbar
  let countries = [
    'Adidas',
    'Puma',
    'Nike',
    'The North Face',
  ];

  // Get the HTML element of the list
let list = document.getElementById('list');
// Add each data item as an <a> tag
countries.forEach((country)=>{
    let a = document.createElement("a");
    a.innerText = country;
    a.classList.add("listItem");
    list.appendChild(a);
})
}

function search(){
  let listContainer = document.getElementbyID('list');
  let listItems = document.getElementsbyClassName('listItem');
  let input = document.getElementbyID('searchbar');
  input = input.toLowerCase();

  let noResults = true;
for (i = 0; i < listItems.length; i++) { 
    if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
        listItems[i].style.display="none";
        continue;
    }
    else {
        listItems[i].style.display="flex";
        noResults = false; 
    }
  else {
    listContainer.style.display = noResults ? "none" : "block";
  }
}
  
}