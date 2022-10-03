function Product () {
    
    this.getProductData = async (id) => {
        const respone = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await respone.json()
        return data
    }

    this.create = async (idProduct) => {
        const productData = await this.getProductData(idProduct)
        const element = document.createElement('div')
        const {title, image, description, price, id} = productData
        element.classList.add('product')

        element.innerHTML= `<div class="product__wrapper">
                                <div class="catalog__item__image">
                                <img src="${image}" alt="${title}">
                                </div>
                                
                                <div class="product__item__option">
                                    <p class="product__title">${title}<p>
                                    <p class="product__description">${description}</p>
                                    <p class="product__price">${price}$</p>
                                    <button class="catalog__item__btn" id="${id}">Add to cart</button>
                                </div>
                                
                                
                                
                            </div>`

        return element
    }
    
    
    this.init = () => {
        const idProduct = location.hash.split('/')[1];
        return this.create(idProduct)
    }
}

const product = new Product()
export default product