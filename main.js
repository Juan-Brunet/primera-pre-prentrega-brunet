const categories = ['Electrónicos', 'Ropa', 'Libros'];
const products = [
    { id: 1, name: 'Producto 1', category: 'Electrónicos', price: 100 },
    { id: 2, name: 'Producto 2', category: 'Ropa', price: 50 },
    // ... más productos
];

const categoriesList = document.getElementById('categories-list');
const itemListContainer = document.getElementById('item-list-container');
const cartWidget = document.getElementById('cart-widget');

categories.forEach(category => {
    const categoryLink = document.createElement('a');
    categoryLink.href = '#';
    categoryLink.textContent = category;
    categoriesList.appendChild(categoryLink);

    categoryLink.addEventListener('click', () => {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    });
});

function displayProducts(products) {
    itemListContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price} €</p>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
        itemListContainer.appendChild(productElement);
    });
}

const cart = [];

function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    cart.push(product);
    updateCartWidget();
}

function updateCartWidget() {
    cartWidget.innerHTML = `Carrito: ${cart.length} productos`;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = item.name;
        cartWidget.appendChild(cartItem);
    });
}

displayProducts(products);
