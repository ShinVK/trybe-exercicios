import './App.css';

function helloWorld(nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld('Victor', 'Kamiguchi');
const container = <div>{element}</div>;

function App() {
  return (
    <div className='App'>
      <header className='App-header'> Teste</header>
      {container}
    </div>
  );
}

export default App;
