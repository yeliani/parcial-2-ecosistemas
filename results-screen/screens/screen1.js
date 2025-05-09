import { navigateTo, socket } from "../app.js";

export default function renderScreen1() {
  const appElement = document.getElementById("app");
  appElement.innerHTML = `
      <div id="screen1">
        <h2>Screen 1</h2>
        <p>Hello from screen 1</p>

        <h3>Now Players</h3>
        <div id="nowPlayersContainer"></div>
      </div>
      `;

  const nowPlayersContainer = document.getElementById("nowPlayersContainer");

  socket.on("nowPlayers", (playersList) => {
    nowPlayersContainer.innerHTML = ""; 
    
    playersList.forEach((player) => {
      nowPlayersContainer.innerHTML += `
        <p>${player.nickname} | Rol: ${
        player.role ?? "sin asignar"
      } | Puntos: ${player.score ?? 0}</p>
      `;
    });
  });
}
