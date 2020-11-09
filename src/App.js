import React from 'react';
import './App.css';
import SuperCard from './components/SuperCard';
import ListButtonContainer from './components/ListButtonContainer';
import ListButtonAvatarContainer from './components/ListButtonAvatarContainer';

function App() {
  return (
    <div className="App">
      <h1> Aufgabe Komponenten</h1>
      {/*       <ListButtonContainer/>

      <SuperCard superCardSource="https://www.w3schools.com/howto/img_avatar.png" superCardAlt="user_img" name="John Doe" profession="Arcitect and Engineer"/>
 */}
 <ListButtonAvatarContainer />
 <ListButtonAvatarContainer />


    </div>
  );
}

export default App;

