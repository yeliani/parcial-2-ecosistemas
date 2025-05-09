import { navigateTo, makeRequestScreen2 } from "../app.js";

export default function renderScreen1() {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = `
      <div id="screen1">
        <h2>Screen 1</h2>
        <p>Hello from screen 1</p>

        <h3>Current Players</h3>
        <div id="playersListContainer"></div>
      </div>
      `;

  const playersListContainer = document.getElementById("playersListContainer");

  socket.on("nowPlayers", (playersArray) => {
    playersListContainer.innerHTML = ""; 
    
    playersArray.forEach((player) => {
      playersListContainer.innerHTML += `
        <p>${player.nickname} | Rol: ${
        player.role ?? "sin asignar"
      } | Puntos: ${player.score ?? 0}</p>
      `;
    });
  });
}
