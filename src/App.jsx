import { Post } from "./Post"

import './styles.css'
import { Header } from './components/Header';
export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Dario Reis"
        content="esse é um post Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupti aperiam dolorum. Minima non, sunt laboriosam repudiandae atque tenetur corrupti laudantium porro dolore ab. Sit, laudantium impedit? Ea, voluptatem illo?"
      />
      <Post
        author="Felipe Cardoso"
        content="esse é outro post Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corrupt"
      />
    </div>
  )
}
