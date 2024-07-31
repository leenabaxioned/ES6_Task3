/* Author: */
// Function to create a new note element
const createNote = () => {
  const li = document.createElement('li');
  li.className = 'note-item';

  // Create the note actions container
  const noteActions = document.createElement('div');
  noteActions.className = 'note-actions';

  const editButton = createButton('Edit', 'edit-btn', () => {
    textarea.disabled = false;
    toggleButtonVisibility(editButton, saveButton);
  });

  const saveButton = createButton('Save', 'save-btn', () => {
    textarea.disabled = true;
    toggleButtonVisibility(saveButton, editButton);
  });
  saveButton.style.display = 'none'; 

  const deleteButton = createButton('Delete', 'delete-btn', () => {
    li.remove();
  });

  noteActions.append(editButton, saveButton, deleteButton);
  li.appendChild(noteActions);

  const textarea = document.createElement('textarea');
  textarea.disabled = true;
  textarea.placeholder = 'Write your note here...';
  li.appendChild(textarea);
  return li;
};

const createButton = (text, className, onClick) => {
  const button = document.createElement('button');
  button.className = `btn ${className}`;
  button.textContent = text;
  button.addEventListener('click', onClick);
  return button;
};

// Helper function to toggle button visibility
const toggleButtonVisibility = (hideButton, showButton) => {
  hideButton.style.display = 'none';
  showButton.style.display = 'inline-block';
};

// Add event listener to the "Add New Note" button
document.querySelector('#addnote').addEventListener('click', () => {
  const notesList = document.querySelector('#notes-list');
  const newNote = createNote();
  notesList.appendChild(newNote);
});