import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById('app') as HTMLElement;

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);