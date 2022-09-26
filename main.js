const navEmail =  document.querySelector('.navbar-email');
const menuEmail = document.querySelector('.desktop-menu');
const navMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const navIconCart= document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');
const productContainer = document.querySelector('.cards-container');
const productCont = document.querySelector('.detail-product');
const closeDetail = document.querySelector('.detail-product-close');
const contadorProduct = document.querySelector('#contador-product');
const closeCart = document.querySelector('.arrow-close')

let cont = 0;

navEmail.addEventListener('click',toggleMenu);
navMobile.addEventListener('click',togglemobile);
navIconCart.addEventListener('click', togglecart);
closeDetail.addEventListener('click', closeDetailProduct);
closeCart.addEventListener('click', togglecart);




function togglecart(){

    menuEmail.classList.add('inactive');
    menuMobile.classList.add('inactive');
    closeDetailProduct(); 
    asideCart.classList.toggle('inactive');    
}

function togglemobile(){
    asideCart.classList.add('inactive');
    closeDetailProduct();
    menuMobile.classList.toggle('inactive');
}

function toggleMenu(){
    asideCart.classList.add('inactive');
    closeDetailProduct();
    menuEmail.classList.toggle('inactive');

}


const productsList = [];
productsList.push({
    name: "Bike",
    precio: 1200,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productsList.push({
    name: "pantala",
    precio: 2200,
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/LG_L194WT-SF_LCD_monitor.jpg/800px-LG_L194WT-SF_LCD_monitor.jpg'
});

productsList.push({
    name: "mouse",
    precio: 1060,
    imagen: 'https://resource.logitech.com/content/dam/gaming/en/products/refreshed-g203/g203-black-gallery-1.png'
});
productsList.push({
    name: "Bike2",
    precio: 1200,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productsList.push({
    name: "pantalla2",
    precio: 2200,
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/LG_L194WT-SF_LCD_monitor.jpg/800px-LG_L194WT-SF_LCD_monitor.jpg'
});

productsList.push({
    name: "mouse2",
    precio: 1060,
    imagen: 'https://resource.logitech.com/content/dam/gaming/en/products/refreshed-g203/g203-black-gallery-1.png'
});


function showProducts(list){// maquetación de elementos necesarios para mostrar los productos
    for(product of list){

        const productCard =  document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click',openDetailProduct);
    
        const productInf = document.createElement('div');
        productInf.classList.add('product-info');
    
        const divProduct = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText='$'+product.precio;
        const productName = document.createElement('p');
        productName.innerText=product.name;
    
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productFigure.addEventListener('click', addProduct);
    
        //ensamblaje de todos los elementos html necesarios de los productos 
        productCard.appendChild(productImg);
        productCard.appendChild(productInf);
    
        divProduct.appendChild(productPrice);
        divProduct.appendChild(productName);
    
        productInf.appendChild(divProduct);
        productInf.appendChild(productFigure);
    
        productFigure.appendChild(productImgCart);
    
        productContainer.appendChild(productCard);
    }
}

//productContainer.addEventListener('click',toggleContent);

function openDetailProduct(){
    productCont.classList.remove('inactive');
    menuEmail.classList.add('inactive');
    menuMobile.classList.add('inactive');
}

function closeDetailProduct(){
    productCont.classList.add('inactive');
}

showProducts(productsList);

function addProduct(){
    cont += 1;
    contadorProduct.style.display = 'flex';
    contadorProduct.innerText=cont;
}

function addToCart() {
    
}
