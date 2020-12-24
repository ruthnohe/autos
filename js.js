const cars = [
    {
        id: 1,
        brand: 'BMW',
        model: 'Sedán Serie 7',
        colors: 'Rojo',
        year: '2019',
        price: '$409.900.000'
    },
    {
        id: 2,
        brand: 'NISSAN',
        model: 'Leaf',
        colors: 'Amarillo',
        year: '2019',
        price: '$409.900.000'
    },
    {
        id: 3,
        brand: 'JEEP',
        model: 'Cherokee',
        colors: 'Black',
        year: '2019',
        price: '$509.900.000'
    },
    {
        id: 4,
        brand: 'FERRARI',
        model: 'GTB',
        colors: 'Rojo',
        year: '2020',
        price: '$409.900.000.000'
    },
    {
        id: 5,
        brand: 'VOLVO',
        model: 'Sedán Serie 7',
        colors: 'Red',
        year: '2019',
        price: '$409.900.000'
    }
];

function printCars() {
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((car) => {
        html += `<tr>
                    <td>${car.brand}</td>
                    <td>${car.model}</td>
                    <td>${car.colors}</td>
                    <td>${car.year}</td>
                    <td>${car.price}</td>
                    <td>
                        <button onclick="deleteCar(${car.id})" class="btn btn-danger">
                            Eliminar
                        </button>
                    </td>
                </tr>`;
    });
    container.innerHTML = html;
}

function deleteCar(id) {
    const index = cars.findIndex((car) => car.id == id );
    cars.splice(index, 1);

    printCars();
}

function addCar() {
    const inputBrand = document.getElementById('brand');
    const brand = inputBrand.value;

    const inputModel = document.getElementById('model');
    const model = inputModel.value;

    const inputColors = document.getElementById('colors');
    const colors = inputColors.value;

    const inputYear = document.getElementById('year');
    const year = inputYear.value;

    const price = document.getElementById('price').value;
    const id = cars[cars.length -1].id + 1;


    const newCar = {
        brand,
        model,
        colors,
        year,
        price,
        id
    }
    cars.push(newCar);
    printCars();

    document.getElementById('form-car').reset();
}

printCars();