function dogRegister(navigateTo) {
  // if (user.pet) {
  //   navigateTo('/feed');
  // } else {

  // }
  const section = document.createElement('section');
  const title = document.createElement('h2');

  const buttonReturn = document.createElement('button');
  buttonReturn.classList.add("buttonReturn");

  const buttonSubmit = document.createElement('button');
  buttonSubmit.classList.add("buttonSubmit");

  const dogForm = document.createElement('form');
  dogForm.classList.add("dogForm");

  const inputId = document.createElement('input');
  inputId.classList.add("inputId");
  inputId.placeholder = 'Dog ID';
  inputId.type = 'text';

  const inputAge = document.createElement('input');
  inputAge.classList.add("inputAge");
  inputAge.placeholder = 'Age';
  inputAge.type = 'number';

  const inputGender = document.createElement('input');
  inputGender.classList.add("inputGender");
  inputGender.placeholder = 'Gender: Male or Female';
  inputGender.type = 'text';

  const inputDogBreed = document.createElement('input');
  inputDogBreed.classList.add("inputDogBreed");
  inputDogBreed.placeholder = 'Dog Breed';
  inputDogBreed.type = 'text';

  const inputWeight = document.createElement('input');
  inputWeight.classList.add("inputWeight");
  inputWeight.placeholder = 'Kg.';
  inputWeight.type = 'number';

  const labelVaccines = document.createElement('label');

  const labelVaccinesY = document.createElement('label');
  const inputVaccinesY = document.createElement('input');
  inputVaccinesY.classList.add("inputVaccinesY");

  const labelVaccinesN = document.createElement('label');
  const inputVaccinesN = document.createElement('input');
  inputVaccinesN.classList.add("inputVaccinesN");

  const labelSterilized = document.createElement('label');
  
  const labelSterilizedY = document.createElement('label');
  const inputSterilizedY = document.createElement('input');
  inputSterilizedY.classList.add("inputSterilizedY");

  const labelSterilizedN = document.createElement('label');
  const inputSterilizedN = document.createElement('input');
  inputSterilizedN.classList.add("inputSterilizedN");

  labelVaccines.textContent = 'Vaccines: ';
  labelVaccines.classList.add("labelVaccines");
  labelVaccinesY.textContent = 'Yes';
  labelVaccinesY.classList.add("radio");
  inputVaccinesY.type = 'radio';
  inputVaccinesY.name = 'vaccineStatus';
  labelVaccinesN.textContent = 'No';
  inputVaccinesN.name = 'vaccineStatus';
  labelVaccinesN.classList.add("radio");
  inputVaccinesN.type = 'radio';

  labelSterilized.textContent = 'Sterilized: ';
  labelSterilized.classList.add("labelSterilized");
  labelSterilizedY.textContent = 'Yes';
  labelSterilizedY.classList.add("radio");
  inputSterilizedY.type = 'radio';
  inputSterilizedY.name = 'sterilizedStatus';
  labelSterilizedN.textContent = 'No';
  labelSterilizedN.classList.add("radio");
  inputSterilizedN.type = 'radio';
  inputSterilizedN.name = 'sterilizedStatus';

  title.textContent = 'My Pet';
  title.classList.add("my-Pet");

  buttonSubmit.textContent = 'Submit';
  buttonSubmit.classList.add("buttonSubmit");

  buttonReturn.classList.add("buttonReturn");

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
    inputId,
    inputAge,
    inputGender,
    inputDogBreed,
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
