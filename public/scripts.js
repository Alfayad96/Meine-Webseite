document.getElementById('employee-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('http://localhost:5002/api/employees', {
        method: 'POST',
        body: formData,
    });
    if (response.ok) {
        alert('Mitarbeiter erfolgreich hinzugefügt');
        loadEmployees();
    } else {
        alert('Fehler beim Hinzufügen des Mitarbeiters');
    }
});

async function loadEmployees() {
    const response = await fetch('http://localhost:5002/api/employees');
    const employees = await response.json();
    const carousel = document.getElementById('employee-carousel');
    carousel.innerHTML = '';
    employees.forEach(employee => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${employee.name}</h2>
            <p>${employee.position}</p>
            <img src="${employee.photoUrl}" alt="${employee.name}">
        `;
        carousel.appendChild(div);
    });
}

loadEmployees();