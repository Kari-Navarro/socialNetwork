import imgDogForm from './img3.jpg';
import logo from './logo.png';

function dogRegister(navigateTo) {
  // if (user.pet) {
  //   navigateTo('/feed');
  // } else {
  // }
  const section = document.createElement('section');
  section.classList.add('section-dogform');

  const title = document.createElement('h2');
  title.textContent = 'My Pet';
  title.classList.add('titleDogForm');

  const img3 = document.createElement('img');
  img3.classList.add('img3');
  img3.src = imgDogForm;
  img3.alt = 'img Dog Form';
  img3.classList.add('imgDogForm');

  const logoDogForm = document.createElement('img');
  logoDogForm.classList.add('img1');
  logoDogForm.src = logo;
  logoDogForm.alt = 'logoDogForm';
  logoDogForm.classList.add('logoDogForm');

  const buttonReturn = document.createElement('button');
  buttonReturn.classList.add('buttonReturnDog');

  const buttonSubmit = document.createElement('button');
  buttonSubmit.setAttribute('type', 'submit');
  buttonSubmit.classList.add('buttonSubmit');

  const dogForm = document.createElement('form');
  dogForm.classList.add('dogForm');

  const inputId = document.createElement('input');
  inputId.classList.add('inputId');
  inputId.placeholder = 'Dog ID';
  inputId.type = 'text';
  inputId.required = true;

  const inputAge = document.createElement('input');
  inputAge.classList.add('inputAge');
  inputAge.placeholder = 'Age';
  inputAge.type = 'number';
  inputAge.required = true;

  const inputGender = document.createElement('input');
  inputGender.classList.add('inputGender');
  inputGender.placeholder = 'Gender: Male or Female';
  inputGender.type = 'text';
  inputGender.required = true;

  const inputDogBreed = document.createElement('input');
  inputDogBreed.classList.add('inputDogBreed');
  inputDogBreed.placeholder = 'Dog Breed';
  inputDogBreed.type = 'text';
  inputDogBreed.required = true;

  const inputWeight = document.createElement('input');
  inputWeight.classList.add('inputWeight');
  inputWeight.placeholder = 'Weight (kg)';
  inputWeight.type = 'number';
  inputWeight.required = true;

  const labelVaccines = document.createElement('label');
  const labelVaccinesY = document.createElement('label');
  const inputVaccinesY = document.createElement('input');
  inputVaccinesY.classList.add('inputVaccinesY');

  const labelVaccinesN = document.createElement('label');
  const inputVaccinesN = document.createElement('input');
  inputVaccinesN.classList.add('inputVaccinesN');
  const labelSterilized = document.createElement('label');
  const labelSterilizedY = document.createElement('label');
  const inputSterilizedY = document.createElement('input');
  inputSterilizedY.classList.add('inputSterilizedY');
  const labelSterilizedN = document.createElement('label');
  const inputSterilizedN = document.createElement('input');
  inputSterilizedN.classList.add('inputSterilizedN');

  const divVaccines = document.createElement('div');
  divVaccines.classList.add('divVaccines');
  labelVaccines.textContent = 'Vaccines: ';
  labelVaccines.classList.add('radio');
  labelVaccinesY.textContent = 'Yes';
  labelVaccinesY.classList.add('radio');
  inputVaccinesY.type = 'radio';
  inputVaccinesY.name = 'vaccineStatus';
  inputVaccinesY.classList = 'inputRadio';
  labelVaccinesN.textContent = 'No';
  inputVaccinesN.name = 'vaccineStatus';
  labelVaccinesN.classList.add('radio');
  inputVaccinesN.type = 'radio';
  inputVaccinesN.classList = 'inputRadio';


  const divSterilized = document.createElement('div');
  divSterilized.classList.add('divSterilized');
  labelSterilized.textContent = 'Sterilized: ';
  labelSterilized.classList.add('radio');
  labelSterilizedY.textContent = 'Yes';
  labelSterilizedY.classList.add('radio');
  inputSterilizedY.type = 'radio';
  inputSterilizedY.classList = 'inputRadio';
  inputSterilizedY.name = 'sterilizedStatus';
  labelSterilizedN.textContent = 'No';
  labelSterilizedN.classList.add('radio');
  inputSterilizedN.type = 'radio';
  inputSterilizedN.name = 'sterilizedStatus';
  inputSterilizedN.classList = 'inputRadio';

  buttonSubmit.textContent = 'Submit';
  buttonSubmit.classList.add('buttonSubmit');

  buttonReturn.classList.add('buttonReturn');
  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  dogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    navigateTo('/feed');
    const myPet = {
      id: inputId.value,
      age: inputAge.value,
      gender: inputGender.value,
      breed: inputDogBreed.value,
      weight: inputWeight.value,
      vaccines: inputVaccinesY.value,
      sterilized: inputSterilizedY.value,
    };
    return myPet;
  });

  divVaccines.append(
    labelVaccines,
    labelVaccinesY,
    inputVaccinesY,
    labelVaccinesN,
    inputVaccinesN,
  );
  divSterilized.append(
    labelSterilized,
    labelSterilizedY,
    inputSterilizedY,
    labelSterilizedN,
    inputSterilizedN,
  );
  dogForm.append(
    inputId,
    inputAge,
    inputGender,
    inputDogBreed,
    inputWeight,
    divVaccines,
    divSterilized,
    buttonSubmit,
  );
  section.append(
    title,
    logoDogForm,
    img3,
    dogForm,
    buttonReturn,
  );

  return section;
}
export default dogRegister;
