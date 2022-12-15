document.addEventListener("DOMContentLoaded", () => {
  // your code here
    //1. select the form
   const form =  document.getElementById("form");
    //2. grab input text
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // grab the form data
      const inputText = e.target.description.value
      console.log(inputText);
      //3. select the DOM obj UL 
      const ulTasks = document.querySelector('#tasks');
      console.log(ulTasks);
      //4. create li elemtent for new text
      const newLI = document.createElement("li");
      newLI.innerText = inputText;
      // add the new LI element to the UL element
      ulTasks.appendChild(newLI);

      //create edit button
      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      //edit button event handler
      // editButton.addEventListener("click", (e) => {
      //   document.createElement("modal").setAttribute('id', 'editForm');
      //   const getEditForm = document.querySelector('#editForm');
        

      // });
      // add the new editbutton to the li element
      // newLi.appendChild(editButton);
      
      //create delete button
      const deleteBtn = document.createElement("Button");
      deleteBtn.innerText = "X";

      //add button
      newLI.appendChild(deleteBtn);
      // reset the state of the input field
      e.target.reset()
      // listen for click of delete button 
      deleteBtn.addEventListener("click", (e) => {
        const removeLi = e.target.parentNode;
        removeLi.remove()
      });
    });
});

