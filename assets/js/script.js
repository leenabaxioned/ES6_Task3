/* Author: */
const createNote = () => {
    // Create the main list item
    const li = document.createElement('li');

    let editBtn = document.querySelector(".edit-btn");
    let noneditBtn = document.querySelector(".non-editbtn");
    let saveBtn = document.querySelector(".save-btn");
    let nonsaveBtn = document.querySelector(".non-savebtn");
  
    // Create and append the action buttons
    const noteActions = document.createElement('div');
    noteActions.className = 'note-actions';
  
    const editButton = document.createElement('button');
    editButton.className = 'edit-btn non-editbtn btn';
    editButton.textContent = 'Edit';
    
    const saveButton = document.createElement('button');
    saveButton.className = 'save-btn non-savebtn btn';
    saveButton.textContent = 'Save';
    nonsaveBtn;
  
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn btn';
    deleteButton.textContent = 'Delete';
  
    // Add event listeners
    editButton.addEventListener('click', () => {
        textarea.disabled = false;
        noneditBtn;
        saveBtn;
    });
  
    saveButton.addEventListener('click', () => {
        textarea.disabled = true;
        editBtn;
        nonsaveBtn;
    });
  
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
  
    noteActions.appendChild(editButton);
    noteActions.appendChild(saveButton);
    noteActions.appendChild(deleteButton);
    li.appendChild(noteActions);
  
    // Create and append the textarea
    const textarea = document.createElement('textarea');
    textarea.disabled = true; 
    li.appendChild(textarea);
    return li;
  };
  
  // Add event listener to the "Add New Note" button
  document.querySelector('#addnote').addEventListener('click', () => {
    const notesList = document.querySelector('#notes-list');
    const newNote = createNote();
    notesList.appendChild(newNote);
  });  