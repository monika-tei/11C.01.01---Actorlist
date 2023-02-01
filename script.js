console.log("here we go");

const url = "/JSON/actors.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => displayList(data));

// Just checking
function displayList(data) {
  console.log(data);
  data.forEach(showActors);
}

function showActors(actor) {
  console.log(actor.fullname);
  //pick a template & clone
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  //populate with information
  clone.querySelector("h4").textContent = actor.fullname;
  clone.querySelector("h5").textContent = actor.movie;
  //find parent
  const parent = document.querySelector("main .actorFeed");
  //append child
  parent.appendChild(clone);
}
