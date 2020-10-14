import React from "react"

class ConoceTuCuerpo extends React.Component {
  render() {
    return (
      
      <div className="container">
         <div className="row">
           <div className="col-sm">
             <div className="text-center">

                  <h1>CONOCE TU CUERPO  </h1>
                  <img src="https://image.freepik.com/vector-gratis/hombre-mujer-maniqui-cuerpo-humano-ilustracion-personaje_37112-53.jpg" class="rounded mx-auto d-block" alt="..."/>
                 <br />
                  <button type="button" class="btn btn-secondary btn-lg">
                    <a className="nav-link active text-dark" href="ReconoceTuCuerpo_1">CONOCE TU CUERPO I</a>
                  </button>
                  <br/>
                        <br/>
                        <br/>
                  <button type="button" class="btn btn-secondary btn-lg">
                    <a className="nav-link active text-dark" href="Reconocetucuerpo_2">CONOCE TU CUERPO II</a>
                  </button>
    

             </div>
           </div>
         </div>
      </div>
      
       );

    }
}
export default ConoceTuCuerpo;

