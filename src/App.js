import React from 'react';
import './App.css';
import Card from './components/card';
import { robots } from './components/robots';
import Searchbox from './components/searchbox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbox: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchbox: event.target.value })
  }

  render() {
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchbox.toLowerCase()));

    return (
      <div className='App'>
        <h1 className='title'>ROBOFRIENDS</h1>
        <div className='searchbox-container'>
          <Searchbox searchbox={this.onSearchChange}/>
        </div>
        <div className="robots-container">
          {
            filteredRobots.map(robot => {
              return(
                <Card
                  name={robot.name}
                  email={robot.email}
                  id={robot.id}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
