fetch("actors.json")
  .then((res) => res.json())
  .then((data) => displayList(data));

// loop through
function displayList(data) {
  console.log(data);
  data.forEach(showActors);
}

function showActors(actor) {
  // console.log(actor.fullname);
  //pick a template & clone
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  //populate with information
  clone.querySelector("h4").textContent = actor.fullname;
  clone.querySelector("h5").textContent = actor.movie;
  clone.querySelector(".actorContainer").addEventListener("pointerenter", showMovie);

  const parent = document.querySelector("main .actorFeed");
  parent.appendChild(clone);

  function showMovie(evt) {
    console.log(evt);
    evt.currentTarget.querySelector("h5").classList.toggle("hidden");
  }
}
