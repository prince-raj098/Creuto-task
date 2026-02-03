import styles from './FooterLinks.module.css'

const LINKS = [
  'Meta',
  'About',
  'Blog',
  'Jobs',
  'Help',
  'API',
  'Privacy',
  'Terms',
  'Locations',
  'Instagram Lite',
  'Threads',
  'Contact uploading and non-users',
  'Meta Verified',
]

export default function FooterLinks() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links} aria-label="Footer links">
        {LINKS.map((label) => (
          <a
            key={label}
            className={styles.link}
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className={styles.meta}>© {new Date().getFullYear()} Instagram from Meta</div>
    </footer>
  )
}
