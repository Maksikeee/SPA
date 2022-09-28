import { CATALOG } from '../constats/constants.js'
function Catalog () {
    this.catalogData = JSON.parse(localStorage.getItem('catalogData')) || [];

    this.getCatalogData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        localStorage.setItem('catalogData', JSON.stringify(data))
        return data
    }
    
    this.create = async () => {
        if (this.catalogData.length === 0 ){
            this.catalogData = await this.getCatalogData()
        }

        const element = document.createElement('div')

        let li = ''
        this.catalogData.forEach(({title, price, image, id}) => {
            li +=`<li class="catalog__item">
                        <div class="catalog__item__image">
                            <img src="${image}" alt="${title}">
                        </div>
                        <div class="catalog__item__info">
                            <div class="catalog__item__title"><a href="#${CATALOG}/${id}">${title}</a></div>
                            <div class="catalog__item__option">
                                <div class="catalog__item__price">${price}$</div>
                                <button class="catalog__item__btn" id="${id}">Add to cart</button>
                            </div>
                        </div>
                 </li>`
        })

        element.classList.add('catalog__wrapper')
        element.innerHTML = `<ul class='catalog__items'>
                                ${li}
                            </ul>`
        
        return element;
    }

    this.init = () => {
       return this.create()
    }
}

const catalog = new Catalog().init()

export default catalog