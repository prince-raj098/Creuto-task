import styles from './LoginPage.module.css'
import LoginForm from '../components/LoginForm.jsx'
import FooterLinks from '../components/FooterLinks.jsx'

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main} aria-label="Instagram login page">
        <div className={styles.columns}>
          <div className={styles.left}>
            <img
              className={styles.sideImage}
              src="/InstaPageSideIMG.jpeg"
              alt=""
              aria-hidden="true"
            />
          </div>
          <div className={styles.right}>
            <LoginForm />
          </div>
        </div>
      </main>
      <FooterLinks />
    </div>
  )
}
