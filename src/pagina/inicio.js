import React from "react"

class Inicio extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
          <div className="col-sm">
            <div className="text-center">
             <br /> 
              <br />
            <form>
            <div class="form-group">
               <label for="DIGITA TUS NOMBRES">NOMBRE</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"/>
             </div>
          </form>
        
             <form>
              <div class="form-group">
                <label for="DIGITA TU EDAD">APELLIDO</label>
                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Apellido"/>
               </div>
             </form>

        
           
                      <button type="button" class="btn btn-secondary btn-lg">
                         <a className="nav-link active text-dark" href="Menu">INICIAR SESION </a>
                      </button>
                      < br />
                     <br />
                      
                     <button type="button" class="btn btn-secondary btn-lg">
                         <a className="nav-link active text-dark" href="Registro_2">RIGISTRARSE </a>
                      </button>

    




            </div>
          </div>
      </div>
    </div>
  
  
       );

    }
}
export default Inicio;
