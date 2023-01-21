const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }


    aside.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Vest',
    price: 120,
    image: 'Products/Captura de pantalla 2023-01-15 a la(s) 1.51.35 p.m..png'
});

productList.push({
    name: 'Hoddies',
    price: 150,
    image: 'Products/Captura de pantalla 2023-01-15 a la(s) 1.54.03 p.m..png'
});

productList.push({
    name: 'Set',
    price: 400,
    image: 'Products/Captura de pantalla 2023-01-15 a la(s) 1.54.13 p.m..png'
});

productList.push({
    name: 'Puma Mirage Sport',
    price: 300,
    image: 'Products/Captura de pantalla 2023-01-15 a la(s) 1.54.44 p.m..png'
});

productList.push({
    name: 'Air Max Retro',
    price: 120,
    image: 'Products/Captura de pantalla 2023-01-15 a la(s) 1.55.08 p.m..png'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './curso-frontend-developer-practico-main 2/icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
    
}

renderProducts(productList);

