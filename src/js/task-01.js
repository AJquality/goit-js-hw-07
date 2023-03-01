const category = document.querySelectorAll(".item");
console.log(`Number of categories: ${category.length}`);

category.forEach((name) => {
  console.log(`Category: ${name.firstElementChild.textContent}`);
  console.log(`Elements: ${name.lastElementChild.children.length}`);
});
