import React from 'react';

class Tabs extends React.Component {

  constructor({tabs:tabs}){

    super();


    this.tabs = tabs;
    this.state = {
      selected: 0
    };

  }

  reassign(tab) {

    return (event => this.setState({selected: this.tabs.indexOf(tab)}));

  }

  render(){
    return (
      <ul>
        <header>
          {
            this.tabs.map(tab => (
              <button key={tab.title} onClick={this.reassign(tab)}>{tab.title}</button>
            ))
          }

        </header>
        <p>{this.tabs[this.state.selected].content}</p>
      </ul>
    );
  }


}

export default Tabs;
