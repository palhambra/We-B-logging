const deleteComment = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to delete comment');
    }
  }
};

document
  .querySelector('.comment-list')
  .addEventListener('click', deleteComment);
