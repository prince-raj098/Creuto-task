import styles from './SignupBox.module.css'

export default function SignupBox() {
  return (
    <section className={styles.box} aria-label="Sign up">
      <p className={styles.text}>
        Don’t have an account?{' '}
        <a
          className={styles.link}
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Sign up
        </a>
      </p>
    </section>
  )
}
