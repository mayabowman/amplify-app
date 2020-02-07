import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
import Solutions from './Solutions/Solutions';
import MobileNav from './MobileNav/MobileNav';
import MobileSolutions from './MobileSolutions/MobileSolutions';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faQuestionCircle,
  faShoppingCart,
  faMapMarkerAlt,
  faUser,
  faBars,
  faChevronRight,
  faChevronLeft,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDownOpen: false,
      isClicked: false
    }
  }

  dropDownToggleClickHandler = () => {
    this.setState((prevState) => {
      return {dropDownOpen: !prevState.dropDownOpen}
    })
  }

  linkClickHandler = () => {
    this.setState((prevState) => {
      return {isClicked: !prevState.isClicked}
    })
  }

  render() {
    library.add(faSearch, faQuestionCircle, faShoppingCart, faMapMarkerAlt, faUser, faBars, faChevronRight, faChevronLeft, faTimes)
    return (
      <main className="App">
        <Nav
          toggle={this.dropDownToggleClickHandler}
          click={this.linkClickHandler}
        />
        <section>
          <Switch>
            <>
              <Route
                path='/solutions'
                render={(props) => <Solutions {...props} show={this.state.dropDownOpen} />}
              />
              <Route path='/mobilenav' component={MobileNav}/>
              <Route path='/mobilesolutions' component={MobileSolutions}/>
            </>
          </Switch>
        </section>
      </main>
    );
  }
}

export default App;
