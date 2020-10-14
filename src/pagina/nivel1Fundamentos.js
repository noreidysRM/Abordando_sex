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

                 <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=cZYZzr1G2iQ&t=5s" allowfullscreen></iframe>
</div>
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


