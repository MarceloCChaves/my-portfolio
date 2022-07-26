import "./Styles.scss"

export default function Footer() {
  const date = new Date()
  return (
    <footer className="footer">
      <div>
        <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />
        <span>{date.getFullYear()} Marcelo Chaves</span>
      </div>
      <div>
        <span>Powered By <a href="https://www.linkedin.com/in/marcelocchaves/" target="_blank">Me</a></span>
      </div>
    </footer>
  )
}
