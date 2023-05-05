
//sort A-Z
const sortBtn1 = document.getElementById('sort-btn-a-z');
sortBtn1.addEventListener('click', () => {
  fetch('./data/MOCK_DATA.json')
    .then(response => response.json())
    .then(data => {
      const sortedData = data.sort((a, b) => {
        const nameA = a.first_name.toUpperCase();
        const nameB = b.first_name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      populateTable(sortedData);
    });
});

//sort A-Z
const sortBtn2 = document.getElementById('sort-btn-z-a');
sortBtn2.addEventListener('click', () => {
  fetch('./data/MOCK_DATA.json')
    .then(response => response.json())
    .then(data => {
      const sortedData = data.sort((a, b) => {
        const nameA = a.first_name.toUpperCase();
        const nameB = b.first_name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });

      populateTable(sortedData);
    });
});

//sort by Marks
const sortBtn3 = document.getElementById('sort-btn-marks');
sortBtn3.addEventListener('click', () => {
  fetch('./data/MOCK_DATA.json')
    .then(response => response.json())
    .then(data => {
      const sortedData = data.sort((a, b) => {
        const nameA = a.marks;
        const nameB = b.marks;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });

      populateTable(sortedData);
    });
});

//sort by passing
const sortBtn4 = document.getElementById('sort-btn-passing');
sortBtn4.addEventListener('click', () => {
  fetch('./data/MOCK_DATA.json')
    .then(response => response.json())
    .then(data => {
      const sortedData = data.filter((a) => {
        const nameA = a.passing;
        return nameA === true;
      });
      populateTable(sortedData);
    });
});

//sort by class
const sortBtn5 = document.getElementById('sort-btn-class');
sortBtn5.addEventListener('click', () => {
  fetch('./data/MOCK_DATA.json')
    .then(response => response.json())
    .then(data => {
      const sortedData = data.sort((a, b) => {
        const nameA = a.class;
        const nameB = b.class;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });

      populateTable(sortedData);
    });
});

//sort by class
const sortBtn6 = document.getElementById('sort-btn-gender');
sortBtn6.addEventListener('click', () => {
  fetch('./data/MOCK_DATA.json')
    .then(response => response.json())
    .then(data => {
      const sortedData = data.sort((a, b) => {
        let genderA = a.gender.toUpperCase(); // ignore upper and lowercase
        let genderB = b.gender.toUpperCase(); // ignore upper and lowercase
  
        if (genderA === 'MALE' && genderB !== 'MALE') {
          return -1;
        } else if (genderA !== 'MALE' && genderB === 'MALE') {
          return 1;
        } else if (genderA === 'FEMALE' && genderB !== 'FEMALE') {
          return -1;
        } else if (genderA !== 'FEMALE' && genderB === 'FEMALE') {
          return 1;
        } else if (genderA === 'AGENDER' && genderB !== 'AGENDER') {
          return -1;
        } else if (genderA !== 'AGENDER' && genderB === 'AGENDER') {
          return 1;
        } else if (genderA === 'POLYGENDER' && genderB !== 'POLYGENDER') {
          return -1;
        } else if (genderA !== 'POLYGENDER' && genderB === 'POLYGENDER') {
          return 1;
        } else if (genderA === 'NON-BINARY' && genderB !== 'NON-BINARY') {
          return -1;
        } else if (genderA !== 'NON-BINARY' && genderB === 'NON-BINARY') {
          return 1;
        } else if (genderA === 'GENDERFLUID' && genderB !== 'GENDERFLUID') {
          return -1;
        } else if (genderA !== 'GENDERFLUID' && genderB === 'GENDERFLUID') {
          return 1;
        } else if (genderA === 'BIGENDER' && genderB !== 'BIGENDER') {
          return -1;
        } else if (genderA !== 'BIGENDER' && genderB === 'BIGENDER') {
          return 1;
        } else {
          return 0;
        }
      });
      populateTable(sortedData);
    });
});