document.getElementById("getItemsButton").addEventListener("click", () => {
  fetch(`http://localhost:8888/getData`).then((res) =>
    res.json().then((obj) => {
      fillItemListRandoData(obj.data);
    })
  );
});

// Данные стороннего api "https://jsonplaceholder.typicode.com/posts"
document.getElementById("getPosts").addEventListener("click", () => {
  fetch(`http://localhost:8888/api/posts`).then((res) =>
    res.json().then((obj) => {
      fillItemListPosts(obj);
    })
  );
});


function fillItemListRandoData(arr) {
  if (!arr) return;
  updateCount(arr.length);
  const ul = document.getElementById("item-list");
  ul.className = "list collection ";
  ul.innerHTML = "";
  for (let item of arr) {
    let li = document.createElement("li");
    li.className = "collection-item";
    li.innerText = item;
    ul.appendChild(li);
  }
}


function fillItemListPosts(arr) {
  if (!arr) return;
  updateCount(arr.length);
  const ul = document.getElementById("item-list");
  ul.className = "list collection ";
  ul.innerHTML = "";
  for (let item of arr) {
    let li = document.createElement("li");
    li.className = "collection-item";

    let div_userId = document.createElement("div");
    div_userId.className = "block";
    li.appendChild(div_userId);

    let caption_userId = document.createElement("div");
    caption_userId.className = "caption_card";
    caption_userId.innerText = "userId: ";
    div_userId.appendChild(caption_userId);

    let value_userId = document.createElement("div");
    value_userId.className = "value_card";
    value_userId.innerText = item.userId;
    div_userId.appendChild(value_userId);

    let div_id = document.createElement("div");
    div_id.className = "block";
    li.appendChild(div_id);

    let caption_id = document.createElement("div");
    caption_id.className = "caption_card";
    caption_id.innerText = "id: ";
    div_id.appendChild(caption_id);

    let value_id = document.createElement("div");
    value_id.className = "value_card";
    value_id.innerText = item.id;
    div_id.appendChild(value_id);

    let div_title = document.createElement("div");
    div_title.className = "block";
    li.appendChild(div_title);

    let caption_title = document.createElement("div");
    caption_title.className = "caption_card";
    caption_title.innerText = "title: ";
    div_title.appendChild(caption_title);

    let value_title = document.createElement("div");
    value_title.className = "value_card";
    value_title.innerText = item.title;
    div_title.appendChild(value_title);

    let div_post = document.createElement("div");
    div_post.className = "block";
    li.appendChild(div_post);

    let caption_post = document.createElement("div");
    caption_post.className = "caption_card";
    caption_post.innerText = "post: ";
    div_post.appendChild(caption_post);

    let value_post = document.createElement("div");
    value_post.className = "value_card";
    value_post.innerText = item.body;
    div_post.appendChild(value_post);

    ul.appendChild(li);
  }
}

// Обновление количества полученных записей
function updateCount(num) {
  document.getElementById("item-count").innerHTML = num;
}
