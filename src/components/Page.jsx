import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronRight);

export default function Page() {
    return (
        <section className="page">
            <div className="img_container">
                <div className="img" />
                <div className="img next" />
                <div className="img next" />
            </div>
            <div className="info_section">
                <h1>Discover innovative ways to decorate</h1>
                <h1 className="next">We are available all across the globe</h1>
                <h1 className="next">Manufactured with the best materials</h1>
                <p>
                    We provide unmatched quality, comfort, and style for property owners across the country.
                    Our experts combine form and function in bringing your vision to life. Create a room in your
                    own style with our collection and make your property a reflection of you and what you love.
                </p>
                <p className="next">
                    With stores all over the world, it's easy for you to find furniture for your home or place of business.
                    Locally, we're in most major cities throughout the country. Find the branch nearest you using our
                    store locator. Any questions? Don't hesitate to contact us today.
                </p>
                <p className="next">
                    Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
                    to ensure that every product is made as perfect and as consistent as possible. With three decades of
                    experience in this industry, we understand what customers want for their home and office.
                </p>
                <button>Shop now <FontAwesomeIcon icon="fa-solid fa-chevron-right" /></button>
            </div>
        </section>
    )
}