export const vDragsort = {
  mounted(el) {
    const targetList = el.querySelectorAll("li");
    el.addEventListener("dragover", handleDragOver);
    [...targetList].forEach((item) => {
      item.addEventListener("dragstart", handleDragStart);
      item.addEventListener("dragend", handleDragEnd);
      item.dataset.drag = "false";
    });
  },
};
function handleDragOver(e) {
  e.preventDefault();
  const target = this.querySelector("[data-drag='true']");
  const targetList = this.querySelectorAll("[data-drag='false']");
  const insertObj = [...targetList].find(
    (item) => e.clientY <= item.offsetTop + item.offsetHeight / 2
  );

  this.insertBefore(target, insertObj);
}

function handleDragStart(e) {
  const tar = e.target;
  tar.dataset.drag = "true";
  setTimeout(() => {
    tar.style.opacity = 0;
  });
}

function handleDragEnd(e) {
  const tar = e.target;
  tar.style.opacity = 1;
  tar.dataset.drag = "false";
}
