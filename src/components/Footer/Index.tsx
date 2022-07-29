import "./Styles.scss"

export default function Footer() {
  const date = new Date()
  return (
    <footer className="footer">
      <div>
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
        <span>{date.getFullYear()} Marcelo Chaves</span>
      </div>
    </footer>
  )
}
