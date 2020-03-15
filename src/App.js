import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Card from './components/card';
import Searchbox from './components/searchbox';
import { setSearchField, getRobotsData } from './redux/actions';

const mapStateToProps = state => ({
  searchField: state.searchRobots.searchField,
  isPending: state.requestRobots.isPending,
  robots: state.requestRobots.robots,
  error: state.requestRobots.error
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(getRobotsData())
})

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));

    return isPending ?
      <h1 style={{ margin: '50px 50px' }}>Loading...</h1> :
      (
        <div className='App'>
          <h1 className='title'>ROBOFRIENDS</h1>
          <div className='searchbox-container'>
            <Searchbox searchbox={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
