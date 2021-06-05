console.log('działa JS');

let postsButton = document.getElementById('posts__button');
let postsList = document.getElementById('posts__list');

if (postsButton) {
  postsButton.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost/maluchy/wp-json/wp/v2/posts');
    ourRequest.onload = function () {
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.responseText);
        console.log(data[0].title);
        postsList.innerHTML = data[0].title.rendered;
      } else {
        console.log("We connected to the server, but it returned an error.");
      }
    };

    ourRequest.onerror = function () {
      console.log("Connection error");
    };

    ourRequest.send();
  });
}
