import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bienvenida from "../pagina/bienvenida";
import Inicio from "../pagina/inicio";
import Menu from "../pagina/menu";
import Registro from "../pagina/registro";
import Registro_2 from "../pagina/registro_2";
import Informacion from "../pagina/informacion";
import Cuestionario from "../pagina/cuestionario";
import ConoceTuCuerpo from"../pagina/conoceTuCuerpo";
import ReconoceTuCuerpo_1 from"../pagina/reconoceTuCuerpo_1";
import Reconocetucuerpo_2 from"../pagina/reconocetucuerpo_2";
import ConoceTuCuerpoSiguiente from "../pagina/conoceTuCuerpoSiguiente";
import Nivel_1 from"../pagina/nivel_1";
import Hombrep_2 from"../pagina/hombrep_2";
import Nivel1Fundamentos from "../pagina/nivel1Fundamentos";
import Hombrep_3 from "../pagina/hombrep_3";
import Nivel1_2 from"../pagina/nivel1_2";
import Enfermedades from "../pagina/enfermedades";
import Curiosidades from"../pagina/curiosidades";



  const App = () => {
     return(
       <BrowserRouter>
         <Switch> 
             
            <Route exact path="/" component={Bienvenida} />
            <Route exact path="/Inicio" component={Inicio} />
            <Route exact path="/Menu" component={Menu} />
            <Route exact path="/Registro" component={Registro} />
            <Route exact path="/Registro_2" component={Registro_2} />
            <Route exact path="/Informacion" component={Informacion} />
            <Route exact path="/Cuestionario" component={Cuestionario} />
            <Route exact path="/ConoceTuCuerpo" component={ConoceTuCuerpo} />
            <Route exact path="/ReconoceTuCuerpo_1" component={ReconoceTuCuerpo_1} />
            <Route exact path="/ReconoceTuCuerpo_2" component={Reconocetucuerpo_2} />
            <Route exact path="/ConoceTuCuerpoSiguiente" component={ConoceTuCuerpoSiguiente} />
            <Route exact path="/Nivel_1" component={Nivel_1} />
            <Route exact path="/Hombrep_2" component={Hombrep_2} />
            <Route exact path="/Nivel1Fundamentos" component={Nivel1Fundamentos} />
            <Route exact path="/Hombrep_3" component={Hombrep_3} />
            <Route exact path="/Nivel1_2" component={Nivel1_2} />
            <Route exact path="/Enfermedades" component={Enfermedades} />
           


           



         </Switch>
      </BrowserRouter>
     )
  }

export default App;