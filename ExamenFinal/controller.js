function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	if (username === "admin" && password === "admin") {
		document.querySelector(".container").style.display = "none";
		document.getElementById("menu-container").style.display = "block";
	} else {
		alert("Usuario o contraseña incorrectos");
	}
}

// ... (código existente)

function showExcluidos() {
	document.getElementById("menu-container").style.display = "none";
	document.getElementById("afiliados").style.display = "none";
	document.getElementById("pensionados").style.display = "none";
	document.getElementById("excluidos").style.display = "block";
  
	showExcluidosByCategory();
  }
  
  function backToMenu() {
	document.getElementById("menu-container").style.display = "block";
	document.getElementById("afiliados").style.display = "none";
	document.getElementById("pensionados").style.display = "none";
	document.getElementById("excluidos").style.display = "none";
  }
  
  function showExcluidosByCategory() {
	const excluidosFFAA = apiSCex.filter((excluido) => excluido.exclusión === "FFAA");
	const excluidosEmpleados = apiSCex.filter((excluido) => excluido.exclusión === "Empleado");
  
	const sumaFFAA = excluidosFFAA.reduce((total, excluido) => total + excluido.pension, 0);
	const sumaEmpleados = excluidosEmpleados.reduce((total, excluido) => total + excluido.pension, 0);
  
	document.getElementById("excluidos").innerHTML = `
	  <h2>Excluidos</h2>
	  <div>
		<h3>Por FFAA</h3>
		<p>Suma de pensiones: ${sumaFFAA}</p>
	  </div>
	  <div>
		<h3>Por Empleados</h3>
		<p>Suma de pensiones: ${sumaEmpleados}</p>
	  </div>
	  <button onclick="backToMenu()">Volver al menú</button>
	`;
  }
  