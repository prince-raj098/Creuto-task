import styles from './InputField.module.css'

export default function InputField({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
}) {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      aria-label={placeholder}
    />
  )
}
