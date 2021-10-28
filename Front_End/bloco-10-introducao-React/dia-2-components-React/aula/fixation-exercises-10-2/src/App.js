import './App.css';
import Image from './image';
// import urlImg from './cat-2083492_1280.webp';
// const urlImg =
//   'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
function App() {
  return (
    <main>
      <Image
        source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
        alternativeText='Cute cat staring'
      />
    </main>
  );
}

export default App;
