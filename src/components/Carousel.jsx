import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight);

import mainImg from '../assets/desktop-image-hero-1.jpg'

export default function Carousel() {
    return (
        <main>
            <div className="img" />
            <div className='info_section'>
                <h1>Discover innovative ways to decorate</h1>
                <p>
                    We provide unmatched quality, comfort, and style for property owners across the country.
                    Our experts combine form and function in bringing your vision to life. Create a room in your
                    own style with our collection and make your property a reflection of you and what you love.
                </p>
                <button>Shop now <FontAwesomeIcon icon="fa-solid fa-chevron-right" /></button>
            </div>
        </main>
    )
}