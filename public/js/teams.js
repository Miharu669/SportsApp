// nombre de la coleccion de datos
function local2json(name){
    // asignamos un valor o recuperamos datos almacenados
    let DB = (localStorage.getItem(name))?JSON.parse(localStorage.getItem(name)):[];
  
    /* metodos */
    return{
      // obtener todos los datos de la coleccion
      get : ()=>{
        return DB;
      },
      // ingresar nuevos datos
      push  : (obj)=>{
        DB.push(obj);
        localStorage.setItem(name,JSON.stringify(DB));
      },
      // ingresar una nueva coleccion
      set : (colection)=>{
        DB = colection;
        localStorage.setItem(name,JSON.stringify(DB));
      },
      // eliminar todos los datos de la coleccion
      delete  : ()=>{
        DB = [];
        localStorage.setItem(name,JSON.stringify(DB));
      }
    }
  }

  function ingresaDatos () {

  let database = new local2json('teams');
  nameTeam = document.getElementById("TeamName").value
  flagteam = document.getElementById("Flags").value

    /* Para obtener el valor */
    cod = document.getElementById("Flags").value;
    // alert(cod);
     
    /* Para obtener el texto */
    combo = document.getElementById("Flags");
    selected = combo.options[combo.selectedIndex].text;
    // alert(selected);

  database.set({Equipo: + nameTeam , edad: + flagteam});
  alert("Equipo registrado..!! Gracias");
/*   FirstItemlibre("li");
  viewteam(6, cod, nameTeam);  */
  viewteam(FirstItemlibre("li"),cod, nameTeam);
  console.log(database.get());
  // return true;
  // console.log(database.get());
  }

  function FirstItemlibre (strItem){
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

  function viewteam (posTeam, codFlag, nameTeam) {
     // document.getElementById("demo").innerHTML = collection[1].innerHTML;
  const collection = document.getElementsByTagName("li");
  const btnRegister = document.getElementById("Register");
  // alert(collection[posTeam].innerHTML);
  document.getElementsByTagName("li")[posTeam].innerHTML = codFlag + ' - ' + nameTeam;
  if (posTeam == 21) {
    btnRegister.disabled = true;
    btnRegister.value="Completed";
  }
    }