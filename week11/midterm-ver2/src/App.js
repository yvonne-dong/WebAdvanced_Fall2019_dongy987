import React, { Component } from 'react';
import './App.css';
import Center from './Components/Center/Center';
import Tatami from './Components/Tatami/Tatami';

class App extends Component {
  data = {
    center: [
      { id: 'one', title: '春', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
      { id: 'two', title: '夏', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
      { id: 'three', title: '秋', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
      { id: 'four', title: '冬', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
    ]
  }

  onOpen = (id, li) => {
    // console.log(li[0].props.children.props.id);

  }

  render() {
    const centerTextAreas = this.data.center.map(
      (t) =>
        <div className="centerTextAreas" onClick={() => this.onOpen(t.title, centerTextAreas)}>
          <Center id={t.title}>{t.title}</Center>
        </div>
    );

    const tatamis = this.data.center.map(
      (t) =>
        <Tatami id={t.id} />
    );

    return (
      <div className="App" >
        <div className="mainContainer">
          {tatamis}
          {/* the main div for holding all center text areas */}
          <div className="centerMain">
            {centerTextAreas}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
