import React from 'react';

class Clock extends React.Component {

  constructor() {
    super();
    this.state = {
      date: new Date(),
      time: 0
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    console.log("test");

    console.log(this);
    return setInterval(this.tick, 1000);
  }

  render() {

    return (
      <div>
        <h1>Clock</h1>
        <ul>

          <li>{this.state.date.toLocaleTimeString()}</li>
          <li>{this.state.date.toDateString()}</li>

        </ul>
      </div>
    );
  }

  tick() {
    this.setState({ date: new Date() });
  }
}

export default Clock;
