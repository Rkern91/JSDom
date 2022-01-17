  const campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
  ];

  console.log(campos);

  const tBody = document.querySelector('table tbody');

  document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();

    const tr = document.createElement('tr');

    campos.forEach(function(campo){
      const td = document.createElement('td');

      td.textContent = campo.value;
      tr.appendChild(td);
    });

    const tdVolume = document.createElement('td');
    tdVolume.textContent = parseFloat(campos[1].value) * parseFloat(campos[2].value);

    tr.appendChild(tdVolume);
    tBody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0.0;

    campos[0].focus();
  });