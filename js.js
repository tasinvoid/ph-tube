function loadCategories() {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}
function displayCategories(categories) {
  let categoryContainer = document.getElementById("category-container");

  for (let category of categories) {
    let categoryBtn = document.createElement("button");
    categoryBtn.setAttribute(
      "class",
      "btn btn-sm hover:bg-[#FF1F3D] hover:text-white"
    );
    categoryBtn.innerText = category["category"];
    categoryContainer.appendChild(categoryBtn);
  }
}
function displayVideos(videos) {
  let videoContainer = document.getElementById("video-container");
  videos.forEach((video) => {
    let videoCard = document.createElement("div");
    videoCard.innerHTML = ` <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="video" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
`;
    videoContainer.appendChild(videoCard);
  });
}
loadVideos();
loadCategories();
