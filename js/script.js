let tabs = Array.from(document.querySelectorAll(".tab"));
let tabCard = Array.from(document.getElementsByClassName("tabCard"));
let right = Array.from(document.getElementsByClassName("right"));
let left = Array.from(document.getElementsByClassName("left"));

tabs.forEach((element, index) => {
  element.onclick = () => {
    activeTab(index);
  };
});
right.forEach((element, index) => {
  let taregtIndex = index == 2 ? 0 : index + 1;
  element.onclick = function () {
    activeTab(taregtIndex);
  };
});
left.forEach((element, index) => {
  let taregtIndex = index === 0 ? 2 : index - 1;
  element.onclick = function () {
    activeTab(taregtIndex);
  };
});
function activeTab(taregtIndex) {
  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === taregtIndex);
  });

  tabCard.forEach((card, i) => {
    card.classList.toggle("tabCardShow", i === taregtIndex);
  });
}
