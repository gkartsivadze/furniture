import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

library.add(faChevronLeft, faChevronRight)

export default function Controller() {
    const elements = document.querySelectorAll(".img_container .img");
    const [current,setCurrent] = useState(0);
    function nextElem() {
        if (current < elements.length - 1) setCurrent(prev => prev + 1);
        elements.forEach(elem => elem.classList.remove("active") && elem.classList.add("prev"))
        elements[current].classList.add("active");
    }
    function prevElem() {
        if (current > 0) setCurrent(prev => prev - 1);
    }
    console.log(current);
    return (
        <div id="controller_container">
            <button onClick={prevElem}><FontAwesomeIcon icon="fa-solid fa-chevron-left" /></button>
            <button onClick={nextElem}><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></button>
        </div>
    )
}