import nav from './Nav.js'

function Header () {
    this.create = () => {
        const element = document.createElement('header');
        element.classList.add('header')
        element.innerHTML=`<div class="container">
                                <div class="header__wrapper">
                                    <div class="header__logo">
                                        <a href="/">
                                            Some Store
                                        </a>
                                    </div>                                        
                                        ${nav.outerHTML}
                                </div>
                            </div>`
        return element
    }

    this.init = () => {
        return this.create()
    }
}

const header = new Header().init()

export default header