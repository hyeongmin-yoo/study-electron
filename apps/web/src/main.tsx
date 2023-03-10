import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

declare global {
  interface Window {
    versions: any;
    electron: {
      send: (event: string, args: unknown[]) => Promise<any>;
    };
  }
}
