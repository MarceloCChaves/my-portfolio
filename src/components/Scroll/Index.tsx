import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import"./Styles.scss";

export default function Scroll(){
  const [ backToTopButton, setBackToTopButton ] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      {backToTopButton && (
        <button className="scrollToTopButton" onClick={scrollUp}>
          <FaArrowUp size={20} color='#fff' />
        </button>
      )}
    </div>
  )
}