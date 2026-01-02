// Write your code here!

document.addEventListener("DOMContentLoaded", () => {
  const postList = document.getElementById("post-list");

  async function fetchPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();
      displayPosts(posts);
    } catch (error) {
      console.error(error);
    }
  }

  function displayPosts(posts) {
    posts.forEach(({ title, body }) => {
      const li = document.createElement("li");
      const h1 = document.createElement("h1");
      h1.textContent = title;
      const p = document.createElement("p");
      p.textContent = body;
      li.appendChild(h1);
      li.appendChild(p);
      postList.appendChild(li);
      console.log(li);
    });
  }

  fetchPosts();
});
