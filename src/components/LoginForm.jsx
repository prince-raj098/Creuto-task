import { useMemo, useState } from 'react'

import styles from './LoginForm.module.css'
import InputField from './InputField.jsx'
import Divider from './Divider.jsx'
import SocialLogin from './SocialLogin.jsx'
import SignupBox from './SignupBox.jsx'
import AppDownloadSection from './AppDownloadSection.jsx'

export default function LoginForm() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')

  const canSubmit = useMemo(() => {
    return identifier.trim().length > 0 && password.length > 0
  }, [identifier, password])

  return (
    <div className={styles.stack}>
      <section className={styles.box} aria-label="Login form">
        <img className={styles.logo} src="/Instagram.png" alt="Instagram" />

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className={styles.fields}>
            <InputField
              name="identifier"
              value={identifier}
              onChange={setIdentifier}
              placeholder="Phone number, username or email address"
              autoComplete="username"
            />
            <InputField
              type="password"
              name="password"
              value={password}
              onChange={setPassword}
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>

          <button
            className={styles.loginButton}
            type="submit"
            disabled={!canSubmit}
          >
            Log in
          </button>
        </form>

        <Divider />
        <SocialLogin />

        <a
          className={styles.forgot}
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Forgotten your password?
        </a>
      </section>

      <SignupBox />
      <AppDownloadSection />
    </div>
  )
}
