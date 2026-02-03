import styles from './AppDownloadSection.module.css'

import googlePlayBadge from '../assets/badges/google-play-badge.svg'
import microsoftStoreBadge from '../assets/badges/microsoft-store-badge.svg'

export default function AppDownloadSection() {
  return (
    <section className={styles.section} aria-label="Get the app">
      <p className={styles.title}>Get the app.</p>
      <div className={styles.badges}>
        <a href="#" onClick={(e) => e.preventDefault()}>
          <img
            className={styles.badge}
            src={googlePlayBadge}
            alt="Get it on Google Play"
          />
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          <img
            className={styles.badge}
            src={microsoftStoreBadge}
            alt="Get it from Microsoft"
          />
        </a>
      </div>
    </section>
  )
}
