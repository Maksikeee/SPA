function Home() {
    this.create = () => {
        const element = document.createElement('div')
        element.classList.add('home')
        element.innerHTML = `
                            
                            <div class="about__bot">                    
                                <div class="about__item">
                                    <a href="#"><img class="home__item__image" src="./img/11.avif" alt="img"></a>
                                    <p class="about__title">HOMECOMING HEROES</p>
                                    <p class="about_text">Feelin' fancy?</p>
                                </div>

                                <div class="about__item">
                                    <a href="#"><img class="home__item__image" src="./img/22.avif" alt="img"></a>
                                    <p class="about__title">WINTER NEUTRALS</p>
                                    <p class="about_text">Beige ain't boring</p>
                                </div>

                                <div class="about__item">
                                    <a href="#"><img class="home__item__image" src="./img/33.avif" alt="img"></a>
                                    <p class="about__title">WEEKDAY</p>
                                    <p class="about_text">Cold-weather wins</p>
                                </div>

                                <div class="about__item">
                                    <a href="#"><img class="home__item__image" src="./img/44.avif" alt="img"></a>
                                    <p class="about__title">DISCO NOSTALGIA</p>
                                    <p class="about_text">It's a trip</p>
                                </div>

                            </div>

                            <div class="about__bot">                    
                                <div class="about__item">
                                    <a href="#"><img class="home__item__image" src="./img/55.avif" alt="img"></a>
                                    <p class="about__title">HOMECOMING HEROES</p>
                                    <p class="about_text">Feelin' fancy?</p>
                                </div>

                                <div class="about__item">
                                    <a href="#"><img class="home__item__image" src="./img/66.avif" alt="img"></a>
                                    <p class="about__title">WINTER NEUTRALS</p>
                                    <p class="about_text">Beige ain't boring</p>
                                </div>

                                <div class="about__item">
                                    <a href="#"><img class="home__item__image" src="./img/77.avif" alt="img"></a>
                                    <p class="about__title">WEEKDAY</p>
                                    <p class="about_text">Cold-weather wins</p>
                                </div>

                                <div class="about__item">
                                    <a href="#"><img class="home__item__image" src="./img/88.avif" alt="img"></a>
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

const home = new Home().init()
export default home