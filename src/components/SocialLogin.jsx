import { FaFacebookSquare } from 'react-icons/fa'
import styles from './SocialLogin.module.css'

export default function SocialLogin() {
  return (
    <a
      className={styles.link}
      href="#"
      onClick={(e) => e.preventDefault()}
    >
      <FaFacebookSquare className={styles.icon} aria-hidden="true" />
      <span>Log in with Facebook</span>
    </a>
  )
}
