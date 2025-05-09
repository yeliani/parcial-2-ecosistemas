import renderScreen1 from "./screens/screen1.js";
import renderScreen2 from "./screens/screen2.js";

const socket = io("/", { path: "/real-time" });

socket.on("gameWinner", (data) => {
  navigateTo("/screen2", data);
});

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

let route = { path: "/", data: {} };
renderRoute(route);

function renderRoute(currentRoute) {
  switch (currentRoute?.path) {
    case "/":
      clearScripts();
      renderScreen1(currentRoute?.data);
      break;
    case "/screen2":
      clearScripts();
      renderScreen2(currentRoute?.data);
      break;
    default:
      const app = document.getElementById("app");
      app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  }
}

async function makeRequestScreen2(url, method, body) {
  try {
    const BASE_URL = "http://localhost:5050";
    let response = await fetch(`${BASE_URL}${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("API request failed:", error);
    // Return a failed response object that can be checked by callers
    return { success: false, error: error.message };
  }
}

function navigateTo(path, data) {
  route = { path, data };
  renderRoute(route);
}

export { navigateTo, socket, makeRequestScreen2 };