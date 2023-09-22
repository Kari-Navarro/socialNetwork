function dogRegister(navigateTo) {
  // if (user.pet) {
  //   navigateTo('/feed');
  // } else {

  // }
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const buttonSubmit = document.createElement('button');
  const dogForm = document.createElement('form');
  const inputId = document.createElement('input');
  const inputAge = document.createElement('input');
  const inputGender = document.createElement('input');
  const inputDogBreed = document.createElement('input');
  const inputWeight = document.createElement('input');
  const inputVaccinesY = document.createElement('input');
  const inputVaccinesN = document.createElement('input');
  const inputSterilizedY = document.createElement('input');
  const inputSterilizedN = document.createElement('input');
  const labelId = document.createElement('label');
  const labelAge = document.createElement('label');
  const labelGender = document.createElement('label');
  const labelBreed = document.createElement('label');
  const labelWeight = document.createElement('label');
  const labelVaccines = document.createElement('label');
  const labelVaccinesY = document.createElement('label');
  const labelVaccinesN = document.createElement('label');
  const labelSterilized = document.createElement('label');
  const labelSterilizedY = document.createElement('label');
  const labelSterilizedN = document.createElement('label');

  labelId.textContent = 'Dog name: ';
  inputId.placeholder = 'Dog ID';
  inputId.type = 'name';

  labelAge.textContent = 'Age: ';
  inputAge.placeholder = 'Age';
  inputAge.type = 'number';

  labelGender.textContent = 'Gender: ';
  inputGender.placeholder = 'Male or Female';
  inputGender.type = 'text';

  labelBreed.textContent = 'Breed: ';
  inputDogBreed.placeholder = 'Dog Breed';
  inputDogBreed.type = 'text';

  labelWeight.textContent = 'Weight: ';
  inputWeight.placeholder = 'Kg.';
  inputWeight.type = 'number';

  labelVaccines.textContent = 'Vaccines: ';
  labelVaccinesY.textContent = 'Yes';
  inputVaccinesY.type = 'radio';
  labelVaccinesN.textContent = 'No';
  inputVaccinesN.type = 'radio';

  labelSterilized.textContent = 'Sterilized: ';
  labelSterilizedY.textContent = 'Yes';
  inputSterilizedY.type = 'radio';
  labelSterilizedN.textContent = 'No';
  inputSterilizedN.type = 'radio';

  title.textContent = 'My Pet';

  buttonSubmit.textContent = 'Submit';

  buttonReturn.textContent = 'Return';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  dogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const myPet = {
      id: inputId.value,
      age: inputAge.value,
      gender: inputGender.value,
      breed: inputDogBreed.value,
      weight: inputWeight.value,
      vaccines: inputVaccinesY.value,
      sterilized: inputSterilizedY.value,
    };
    console.log(myPet);
    return myPet;
  });

   //.then((userCredential) => {
  // const user = userCredential.user;
  //   navigateTo('/feed');// CREAR CARPETA DEL FEED
  //   return user;
  // })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     return errorMessage;
  //   });

  dogForm.append(
    labelId,
    inputId,
    labelAge,
    inputAge,
    labelGender,
    inputGender,
    labelBreed,
    inputDogBreed,
    labelWeight,
    inputWeight,
    labelVaccines,
    labelVaccinesY,
    inputVaccinesY,
    labelVaccinesN,
    inputVaccinesN,
    labelSterilized,
    labelSterilizedY,
    inputSterilizedY,
    labelSterilizedN,
    inputSterilizedN,
    buttonSubmit,
  );
  section.append(
    title,
    dogForm,
    buttonReturn,
  );

  return section;
}
export default dogRegister;
