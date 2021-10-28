import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};

const tasks = [
  'Escovar os dentes',
  'Arrumar a cama',
  'Alongar',
  'Tomar café',
  'caminhada',
  'estudar',
];

function App() {
  return <> {tasks.map((task) => Task(task))}</>;
}

export default App;
