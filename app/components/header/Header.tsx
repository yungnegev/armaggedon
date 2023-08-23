import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>Armaggedon 2023</h1>
        <p className={styles.subheading}>ООО “Команда им. Б. Уиллиса”. <br /> Взрываем астероиды с 1998 года.</p>
    </header>
  )
}

export default Header