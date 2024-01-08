function toggleEdit() {
    const permanentPlaceholder = document.querySelector('.permanent-placeholder');
    const editableInput = document.querySelector('.editable-input');
    const editIcon = document.getElementById('editIcon');

    if (editableInput.style.display === 'none') {
        // If the input is currently hidden, show it
        permanentPlaceholder.style.display = 'none';
        editableInput.style.display = 'block';
        editableInput.value = '';
        editableInput.placeholder = 'Enter your location';
    
        editableInput.focus();
        editIcon.src = 'assets/closeicon.svg';
    } else {
        // If the input is currently visible, set its value as permanent
        permanentPlaceholder.innerText = editableInput.value;
        permanentPlaceholder.style.display = 'block';
        editableInput.style.display = 'none';
        editIcon.src = 'assets/editicon.svg';
    }
}
