import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

library.add(faChevronLeft, faChevronRight)

export default function Controller() {
    
    const [current,setCurrent] = useState(0);
    useEffect(() => {
        const elements = document.querySelectorAll(".img_container .img");
        elements[current].classList.remove("next");
        elements.forEach((elem, ind) => {
            console.log(elem);
            if (ind < current) elem.classList.add("prev");
            if (ind > current) elem.classList.add("next")
            if (ind == current) elem.classList.remove("prev") && elem.classList.remove("next");
        })
    }, [current])
    return (
        <div id="controller_container">
            <button onClick={() => current > 0 ? setCurrent(current - 1) : ""}><FontAwesomeIcon icon="fa-solid fa-chevron-left" /></button>
            <button onClick={() => current < 2 ? setCurrent(current + 1) : ""}><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></button>
        </div>
    )
}