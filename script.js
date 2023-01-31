console.log("here we go");

const url = "/JSON/actors.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => displayList(data));

// Just checking
function displayList(data) {
  console.log(data);
  //   data.forEach(showActors);
}
