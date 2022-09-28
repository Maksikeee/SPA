function Cart () {
    this.cart = []

    this.create = () => {
        const element = document.createElement('div');
        element.classList.add('main__wrapper');



        if(this.cart.length === 0){
            element.innerHTML = `<h2>Корзина пуста</h2>`
        }else{
            const cartTitle = ` <h2>Cart</h2>`
            const btnCartClear = `<div class="btn__clear__cart__wrapper"><button class="btn__clear__cart">Clear</button></div>`;
            let cartElement = ``;
            this.cart.forEach(({title, price, count, image}, index) => {
                cartElement +=  `<li class="cart__item">
                                        <div class="item__image">
                                            <img src="${image}" alt="${title}">
                                        </div>

                                        <div>${index+1} ${title}</div>
                                        <div class="cart__item__info">
                                            <p>количество: ${count}</p>
                                            <p><span class="item__price">Итого: ${count * price}$</span></p>
                                        </div>
                                </li>`

            });
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