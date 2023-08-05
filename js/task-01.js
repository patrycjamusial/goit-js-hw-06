const categories = document.querySelector("#categories");

const numberOfCategories = categories.children.length;
console.log("Number of categories: " + numberOfCategories);

const categoryItems = document.querySelectorAll(".item");
categoryItems.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
