//App.jsx es el componente principal. de aqui se llaman los otros componentes (er el main.jsx se importa App.jsx)

import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

// mx ajusta en el eje x y auto lo centra en el box de forma automatica
// mt es margen desde top

//md en tamano mediano aplica flex, es decir en tamanos medianos pone un componente debajo de otro
function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
    //JSON*** cambia arreglos a strings. y todo esto se almacena
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario
          pacientes={pacientes} //primero la variable y luego el prop
          setPacientes={setPacientes} //primero la funcion y luego el prop
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
