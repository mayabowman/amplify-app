import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
import Solutions from './Solutions/Solutions';
import MobileNav from './MobileNav/MobileNav';
import MobileSolutions from './MobileSolutions/MobileSolutions'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDownOpen: false
    }
  }

  dropDownToggleClickHandler = () => {
    this.setState((prevState) => {
      return {dropDownOpen: !prevState.dropDownOpen}
    })
  }

  render() {
    return (
      <main className="App">
        <Nav
          toggle={this.dropDownToggleClickHandler}
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
