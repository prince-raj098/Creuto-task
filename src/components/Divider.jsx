import styles from './Divider.module.css'

export default function Divider() {
  return (
    <div className={styles.divider} role="separator" aria-label="or">
      <div className={styles.line} />
      <span className={styles.text}>OR</span>
      <div className={styles.line} />
    </div>
  )
}
