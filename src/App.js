import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
// import MenuToggleButton from './MenuToggleButton/MenuToggleButton';
import Solutions from './Solutions/Solutions';
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
              <Route path='/nav' component={Nav}/>
            </>
          </Switch>
        </section>
      </main>
    );
  }
}

export default App;
