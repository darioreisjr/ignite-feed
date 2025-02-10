import { Header } from './components/Header';
import { Post } from "./components/Post";
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Dario Reis"
            content="esse é um post Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti aperiam dolorum. Minima non, sunt laboriosam repudiandae atque tenetur corrupti laudantium porro dolore ab. Sit, laudantium impedit? Ea, voluptatem illo?"
          />
          <Post
            author="Felipe Cardoso"
            content="esse é outro post Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupt"
          />
        </main>
      </div>
    </div>
  )
}