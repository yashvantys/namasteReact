import React from 'react';
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "I'am in h1 tag"), React.createElement('h2', {}, 'I am in h2 tag')]), React.createElement("div", { id: "child1" }, [React.createElement("h1", {}, "I'am in h1 tag"), React.createElement('h2', {}, 'I am in h2 tag')])]);
const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);