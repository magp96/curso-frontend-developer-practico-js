const navEmail =  document.querySelector('.navbar-email');
const menuEmail = document.querySelector('.desktop-menu');
const navMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const navIconCart= document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');
const productContainer = document.querySelector('.cards-container');
const productCont = document.querySelector('.detail-product');
const closeDetail = document.querySelector('.detail-product-close');

navEmail.addEventListener('click',toggleMenu);
navMobile.addEventListener('click',togglemobile);
navIconCart.addEventListener('click', togglecart);
closeDetail.addEventListener('click',closeDetailProduct);



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
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productsList.push({
    name: "mouse",
    precio: 1060,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productsList.push({
    name: "Bike",
    precio: 1200,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productsList.push({
    name: "pantala",
    precio: 2200,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productsList.push({
    name: "mouse",
    precio: 1060,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function showProducts(list){
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
    
        //maquetacion de todos los elementos html
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