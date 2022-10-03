function Contacts() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('contacts')
        element.innerHTML= `
                                <div class="contacts__address">
                                    <div class="contacts__block">
                                        <div class="contacts__tel">
                                            <p class="contacts__">Вы можете связаться с нами по телефону:</p>
                                            <a class="contacts__" href="#">+375 (17) 309-81-81</a>
                                            <a class="contacts__" href="#">+375 (44) 555-74-98</a>    
                                        </div>
                                        <div class="contacts__email">
                                            <p class="contacts__">Или написать нам на почту</p>
                                            <a class="contacts__" href="#">info@somestore.com</a>
                                        </div>
                                        <div class="contacts__socials">
                                            <p class="contacts__">Мы в соц. сетях</p>
                                            <div class="socials__wrapper">
                                                <a class="instagram socials_icon" href="#"></a>
                                                <a class="twitter socials_icon" href="#"></a>
                                                <a class="vk socials_icon" href="#"></a>
                                            </div>
                                            
                                        </div>
                                        <p class="contacts__address__minsk">Мы находимcя по адресу пр-кт Победителей, 9 Минск, Беларусь</p>

                                    </div>
                                    <a target="_blank" href="https://yandex.by/maps/org/galleria_minsk/1338341926/?indoorLevel=1&ll=27.549520%2C53.908532&z=16.89">
                                        <img class="contacts__map" src="./img/gall.png">
                                    </a>
                                    
                                </div>
                                
                                
                            `

        return element
    }

    this.init = () => {
        return this.create()
    }
}

const contacts = new Contacts().init()

export default contacts;