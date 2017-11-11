import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Tabs from './tabs.jsx';
import Autocomplete from './autocomplete';

class Content extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Tabs tabs={[
          {title:'tab1', content: 'watsup im tab1'},
          {title:'tab2', content: 'heyoooo im tab2 im better'},
          {title:'tab3', content: 'you will never get this'}
        ]} />
        <Autocomplete list={['Abba', 'Barney', 'Barbara', 'Jeff', 'Jenny', 'Sarah', 'Sally', 'Xander']}/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Content />, root);

});
