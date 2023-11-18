import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_F5eByscBCctFSPiKZrXpJdyUx9CqnFisw&usqp=CAU">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
