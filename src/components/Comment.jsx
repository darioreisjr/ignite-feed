import { Trash, ThumbsUp } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment} >
      <Avatar hasBorder={false} src="https://github.com/darioreisjr.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Dario Reis</strong>
              <time title="11 de maio as 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}