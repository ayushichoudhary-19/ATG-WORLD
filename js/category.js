function toggleCategory(categoryId) {
  const categories = document.querySelectorAll('.category-content');

  categories.forEach(category => {
    category.style.display = 'none';
    category.classList.remove('active'); // Remove 'active' class from all categories
  });

  const selectedCategory = document.getElementById(categoryId);
  if (selectedCategory) {
    selectedCategory.style.display = 'block';
    selectedCategory.classList.add('active'); // Add 'active' class to the selected category
  }
}

toggleCategory('all');
