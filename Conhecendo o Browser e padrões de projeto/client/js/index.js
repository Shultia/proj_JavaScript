let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

console.log(campos);

let tBody =  document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit',function(event) {
    let tr = document.createElement('tr');
    event.preventDefault();

    campos.forEach(function(campo){

        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;   
    tr.appendChild(tdVolume);

    tBody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();


})