function Footer () {
    this.create = () => {
        const element = document.createElement('footer')
        element.classList.add('footer')
        element.innerHTML=  `
                            <div class="container">
                                <div class="footer__wrapper">
                                    <div class="footer__logo">
                                        <a href="/">
                                            Some Store
                                        </a>
                                    </div>
                                    <div class="footer__contacts">
                                        <div class="footer__socials">
                                            <a class="instagram socials_icon" href="#"></a>
                                            <a class="twitter socials_icon" href="#"></a>
                                            <a class="vk socials_icon" href="#"></a>
                                        </div>
                                        <div class="footer__address">
                                            <p>+375 (17) 309-81-81</p>
                                            <p>+375 (44) 555-74-98</p>
                                            <p>info@somestore.com</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            `

        return element
    }
    
    this.init = () => {
        return this.create();
    }
}

const footer = new Footer().init()

export default footer