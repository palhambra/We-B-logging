const deleteBlog = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to delete blog');
    }
  }
};

document
  .querySelector('.blog-list')
  .addEventListener('click', deleteBlog);