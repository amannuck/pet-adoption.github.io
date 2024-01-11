function checkForm(event) {
  let valid = true;
  event.preventDefault();

  if (document.getElementsByName('animal').selectedIndex === -1) {
    valid = false;
  }

  if (document.getElementById('breed').value.trim() === '' && !document.getElementById('unanswered').checked) {
    valid = false;
  }


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

const petRadios = document.getElementsByName('pets');
checkedValue = null;
 for (const radio of petRadios) {
  if (radio.checked) {
    checkedValue = radio.value;
    break;
  }
}

if (checkedValue === null) {
  valid = false;
}


if (valid === false) {
  alert("Error: Please fill in all the blank fields!")
} else {
  window.location.href = 'pets.html';
}

}

const form = document.getElementById('myForm');
form.onsubmit = checkForm;
