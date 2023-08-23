import styles from './Button.module.css'

interface Props {
    children: React.ReactNode
}

const Button = ({children}: Props) => {
  return (
    <button className={styles.button}>
        {children}
    </button>
  )
}

export default Button