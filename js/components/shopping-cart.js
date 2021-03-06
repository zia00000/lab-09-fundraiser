import html from '../helper-utilities/html.js';

function makeItem(item) {
    return html`
        <li>${item.name} <strong>(${item.quantity})</strong>
        <button class="decrement">Remove</button>
        </li>
        `;
}

const list = document.getElementById('cart-list');

const shoppingCart = {
    init(cart) {
        for(let i = 0; i < cart.length; i++) {
            const dom = makeItem(cart[i]);
            list.appendChild(dom);
        }
    },
    update(cart) {
        while(list.lastElementChild) {
            list.lastElementChild.remove();
        }
        shoppingCart.init(cart);
    }
};

export default shoppingCart;
