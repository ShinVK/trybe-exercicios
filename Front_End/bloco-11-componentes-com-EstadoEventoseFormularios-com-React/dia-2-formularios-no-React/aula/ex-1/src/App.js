import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <h1>Formulário</h1>
      <Form name='name' type='text' maxl={4} />
      <Form name='email' type='email' maxl={50} />
      <Form name='name' type='text' maxl={4} />
    </div>
  );
}

export default App;
