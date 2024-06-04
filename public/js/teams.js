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
    alert(cod);
     
    /* Para obtener el texto */
    combo = document.getElementById("Flags");
    selected = combo.options[combo.selectedIndex].text;
    alert(selected);

  database.set({Equipo: + nameTeam , edad: + flagteam});
  alert("Equipo registrado..!! Gracias");
  
  const collection = document.getElementsByTagName("li");
  // document.getElementById("demo").innerHTML = collection[1].innerHTML;
  alert(document.collection[1].innerHTML);
  document.collection[1].innerHTML = flagteam + ' ' + nameTeam;
  console.log(database.get());
  // return true;
  // console.log(database.get());
  }