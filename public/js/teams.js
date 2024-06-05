// nombre de la coleccion de datos
function local2json(name) {
  // asignamos un valor o recuperamos datos almacenados
  let DB = localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : [];

  /* metodos */
  return {
    // obtener todos los datos de la coleccion
    get: () => {
      return DB;
    },
    // ingresar nuevos datos
    push: (obj) => {
      DB.push(obj);
      localStorage.setItem(name, JSON.stringify(DB));
    },
    // ingresar una nueva coleccion
    set: (colection) => {
      DB = colection;
      localStorage.setItem(name, JSON.stringify(DB));
    },
    // eliminar todos los datos de la coleccion
    delete: () => {
      DB = [];
      localStorage.setItem(name, JSON.stringify(DB));
    },
  };
}

function ingresaDatos() {
  let database = new local2json("teams");
  nameTeam = document.getElementById("TeamName").value;
  flagteam = document.getElementById("Flags").value;

  if (validateFields() == true) {
    /* Para obtener el valor */
    cod = document.getElementById("Flags").value;
    // alert(cod);

    /* Para obtener el texto */
    combo = document.getElementById("Flags");
    selected = combo.options[combo.selectedIndex].text;
    // alert(selected);

    database.set({ Equipo: +nameTeam, Flag: +cod });

    viewteam(FirstItemlibre("li"), cod, nameTeam);
    console.log(database.get());
    document.getElementById("TeamName").value = "";
    document.getElementById("Flags").selectedIndex = 0;
  }
}

function FirstItemlibre(strItem) {
  // const arrayTags = document.getElementsByTagName("li");
  const arrayTags = document.getElementsByTagName(strItem);
  //para caso tag li , desde 6 al 21, obtener siguiente disponible //
  for (let i = 6; i < 22; i++) {
    const element = arrayTags[i].innerHTML;
    if (element.length === 1 || element.length === 2) {
      return i;
      break;
    }
  }
}

function viewteam(posTeam, codFlag, nameTeam) {
  // document.getElementById("demo").innerHTML = collection[1].innerHTML;
  const collection = document.getElementsByTagName("li");
  const btnRegister = document.getElementById("Register");

  document.getElementsByTagName("li")[posTeam].innerHTML =
    codFlag + " - " + nameTeam;
  /*   localStorage.setItem("Equipo", nameTeam);
  localStorage.setItem("Bandera", codFlag); */
  if (posTeam == 21) {
    btnRegister.disabled = true;
    btnRegister.value = "Completed";
    cargarArray();
  }
}

function validateFields() {
  const selectElement = document.getElementById("Flags");
  const nameElement = document.getElementById("TeamName");

  if (selectElement.selectedIndex === 0 && nameElement.value == "") {
    alert("Must be Enter a Name and select a Flag for your Team!!");
    return false;
  } else if (nameElement.value == "") {
    alert("Enter a Name for your Team !!");
    return false;
  } else if (selectElement.selectedIndex === 0) {
    alert("Select a Flag for your Team !!");
    return false;
  } else {
    return true;
  }
}

function cargarArray() {
  let arrayTeams = new Array();
  const arrayTags = document.getElementsByTagName("li");

  for (let i = 6; i < 22; i++) {
    const element = arrayTags[i].innerHTML;
    arrayTeams[i - 6] = element;
  }
}
