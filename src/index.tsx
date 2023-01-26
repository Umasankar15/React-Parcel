import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById('app') as HTMLElement;

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<h1>
    Hello Parcel!
</h1>);