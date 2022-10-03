function Nav () {
    this.localData = JSON.parse(localStorage.getItem('dataSPA'))
    this.create = () => {
        const element = document.createElement('nav')
        element.classList.add('nav')


        let li= '';

        this.localData.forEach(({slug, title}) => {
            li += `<li class="nav__item"><a href="#${slug}">${title}</a></li>`
        });
        

        element.innerHTML=`
                            <div class="menu-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <ul class="nav__items">
                                ${li}
                            </ul>`

                            

        return element
    }
    
    this.init = () => {
        return this.create();
    }
}

const nav = new Nav().init()

export default nav