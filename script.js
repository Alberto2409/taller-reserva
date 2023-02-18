
let car = "";


const selectCar= (carCode) =>{
    console.log(carCode);
    car = carCode;
    document.getElementById('form-title').innerHTML = `El vehiculo  selecionado es: ${carCode}`;
}


const createReservation =()=> {
    const name = document.getElementById('name').value;
    const cc = document.getElementById('cc').value;

    console.log({name, cc, car});

   const tableBody = document.querySelector('.table tbody');
   tableBody.innerHTML += `<tr id="${car}"><td>${name}</td><td>${cc}</td><td>${car}</td><td><button class="btn btn-warning" onclick="deleteReservation('${car}')">Delete</button>`

}

const deleteReservation = (carCode) => {
    document.getElementById(carCode).remove();

}