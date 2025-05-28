let tabs = Array.from(document.querySelectorAll(".tab"));
let tabCard = Array.from(document.getElementsByClassName("tabCard"));
let right = Array.from(document.getElementsByClassName("right"));
let left = Array.from(document.getElementsByClassName("left"));

tabs.forEach((element, index) => {
  element.onclick = () => {
    tabs.filter((tab, i) => {
      i == index ? tab.classList.add("active") : tab.classList.remove("active");
    });
    tabCard.filter((cards, i) => {
      i == index
        ? cards.classList.add("tabCardShow")
        : cards.classList.remove("tabCardShow");
    });
  };
});
right.forEach((element, index) => {
  let newIndex = index == 2 ? -1 : index;
  element.onclick = function () {
    tabs.filter((tab, i) => {
      i == newIndex + 1
        ? tab.classList.add("active")
        : tab.classList.remove("active");
    });
    tabCard.filter((cards, i) => {
      i == newIndex + 1
        ? cards.classList.add("tabCardShow")
        : cards.classList.remove("tabCardShow");
    });
  };
});
left.forEach((element, index) => {
  let newIndex = index == 0 ? 3 : index;
  element.onclick = function () {
    tabs.filter((tab, i) => {
      i == newIndex - 1
        ? tab.classList.add("active")
        : tab.classList.remove("active");
    });
    tabCard.filter((cards, i) => {
      i == newIndex - 1
        ? cards.classList.add("tabCardShow")
        : cards.classList.remove("tabCardShow");
    });
  };
});
