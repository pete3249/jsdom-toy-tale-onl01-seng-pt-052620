let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  fetch("http://localhost:3000/toys")
    .then(function(response) {
      return response.json();
    })
    .then(toys => {
      addAndysToys(toys);

    })
});

function addAndysToys(toys) {
  toys.forEach(element => {
    const toyCollection = document.querySelector("#toy-collection");
    const newToyDiv = document.createElement('div');
    const newH2 = document.createElement('h2');
    const newImg = document.createElement('img');
    const newP = document.createElement('p');
    const newButton = document.createElement('button');

    toyCollection.appendChild(newToyDiv);
    newToyDiv.className = "card";
    newH2.innerHTML = element.name;
    newToyDiv.appendChild(newH2);
    newImg.src = element.image;
    newImg.className = "toy-avatar";
    newToyDiv.appendChild(newImg);
    newP.innerHTML = "1";
    newToyDiv.appendChild(newP);
    newButton.className = "like-btn";
    newToyDiv.appendChild(newButton);
  })
}
