/* Author */
const createNote = () => {
    const li = document.createElement('li');
  
    // Function to create a button
    const createButton = (className, text, isHidden = false) => {
        const button = document.createElement('button');
        button.className = `${className} btn${isHidden ? ' hidden' : ''}`;
        button.textContent = text;
        return button;
    };
  
    // Create and append the action buttons
    const noteActions = document.createElement('div');
    noteActions.className = 'note-actions';

    const editButton = createButton('edit-btn', 'Edit');
    const saveButton = createButton('save-btn', 'Save', true);
    const deleteButton = createButton('delete-btn', 'Delete');

    const textarea = document.createElement('textarea');
    textarea.disabled = true; 
  
    // Add event listeners
    editButton.addEventListener('click', () => {
        textarea.disabled = false;
        editButton.classList.add('hidden');
        saveButton.classList.remove('hidden');
    });

    saveButton.addEventListener('click', () => {
        textarea.disabled = true;
        editButton.classList.remove('hidden');
        saveButton.classList.add('hidden');
    });

    deleteButton.addEventListener('click', () => li.remove());
  
    noteActions.append(editButton, saveButton, deleteButton);
    li.append(noteActions, textarea);

    return li;
};

// Add event listener to the "Add New Note" button
document.querySelector('#addnote').addEventListener('click', () => {
    const notesList = document.querySelector('#notes-list');
    notesList.append(createNote());
});
