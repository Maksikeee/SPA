import { getSlugOfHash, getPageData, hashChangeEvent } from '../utils/utils.js';
import { CATALOG, CART, CONTACTS, HOME, ABOUT_US } from '../constats/constants.js'



function Main () {
    this.localData = JSON.parse(localStorage.getItem('dataSPA'))
    this.element =''
    this.create = () => {
        this.element = document.createElement('main')
        this.element.classList.add('main')
        this.render(location.hash);
        hashChangeEvent(this.render);
    };


    this.render = (hash) => {
        const slugOfHash = getSlugOfHash(hash);
        if(!hash) {
            location.replace(`${location.pathname}#${slugOfHash}`)
        }
        
        const mainData = getPageData(slugOfHash);
        const { title, content } = mainData

        this.element.innerHTML = this.getHtmlTemplate(title, content)


        if(slugOfHash === CART){
            this.element.innerHTML=`<div class="loader">Loading...</div>`
            import('./Cart.js').then(response => {
                const cartData = response.default;
                this.renderCart(cartData);
                this.btnCartDelete(cartData);
                this.clearCart(cartData);
            })
        }

        if(slugOfHash === CONTACTS){
            this.element.innerHTML=`<div class="loader">Loading...</div>`
            import('./Contacts.js').then(response => {
                const responseDefault = response.default.outerHTML
                this.element.innerHTML = this.getHtmlTemplate(title, content, responseDefault)
            })
        }

        if(slugOfHash === HOME){
            this.element.innerHTML=`<div class="loader">Loading...</div>`
            import('./Home.js').then(response => {
                const responseDefault = response.default.outerHTML
                this.element.innerHTML = this.getHtmlTemplate(title, content, responseDefault)
            })
        }

        if(slugOfHash === ABOUT_US){
            this.element.innerHTML=`<div class="loader">Loading...</div>`
            import('./AboutUs.js').then(response => {
                const responseDefault = response.default.outerHTML
                this.element.innerHTML = this.getHtmlTemplate(title, content, responseDefault)
            })
        }

        if(slugOfHash.includes(CATALOG)){
            if(slugOfHash === CATALOG) {
                this.element.innerHTML=`<div class="loader">Loading...</div>`
                import('./Catalog.js').then(response => {
                    const responseDefault = response.default
                    responseDefault.then(data => {
                        this.element.innerHTML = this.getHtmlTemplate(title, content, data.outerHTML)
                        const addToCartBtns = this.element.querySelectorAll('.catalog__item__btn')
                        addToCartBtns.forEach((btn) => {
                            btn.addEventListener('click', (e) => {
                                this.addToCart(e.target.id)
                            })
                        })
                    })
                })
            }

            if(slugOfHash.includes('/')) {
                this.element.innerHTML=`<div class="loader">Loading...</div>`
                import('./Product.js').then(response => {
                    const product = response.default.init();
                    product.then(productData => {
                        this.element.innerHTML=productData.outerHTML;
                        const addProductBtn = this.element.querySelector('.catalog__item__btn')
                        addProductBtn.addEventListener('click', (e) => {this.addToCart(e.target.id)})
                    })
                })
            }
            
        }
    }

    this.cart = JSON.parse(localStorage.getItem('cart')) || []

    this.addToCart = (idProduct) => {
        const dataCatalog = JSON.parse(localStorage.getItem('catalogData'))
        const product = dataCatalog.find(({id}) => id === +idProduct)
        const arrayIndex = this.cart.findIndex(({id}) => id === +idProduct);

        if(arrayIndex !== -1){
            this.cart[arrayIndex].count += 1;
        } else {
            product.count = 1;
            this.cart.push(product)
        }

        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    this.getHtmlTemplate = (title, content, htmlElement) => {
        return `<div class="container">
                        <div class="main__wrapper">
                            <h2>${title}</h2>
                            ${htmlElement ? htmlElement : ''}
                            <p>${content}</p>
                        </div>            
                </div>`
    }


    this.btnCartDelete = (cartData) => {
        const deleteButtons = this.element.querySelectorAll('.cart__delete__btn');
        deleteButtons.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                this.delete(e.target.id);
                this.renderCart(cartData)
                
            })
        })
    }

    this.delete = (idProduct) => {
        this.cart = this.cart.filter(({id}) => id !== +idProduct)
        // console.log(newCart)
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }


    this.clearCart = (data) => {
        const btnCartClear = document.querySelector('.btn__clear__cart');
        if(btnCartClear){
            btnCartClear.addEventListener('click', () => {
                this.cart = [];
                localStorage.removeItem('cart');
                this.renderCart(data);
            })
        }
        
    }

    this.renderCart = (data) => {
        const cart = data.init();
        this.element.innerHTML = cart.outerHTML;
        this.clearCart(data)
        this.btnCartDelete(data)
    }




    this.init = () => {
        this.create()
        return this.element
    };
}

const main = new Main().init()

export default main