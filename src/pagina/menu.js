import React from "react"

class Menu extends React.Component {
  render() {
    return (
    <div class="container">
          <div class="row tex-center">

                <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                
                 <br />
                 <br />
                  <img src="https://i.pinimg.com/564x/12/ed/72/12ed72a53d051132974c27b1619752d0.jpg" alt="..." class="img-thumbnail"/>
                </div>

                 

             <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                 
                 <br />
                 <br />
                 <br />
                 <br />

               <h1>MENÚ</h1>  
                 <br />
                 <br />
                 <br />
                 <br />
                 

                <ul class="nav flex-column">
                   <li class="nav-item">
                      <button type="button" class="btn btn-secondary btn-lg">
                           <a className="nav-link active text-dark" href="Informacion">Informacion </a>
                     </button>
                 </li>
                </ul>
                <br />
                <br />
                 
                 

                  <ul class="nav flex-column">
                      <li class="nav-item">
                        <button type="button" class="btn btn-secondary btn-lg">
                           <a className="nav-link active text-dark" href="">Puntuacion</a>
                        </button>
                     </li>
                 </ul>
             </div>


               <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
                 <br />
               <img src="https://st2.depositphotos.com/6222352/10227/v/950/depositphotos_102279090-stock-illustration-world-aids-day-with-condom.jpg" class="rounded float-right"  width="250 px" alt="..."/>

               </div>
           </div>
      </div>

       );

    }
}
export default Menu;