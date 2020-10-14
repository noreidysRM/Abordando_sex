import React from "react"

class Registro_2 extends React.Component {
  render() {
    return (
      
      <div className="container">
          <div className="row">
              <div className="col-sm">
                <div className="text-center">
                      <h1>REGISTRO </h1>
                         <br />
                      <form>
                          <div class="form-group">
                             <label for="DIGITA TUS NOMBRES">NOMBRE</label>
                             <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="digita tu nombre"/>
                          </div>
                     </form>
        
                       <form>
                         <div class="form-group">
                            <label for="DIGITA TU EDAD">APELLIDO</label>
                             <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="digita tu apellido"/>
                         </div>
                       </form>

                       <form>
                           <div class="form-group">
                                <label for="DIGITA TU EDAD">EDAD</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="digita tu edad "/>
                          </div>
                       </form>

                          <button type="button" class="btn btn-secondary btn-lg">
                             <a className="nav-link active text-dark" href="Menu">SIGUIENTE </a>
                          </button>
 
        
 
 


                </div>
              </div>
          </div>
        </div>
      
      
       );

    }
}
export default Registro_2;


