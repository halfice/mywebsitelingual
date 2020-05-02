import React, { Suspense, Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Header } from "./header/header";
import Footer from "./footer/footer";
import Bodycards from "./bodycards";
import Loginsecion from './loginsecion'
import { Rating } from "./rating";
import Looking from './lookingforroom';
import RoomOwner from './roomowner';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      needwizard: 0,
      ownerwizard:0,
      
    }
   
  }

  


  handler = (val) => {
  
    this.setState({
      needwizard: val
    })
  }

  handlertwo = (val) => {
  
    this.setState({
      ownerwizard: val
    })
  }

  render() {
    const { t } = this.props;

    let somthingNeedsTobe = "";
    let tagetedValue = 1;
    //when you want it to be rtl 
    if (tagetedValue === 1) {
      somthingNeedsTobe = "rtl"
    } else {
      somthingNeedsTobe = "ltr"
    }

    return (
      <div className="App">


        <div className=""><Header handler = {this.handler} /></div>
        
        { this.state.needwizard == 0 && this.state.ownerwizard==0 && 
          <div className=""><Rating handler = {this.handler} /></div>
        }
        



        <br></br>
        {this.state.needwizard == 0 &&  
        <div>
           <div className="row"><Loginsecion handler = {this.handler} /></div>
          </div>
        }
       
       {this.state.needwizard == 1 &&  
        <div>
           <div className="row"><Looking  /></div>
          </div>
        }

        <div className="row">
        {
        this.state.needwizard ==0 && 
        <div>
          <div className="col-sm-12"><Bodycards   /></div>
          </div>
          }

{
        this.state.needwizard ==3 && 
        <div>
          <div className="col-sm-12"><RoomOwner   /></div>
          </div>
          }

        </div>
        <div>
          <p>{t('Thanks.1')}</p>  <p>{t('Why.1')}</p>
          {somthingNeedsTobe === "rtl" ?
            t('Position1') :
            t('Position2')
          }
          {somthingNeedsTobe === "rtl" ?
            //Load External Css A
            <></>
            :
            <></>
            //Load External Css B
          }

        </div>
        <div className="row"><Footer /></div>

      </div>
    )
  }
}

export default withTranslation()(App);
/*
function App() {
  return (
    <div className="App">


      <div className="row">
        <div className="col-sm-4"><Bodycards /></div>
        <div className="col-sm-4"><Bodycards /></div>
        <div className="col-sm-4"><Bodycards /></div>
      </div>

      <div className="row"><Footer /></div>
    </div>
  );
}

export default App;
*/