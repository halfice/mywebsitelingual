import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';


import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTumblr, faTwitter } from '@fortawesome/free-solid-svg-icons'
import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import BeautyStars from "beauty-stars";

export class Rating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 2,
        }
    }
    shoonChangewsp() {
        this.setState({
            value: 4
        });
    }

    render() {
        return (
            

              
                <div className="container-fluid ratingdiv">
                    <div className="row">
                        <div className="col-sm-4">

                        </div>
                        <div className="col-sm-4">
                            <BeautyStars
                                value={this.state.value}
                                onChange={value => this.setState({ value })}
                            />
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>

               
  
        );
    }

}

