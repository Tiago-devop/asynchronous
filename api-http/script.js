const h1 = document.createElement("h1");

document.body.appendChild(h1);
h1.innerText = "API and HTTP";
h1.style = "text-align:left;color:red;";

const url = "https://jsonplaceholder.typicode.com/posts/2";
const options = {
  method: "GET",
};

const data = fetch(url, options)
  .then((res) => res.json())
  .then((text) => {
    h1.innerText = text.title;
  });
