   // Get references to DOM elements
   let ul = document.getElementById('myul');
   let input = document.getElementById('input');
   let add = document.getElementById('add');
   let deleteAll = document.getElementById('delete');
   
   // Add item event
   add.addEventListener('click', function () {
       if (input.value === "") {
           alert("Empty input");
       } else {
           // Create a new list item
           let li = document.createElement('li');
           let inputvalue = input.value;
           inputvalue = inputvalue.charAt(0).toUpperCase() + inputvalue.slice(1).toLowerCase();
           let userText = document.createTextNode(inputvalue);
           li.appendChild(userText);
           ul.appendChild(li);
           li.style.listStyleType = "lower-roman";
   
           // Create edit button
           let editBtn = document.createElement('button');
           editBtn.textContent = "Edit";
           li.appendChild(editBtn);
           editBtn.disabled = false;
   
           // Edit event
           editBtn.addEventListener('click', function () {
               editBtn.disabled = true;
               let editInput = document.createElement("input");
               editInput.value = userText.textContent;
               li.appendChild(editInput);
   
               let saveBtn = document.createElement('button');
               saveBtn.textContent = 'Save';
               li.appendChild(saveBtn);
   
               // Save event
               saveBtn.addEventListener('click', function () {
                   let editedValue = editInput.value;
                   userText.textContent = editedValue;
                   editInput.remove();
                   saveBtn.remove();
                   editBtn.disabled = false;
               });
           });
   
           // Create delete button for this list item
           let deleteBtn = document.createElement('button');
           deleteBtn.textContent = "Delete";
           li.appendChild(deleteBtn);
   
           // Delete event for this list item
           deleteBtn.addEventListener('click', function () {
               li.remove();
           });
   
           // Clear the input field
           input.value = "";
       }
   });
   
   // Delete all items event
   deleteAll.addEventListener('click', function () {
       ul.innerHTML = "";
   });