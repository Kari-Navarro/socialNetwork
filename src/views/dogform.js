function dogRegister(navigateTo) {
  // if(user.paw){
  // navugate(/feed)}
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const dogForm = document.createElement('form');
  const inputId = document.createElement('Id');
  const inputAge = document.createElement('Age');
  const inputGender = document.createElement('Gender');
  const inputDogBread = document.createElement('Dog Bread');
  const inputWeight = document.createElement('Weight');
  const inputVaccines = document.createElement('Vaccines');
  const inputSterilized = document.createElement('Sterilized');
  const buttonSubmit = document.createElement('button');

  inputId.placeholder = 'Dog ID';
  inputId.type = 'text';
  inputAge.placeholder = 'Age';
  inputAge.type = 'number';
  inputGender.placeholder = 'Male or Female';
  inputGender.type = 'Gender';
  inputDogBread.placeholder = 'Dog Bread';
  inputDogBread.type = 'text';
  inputWeight.placeholder = 'Weight';
  inputWeight.type = 'number';
  inputVaccines.placeholder = 'Vaccines';
  inputVaccines.type = 'text';
  inputSterilized.placeholder = 'Sterilized';
  inputSterilized.type = 'radio';

  title.textContent = 'Submit';
  buttonSubmit.textContent = 'Submit';

  buttonReturn.textContent = 'Return';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });
  dogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // loginUser(e.inputEmail.value, e.inputPass.value);
    dogForm(
      inputId.value,
      inputAge.value,
      inputGender.value,
      inputDogBread.value,
      inputWeight.value,
      inputVaccines.value,
      inputSterilized.value,
    )
      .then((userCredential) => {
        const user = userCredential.user;
        navigateTo('/feed');// CREAR CARPETA DEL FEED
        return user;
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
      });
  });
  dogForm.append(
    inputId,
    inputAge,
    inputGender,
    inputDogBread,
    inputWeight,
    inputVaccines,
    inputSterilized,
    buttonSubmit,
  );
  section.append(title, dogForm, buttonReturn);

  return section;
}
export default dogRegister;
