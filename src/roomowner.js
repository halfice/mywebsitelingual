import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from '@fortawesome/free-solid-svg-icons'
import './sliding.css';

import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons'

import './i18n';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import Button from 'react-bootstrap/Button'

export class RoomOwners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 2,
      divcountre: 0,
      currentclass: "hidden",
      parentdiv: 1
    }

    this.handleClick = this.handleClick.bind(this);
  }
  shoonChangewsp() {
    this.setState({
      value: 4
    });
  }


  handleClick() {
    var tmp = this.state.divcountre;
    tmp = tmp + 1;

    this.setState({
      parentdiv: 2,
      currentclass: "visible",
      divcountre: tmp,
    })
  }
  render() {


    const varclaas = "visible";
    const varclaashidden = "hidden";

    return (
      <div className="row">
        <div className="row">
          <div className="container-fluid">
            <div className="row" >
              <div className="col-sm-12">
                <div className="row"><h1>welcome</h1></div>
                <div className="row">
                  {
                    this.state.parentdiv == 1 &&
                    <div>
                      <h1>Please tell us about ur side</h1>
                    </div>
                  }

                  {
                    this.state.divcountre == 1 &&
                    <div className={this.state.currentclass}>
                      <h1>Please tell us about ur side</h1>
                    </div>
                  }

                  {
                    this.state.divcountre == 2 &&
                    <div className={this.state.currentclass}>
                      <h1>how many rooms</h1>
                    </div>
                  }

{
                    this.state.divcountre == 3 &&
                    <div className={this.state.currentclass}>
                      <h1>how many r333333333ooms</h1>
                    </div>
                  }


                </div>
                <div className="row">

                  <Button className="mybuttons" onClick={this.handleClick} >I need Flatmate</Button>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default withTranslation()(RoomOwners);