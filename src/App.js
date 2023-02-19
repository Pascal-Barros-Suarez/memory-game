import React, { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import WinGame from "./components/WinGame";
import StartGame from "./components/StartGame";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [gameStart, setGameStart] = useState(false);
  const [winGame, setWinGame] = useState(false);

  function getname(name, condition) {
    console.log("estoy en getname en app", name, condition);

    setPlayerName(name);
    setGameStart(condition);
  }

  function knowIfWin(value) {
    setWinGame(value);
  }

  function resetGame() {
    setGameStart(true);
    setWinGame(false);
  }

  let theGame;
  if (gameStart === false) {
    theGame = <StartGame getname={getname}></StartGame>;
  } else if (gameStart === true && winGame === false) {
    theGame = <Table knowIfWin={knowIfWin}></Table>;
  } else if (winGame === true) {
    theGame = <WinGame resetGame={resetGame} name={playerName}></WinGame>;
  }

  return (
    <div className="App">
      {winGame ? (
        <body className="App-header-win bg-success">{theGame}</body>
      ) : (
        <header className="App-header">{theGame}</header>
      )}
    </div>
  );
}

export default App;
