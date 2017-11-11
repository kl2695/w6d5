import React from 'react';

class Autocomplete extends React.Component {

  constructor({list:list}) {
    super();
    this.list = list;
    this.state = {
      inputVal: ""
    };
  }

  receivesText(){
    return (event) => this.setState({inputVal: event.currentTarget.value});
  }

  render() {
    const names = this.list.filter((name)=>
      name.includes(this.state.inputVal)
    );
    return (
      <div>
        <input type="text" onChange={this.receivesText()}/>
        <ul>

          {
            names.map(name => (
                <li key={name}>{name}</li>

          ))
        }
        </ul>
    </div>
  );
  }

}

export default Autocomplete;
