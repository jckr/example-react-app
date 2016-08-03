import React, {Component} from 'react';
import {csv} from 'd3-request';
import Scatterplot from './scatterplot';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    csv('./data/birthdeathrates.csv', (error, data) => {
      if (error) {
        this.setState({loadError: true});
      }
      this.setState({
        data: data.map(d => ({...d, x: Number(d.birth), y: Number(d.death)}))
      });
    })
  }

  render() {
    if (this.state.loadError) {
      return <div>couldn't load file</div>;
    }
    if (!this.state.data) {
      return <div />;
    }
    return <div style={{
      background: '#fff',
      borderRadius: '3px',
      boxShadow: '0 1 2 0 rgba(0,0,0,0.1)',
      margin: 12,
      padding: 24,
      width: '350px'
    }}>
      <h1>Birth and death rates of selected countries</h1>
      <h2>per 1,000 inhabitants</h2>
      <Scatterplot data={this.state.data}/>
    </div>;
  }
}

export default App;
