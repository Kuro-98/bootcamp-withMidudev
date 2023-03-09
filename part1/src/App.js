import "./App.css";
import Mensaje from "./Mensaje";

const Description = () => {
  return <p>Esta es una app del curso fullstack bootcamp</p>;
};

function App() {
  //JAMAS se debe crear componentes dentro de otros
  //es decir aqui por ejemplo no se debe poner otro.
  return (
    <div className="App">
      <Mensaje message="Estamos trabajando" />
      <Mensaje message="En un curso" />
      <Mensaje message="De React" />
      <Description />
    </div>
  );
}

export default App;
