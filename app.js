const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {  }, "testing React dfd Anm "),
    React.createElement("h2", {  }, "oiokay React dfd Anm "),
  ])
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
