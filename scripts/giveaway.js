function checkForm(event) {
  let valid = true;
  event.preventDefault();

  //Check which type of animal
  if (document.getElementsByName('animal').selectedIndex === -1) {
    valid = false;
  }

  //Verify which type of breed
  if (document.getElementById('breed').value.trim() === '' && !document.getElementById('unanswered').checked) {
    valid = false;
  }

  //Verify age
  const ageRadios = document.getElementsByName('age');

  let checkedValue = null;
  for (const radio of ageRadios) {
    if (radio.checked) {
      checkedValue = radio.value;
      break;
    }
  }

  if (checkedValue === null) {
    valid = false;
  }



  //Verify gender
  if (!document.getElementById('male').checked && !document.getElementById('female').checked) {
    valid = false;
  }


  //Verify pet environment
  checkedValue = null;
  const petRadios = document.getElementsByName('pets');
  for (const radio of petRadios) {
    if (radio.checked) {
      checkedValue = radio.value;
      break;
    }
  }

  if (checkedValue === null) {
    valid = false;
  }

  //Check Owner name and Additional Information area
  if (document.getElementById('owner-name').value === '' || document.getElementById('comment-area').value === '') {
    valid = false;
  }

  //Validating email

  const emailInput = document.getElementById("owner-email");
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    valid = false;
  }


  //Display error message
  if (valid === false) {
    alert("Error: Please fill in all the blank fields!")
  } else {
    ///doSomething();
  }


}


const form = document.getElementById('myForm');
form.onsubmit = checkForm;
