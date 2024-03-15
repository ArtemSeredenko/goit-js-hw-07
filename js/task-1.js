const categories = document.querySelector('#categories');

console.log(`Всего категорий: ${categories.children.length}`);

function handleCategories() {
  const elements = document.querySelectorAll('.item');
  elements.forEach(element => {
    const title = element.querySelector('h2');
    console.log(`Categories: ${title.textContent}`);
    const items = element.querySelectorAll('li');
    console.log(`Elements: ${items.length}`);
  });
}
handleCategories();
