import React from "react";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import innedflatmate from './ineedflatmate.jpg';
import innedflavtmate from './images.jpg';

function Loginsecion() {
  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-4">
          <div >
            <div className="bottombordr" >
              <div className="row">
                <div className="col-sm-6">
                  <div className="row marginljeft">
                    <span className="spanclasstext">I need flatmate</span>
                  </div>
                  <div className="row marginleft">
                    <p>Create a listing for your room, for potential flatmates to find you.

                    </p>
                  </div>
                  <div className="container row marginljeft">
                    <Button className="mybuttons">I need Flatmate</Button>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div>
                    <img src={innedflavtmate} />
                  </div>
                </div>
              </div>

            </div>


          </div>


        </div>
        <div className="col-sm-4">
        <div >
            <div className="bottombordr" >
              <div className="row">
                <div className="col-sm-6">
                  <div className="row marginljeft">
                    <span className="spanclasstext">I need Room</span>
                  </div>
                  <div className="row marginleft">
                    <p>Create a listing for your room,  to find you.

                    </p>
                  </div>
                  <div className="container row marginljeft">
                  <Button className="mybuttons">I need Room</Button>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div>
                    <img src={innedflavtmate} />
                  </div>
                </div>
              </div>

            </div>


          </div>




        </div>
        <div className="col-sm-2"></div>
      </div>








    </div>


  );
}
export default Loginsecion;