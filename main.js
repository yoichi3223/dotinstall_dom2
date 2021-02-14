// function time() {
//   const h1 = document.getElementById("target");
//   const button = document.querySelector("button");
//   const p = document.querySelectorAll("p").

//   button.addEventListener("click", () => {
//     h1.textContent = "テスト";
//     p.textContent = "Pだよ";
//   });
// }

// setTimeout(time, 3000);

// const ps = document.querySelectorAll("p");

// ps.forEach((p, index) => {
//   p.textContent = `${index}番目のPです`;
// });

// const uls = document.querySelectorAll("ul.firstchild");

// uls.forEach((ul) => {
//   ul.textContent = "ULだよ";
// });

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const targetNode = document.querySelector("#target");
  targetNode.title = "JavaScript頑張る";
  targetNode.style.backgroundColor = "red";
});
