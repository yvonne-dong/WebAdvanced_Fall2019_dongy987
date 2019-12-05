import React, { Component } from 'react';
import './App.css';
import Center from './Components/Center/Center';
import Tatami from './Components/Tatami/Tatami';

//https://codepen.io/anon/pen/mepogj?editors=001
class App extends Component {
  data = {
    show: true,

    center: [
      { id: 'one', title: '春', color: "#0fb300", text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
      { id: 'two', title: '夏', color: "#ff7230", text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
      { id: 'three', title: '秋', color: "#f7ba00", text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
      { id: 'four', title: '冬', color: "#006bf7", text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ' },
    ]
  }

  onOpen = (id, li) => {
    for (let i = 0; i < li.length; i++) {
      if (li[i].props.children.props.id === id) {
        console.log("yes: " + id);
      } else {
        console.log("no: " + li[i].props.children.props.id);
      }
    }
  }

  render() {
    const centerTextAreas = this.data.center.map(
      (t) =>
        <div className="centerTextAreas" onClick={() => this.onOpen(t.title, centerTextAreas)} key={t.title}>
          <Center show={this.data.show} id={t.title}>{t.title}</Center>
        </div>
    );

    const tatamis = this.data.center.map(
      (t) =>
        <Tatami id={t.id} key={t.id} clr={t.color}/>
        // <div className="tatamiCanvas" key={t.id} id={t.id}>
        //   <P5Wrapper sketch={Tatami} color={t.color}/>
        // </div>
        
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
