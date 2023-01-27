import { app, BrowserWindow, ipcMain } from "electron";
import { resolve } from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: resolve(__dirname, "./preload.js"),
    },
  });
  ipcMain.handle("ping", async () => await Promise.resolve("pong"));
  win.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  app.quit();
});
