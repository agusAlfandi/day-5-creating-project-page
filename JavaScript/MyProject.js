let projekSaya = [];

function myProject() {
  // event.preventDefault();
  let title = document.getElementById("project").value;
  let content = document.getElementById("description").value;
  let image = document.getElementById("upload").files;
  image = URL.createObjectURL(image[0]);

  // console.log(title);
  // console.log(content);
  // console.log(image);

  let project = {
    title: title,
    content: content,
    image: image,
    author: "Agus Alfandi",
    postAt: new Date(),
  };

  projekSaya.push(project);
  Project();
}
function Project() {
  let projectWrapper = document.getElementById("contents");

  for (let i = 0; 0 < projekSaya.length; i++) {
    projectWrapper += `<div class="project-list-item">
    <a href="../Page/ProjectDetail.html">
        <div class="card-img">
            <img src=${projekSaya[i].image}>
        </div>
        <div class="card-title">
            <h3>${projekSaya[i].title}</h3>
        </div>
        <div class="card-drs">
            <p>Durasi 3 bulan</p>
            ${projekSaya[i].postAt} | ${projekSaya[i].author}
        </div>
        <div class="card-desc">
            <p>
                ${projekSaya[i].content}
              </p>
        </div>
        <div class="card-icon">
            <img src="../Assets/img/javascript.png">
            <img src="../Assets/img/node.png">
            <img src="../Assets/img/react.png">
            <img src="../Assets/img/type.png">
        </div>
    </a>
    <div class="card-btn">
        <div class="edit">
            <button>edit</button>
        </div>
        <div class="card-delete">
            <button>delete</button>
        </div>
    </div>

</div>`;
  }
}
