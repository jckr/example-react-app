import React, {Component} from 'react';
import {csv} from 'd3-request';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    csv('./data/birthdeathrates.csv', (error, data) => {
      console.log(data, error);
      if (error) {
        this.setState({loadError: true});
      }
      this.setState({data});
    })
  }

  render() {
    const {loadError, data} = this.state;

    return (
      <div className="App">
        {loadError ? 'couldn\'t load file' : JSON.stringify(data)}
      </div>
    );
  }
}

export default App;
