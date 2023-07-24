

function showAfiliados() {
    document.querySelector(".section").style.display = "none";
    document.getElementById("afiliados").style.display = "block";

    const suma = apiSlafi.reduce((total, afiliado) => total + afiliado.contribution, 0);

    document.getElementById("suma").textContent = suma;
}

function mostrarPensionados() {
	document.querySelector(".section").style.display = "none";
	document.getElementById("pensionados").style.display = "block";
	const tableBody = document.getElementById("pensionados-table").getElementsByTagName('tbody')[0];
	tableBody.innerHTML = '';
	for (let i = 0; i < apiSipen.length; i++) {
		const rowData = apiSipen[i];
		const row = `
			<tr>
				<td>${rowData.name}</td>
				<td>${rowData["last name"]}</td>
				<td>${rowData.age}</td>
				<td>${rowData.pension}</td>
				<td>${rowData.afp}</td>
			</tr>
		`;
		tableBody.insertAdjacentHTML('beforeend', row);
	}
}


// funciones para mostrar las secciones de pensionados y excluidos

function backToMenu() {
    document.querySelector(".section").style.display = "none";
    document.getElementById("menu-container").style.display = "block";
}


function logout() {
    location.reload();
}