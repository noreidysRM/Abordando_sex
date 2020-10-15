import React from "react"

class Nivel1Fundamentos extends React.Component {
  render() {
    return (
      
      <div className="container-fluid">
         <div className="row">
           <div className="col-sm">
             <div className="text-center">
               
               <nav class="navbar navbar-light bg-light tex-center">
                   <span class="navbar-text">
                    NIVEL 1 - FUNDAMENTOS 
                   </span>
               </nav>
               
               
               <br />
               <iframe width="807" height="605" src="https://www.youtube.com/embed/cZYZzr1G2iQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>           
               
                <br />
                <button type="button" class="btn btn-secondary btn-lg">
                              <a className="nav-link active text-dark" href="Nivel1_2">Siguiente</a>
                 </button>
                  
             
             
               </div>
                </div>
            </div>
       </div>
      
       );

    }
}
export default Nivel1Fundamentos;


