function AboutUs() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('about')

        element.innerHTML = `
        <div class="about__bot">                    
        <div class="about__item">
            <a href="#"><img class="home__item__image" src="./img/99.avif" alt="img"></a>
            <p class="about__title">HOMECOMING HEROES</p>
            <p class="about_text">Feelin' fancy?</p>
        </div>

        <div class="about__item">
            <a href="#"><img class="home__item__image" src="./img/00.avif" alt="img"></a>
            <p class="about__title">WINTER NEUTRALS</p>
            <p class="about_text">Beige ain't boring</p>
        </div>

        <div class="about__item">
            <a href="#"><img class="home__item__image" src="./img/111.avif" alt="img"></a>
            <p class="about__title">WEEKDAY</p>
            <p class="about_text">Cold-weather wins</p>
        </div>

        <div class="about__item">
            <a href="#"><img class="home__item__image" src="./img/222.avif" alt="img"></a>
            <p class="about__title">DISCO NOSTALGIA</p>
            <p class="about_text">It's a trip</p>
        </div>

    </div>

                            
                            `

        return element
    }

    this.init = () => {
        return this.create()
    }
}

const aboutUs = new AboutUs().init()
export default aboutUs