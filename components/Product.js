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
                                <h1>${title}<h1>
                                <h3>${price}</h3>
                                <button class="add__product__cart" id="${id}">Add to cart</button>
                                <p>${description}</p>
                                <img src="${image}" alt="${title}">
                            </div>`

        return element
    }
    
    
    this.init = () => {
        const idProduct = location.hash.split('/')[1];
        console.log(idProduct)
        return this.create(idProduct)
    }
}

const product = new Product()
export default product