import "./App.css";

function App() {

  let name = "JavaScript";
  const changeLanguage = () => {
    name = "React";
    console.log(name);
  };
  
  return (
    <div className="container">
      <h1>I am Learning {name}!</h1>
      <button onClick={changeLanguage}>Add new </button>
    </div>
  );
}

export default App;
