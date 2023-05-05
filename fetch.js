

fetch('./data/MOCK_DATA.json')
  .then(response => response.json())
  .then(data => {
    // code to populate table with data
    populateTable(data);
});

//Function to populate data (1-100 elememts)
function populateTable(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML='';
    if(data.length >0){
      data.forEach(row => {
        const tr = document.createElement('tr');
  
        const id = document.createElement('td');
        id.textContent = row.id;
        tr.appendChild(id);
  
  
        //name cell container include (img + name text)
        const nameCell = document.createElement('td');
          nameCell.style.display = 'flex';
          nameCell.style.alignItems = 'center';
          nameCell.style.gap="10px"
          nameCell.style.border = "1px solid black";
  
    // create a new image element and set its src and alt attributes
          const img = document.createElement('img');
          img.src = `${row.img_src}`;
          img.alt = 'Image';
          img.style.backgroundColor="#D9D9D9";
          img.style.borderRadius = "100px";
          img.style.border = "1px solid black"
          img.style.width = "30px"
  
    // create a new span element and set its text content to the name
          const span = document.createElement('span');
          span.textContent = `${row.first_name} ${row.last_name}`;
          span.style.fontSize = 'medium';
          span.style.backgroundColor="#D9D9D9";
  
    // append the image and span elements to the name cell
          nameCell.appendChild(img);
          nameCell.appendChild(span);
        tr.appendChild(nameCell);
  
        const gender = document.createElement('td');
        gender.textContent = row.gender;
        tr.appendChild(gender);
  
        const classTd = document.createElement('td');
        classTd.textContent = row.class;
        tr.appendChild(classTd);
        
        const marks = document.createElement('td');
        marks.textContent = row.marks;
        tr.appendChild(marks);
        
        const passing = document.createElement('td');
        if(row.passing === true){
          passing.textContent = 'Passing';
        }
        else passing.textContent = 'Failed';
        tr.appendChild(passing);
        
        const email = document.createElement('td');
        email.textContent = row.email;
        tr.appendChild(email);
  
        const city = document.createElement('td');
        city.textContent = row.city;
        tr.appendChild(city);
        
        tableBody.appendChild(tr);
      });
    }
    else {
      const row = document.createElement('tr');
      row.innerHTML = '<td colspan="8">NO DATA FOUND</td>';
      tableBody.appendChild(row);
    }
  };