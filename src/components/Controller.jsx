import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

library.add(faChevronLeft, faChevronRight)

export default function Controller() {

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const images = document.querySelectorAll(".img_container .img");
        const headers = document.querySelectorAll(".info_section h1");
        const paragraphs = document.querySelectorAll(".info_section p");
        for (let ind = 0; ind < 3; ind++) {
            if (ind < current) {
                images[ind].classList.add("prev");
                headers[ind].classList.add("prev");
                paragraphs[ind].classList.add("prev");
            }
            if (ind > current) {
                images[ind].classList.add("next");
                headers[ind].classList.add("next");
                paragraphs[ind].classList.add("next");
            }
            if (ind == current) {
                images[ind].classList.remove("prev");
                images[ind].classList.remove("next");
                headers[ind].classList.remove("prev");
                headers[ind].classList.remove("next");
                paragraphs[ind].classList.remove("prev");
                paragraphs[ind].classList.remove("next");
            }
        }
    }, [current])
    return (
        <div id="controller_container">
            <button onClick={() => current > 0 ? setCurrent(current - 1) : ""}><FontAwesomeIcon icon="fa-solid fa-chevron-left" /></button>
            <button onClick={() => current < 2 ? setCurrent(current + 1) : ""}><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></button>
        </div>
    )
}