function Cart () {
    
    this.cart = []

    this.create = () => {
        const element = document.createElement('div');
        element.classList.add('container');



        if(this.cart.length === 0){
            element.innerHTML = `<h2 class="cart__title">Your cart is empty</h2>`
        }else{
            const cartTitle = ` <h2 class="cart__title">Cart</h2>`
            
            let totalPrice = 0;
            let cartElement = ``;
            this.cart.forEach(({title, price, count, image, id}, index) => {
                totalPrice += count * price;
                cartElement +=  `<li class="cart__item">
                                        <div class="item__info__wrapper">
                                            <div class="item__image">
                                                <img src="${image}" alt="${title}">
                                            </div>
                                            <div class="cart__item__info">
                                                <div>${title}</div>
                                                <p>количество: ${count}</p>
                                                <p><span class="cart__item__price">${count * price}$</span></p>
                                            </div>
                                        </div>
                                        <button class="cart__delete__btn" id="${id}"></button>
                                </li>`

            });
            const btnCartClear = `  <div class="btn__clear__cart__wrapper">
                                        <button class="btn__clear__cart">Clear</button>
                                        <div class="cart__total__price cart__item__price">${totalPrice.toFixed(2)}$</div>
                                    </div>`;
            element.innerHTML = cartTitle + cartElement + btnCartClear;
        }

        return element

    }

    this.init = () => {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];

        return this.create();
    }
    
}

const cart = new Cart()

export default cart