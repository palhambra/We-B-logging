const editBlog = async (event) => {
  if (event.target.hasAttribute('data-blog')) {
    const id = event.target.getAttribute('data-blog');

    // get the updated title and content from the form fields
    const updatedTitle = document.querySelector('#title').value;
    const updatedContent = document.querySelector('#content').value;

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: updatedTitle,
        content: updatedContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to update blog');
    }
  }
};

document
  .querySelector('.edit')
  .addEventListener('click', deleteComment);
