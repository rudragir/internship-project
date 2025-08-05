//                  card
const products = [
    {
        title: "Wireless Headphones",
        description: "High-quality noise-cancelling headphones.",
        image: "https://m.media-amazon.com/images/I/61evtSm4vDL._SX466_.jpg",
        link: "https://affiliate-link.com/product1",
        originalPrice: 199.99,
        discountedPrice: 149.99,
        discountPercentage: 25,
                category : "electronics"
    },
    {
        title: "Wireless Headphones",
        description: "High-quality noise-cancelling headphones.",
        image: "https://m.media-amazon.com/images/I/31ogOjiaPdL._SX300_SY300_QL70_FMwebp_.jpg",
        link: "https://affiliate-link.com/product1",
        originalPrice: 199.99,
        discountedPrice: 149.99,
        discountPercentage: 25,
                category : "electronics"
    },
    {
        title: "Wireless Headphones",
        description: "High-quality noise-cancelling headphones.",
        image: "https://m.media-amazon.com/images/I/2110TEYPKnL._SX300_SY300_QL70_FMwebp_.jpg",
        link: "https://affiliate-link.com/product1",
        originalPrice: 199.99,
        discountedPrice: 149.99,
        discountPercentage: 25,
                category : "electronics"
    },
    {
        title: "Wireless Headphones",
        description: "High-quality noise-cancelling headphones.",
        image: "https://m.media-amazon.com/images/I/31HesiJ28bL._SX300_SY300_QL70_FMwebp_.jpg",
        link: "https://affiliate-link.com/product1",
        originalPrice: 199.99,
        discountedPrice: 149.99,
        discountPercentage: 25,
                category : "electronics"
    },
    {
        title: "Wireless Headphones",
        description: "High-quality noise-cancelling headphones.",
        image: "https://m.media-amazon.com/images/I/41J2ByfeQwL._SY445_SX342_QL70_FMwebp_.jpg",
        link: "https://affiliate-link.com/product1",
        originalPrice: 199.99,
        discountedPrice: 149.99,
        discountPercentage: 25,
                category : "electronics"
    },
    {
        title: "Wireless Headphones",
        description: "High-quality noise-cancelling headphones.",
        image: "https://m.media-amazon.com/images/I/31eNrZVuICL._SX300_SY300_QL70_FMwebp_.jpg",
        link: "https://affiliate-link.com/product1",
        originalPrice: 199.99,
        discountedPrice: 149.99,
        discountPercentage: 25,
        category: "electronics"
    },
    {
        title: "Wireless Headphones",
        description: "High-quality noise-cancelling headphones.",
        image: "https://m.media-amazon.com/images/I/41ABL+pRmDL._SY300_SX300_.jpg",
        link: "https://affiliate-link.com/product1",
        originalPrice: 199.99,
        discountedPrice: 149.99,
        discountPercentage: 25,
        category: "electronics"
    },
    {
        title: "Wireless Headphones",
        description: "High-quality noise-cancelling headphones.",
        image: "https://m.media-amazon.com/images/I/31eWHsks6AL._SX300_SY300_QL70_FMwebp_.jpg",
        link: "https://affiliate-link.com/product1",
        originalPrice: 199.99,
        discountedPrice: 149.99,
        discountPercentage: 25,
                category : "electronics"
    }

];

function addToCart(title, imgSrc) {
    const product = products.find(p => p.title === title);
    if (!product) return;

    const existingItem = cart.find(item => item.title === title);
    const priceToUse = product.discountedPrice || product.originalPrice;

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            title,
            imgSrc,
            price: priceToUse, // Use the discounted price
            quantity: 1
        });
    }

    updateCartUI();
}

const container = document.getElementById('card_container');


products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';

    const priceHTML = product.discountedPrice
        ? `
      <div class="price-container">
        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
        <span class="discounted-price">$${product.discountedPrice.toFixed(2)}</span>
        <span class="discount-percent">${product.discountPercentage}% OFF</span>
      </div>
    `
        : `
      <div class="price-container">
        <span class="discounted-price">$${product.originalPrice.toFixed(2)}</span>
      </div>
    `;

    card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <div class="card-body">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      ${priceHTML}
      <div class="buttons">
        <a href="${product.link}" class="buy-now">Buy Now</a>
        <button class="add-to-cart">
          <img src="img/shopping-cart.png" alt="Add to cart">
        </button>
      </div>
    </div>
  `;

    container.appendChild(card);
});

function addToCart(title, imgSrc, price) {
    const product = products.find(p => p.title === title);
    const actualPrice = product.discountedPrice || product.price;

    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            title,
            imgSrc,
            price: actualPrice,
            quantity: 1
        });
    }

    triggerCartAnimation();
}

function openProductPopup(product) {
    // ... existing code ...

    // Update price display in popup
    const priceHTML = `
        <div class="price-container">
            <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
            <span class="discounted-price">$${product.discountedPrice.toFixed(2)}</span>
            <span class="discount-percent">${product.discountPercentage}% OFF</span>
        </div>
    `;
    document.querySelector('.popup-details .price').innerHTML = priceHTML;

    // ... rest of the function ...
}


//              DOTS SLIDESHOW 
const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slideshow img');
const dotsContainer = document.querySelector('.dots-container');

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = i;
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
};

const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideCount = slides.length;

function goToSlide(index) {
    slideshow.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
};

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    goToSlide(currentIndex);
};

let interval = setInterval(nextSlide, 3000);

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(interval);
        goToSlide(Number(dot.dataset.index));
        interval = setInterval(nextSlide, 3000);
    });
});


//                      SHOPPING CART 

//   window.addEventListener('DOMContentLoaded', function () {
//     let cartIcon = document.querySelector('.cart_icon');
//     let body = document.querySelector('body');

//     cartIcon.addEventListener('click', () => {
//       body.classList.toggle('showCart');
//     });
//   });

// Cart functionality
const cart = [];
const cartIcon = document.querySelector('.cart_icon');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const closeCart = document.querySelector('.close-cart');
const cartCounter = document.querySelector('.cart_icon span');

// // Update product data with prices
// products.forEach(product => {
//   product.price = Math.floor(Math.random() * 100) + 50; // Random price between 50-150
// });

// Add to cart functionality
document.addEventListener('click', function (e) {
    if (e.target.closest('#add_to_cart')) {
        const card = e.target.closest('.card');
        const title = card.querySelector('h3').textContent;
        const imgSrc = card.querySelector('img').src;
        const price = products.find(p => p.title === title).price;

        addToCart(title, imgSrc, price);
        updateCartUI();
    }
});

// Cart functions
function addToCart(title, imgSrc, price) {
    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            title,
            imgSrc,
            price,
            quantity: 1
        });
    }
}

function removeFromCart(title) {
    const itemIndex = cart.findIndex(item => item.title === title);
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
    }
}

function updateQuantity(title, newQuantity) {
    const item = cart.find(item => item.title === title);
    if (item) {
        item.quantity = newQuantity;
    }
}

function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    // Update cart counter
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCounter.textContent = totalItems;

    // Update cart items
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
        <img src="${item.imgSrc}" alt="${item.title}">
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.title}</h4>
          <p class="cart-item-price">$${item.price.toFixed(2)}</p>
          <div class="cart-item-quantity">
            <button class="quantity-btn minus">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn plus">+</button>
          </div>
          <button class="remove-item">Remove</button>
        </div>
      `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    // Update total
    cartTotal.textContent = `$${calculateTotal().toFixed(2)}`;
}

// Event listeners for cart
cartIcon.addEventListener('click', () => {
    cartOverlay.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartOverlay.classList.remove('active');
});

cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
        cartOverlay.classList.remove('active');
    }
});

// Handle quantity changes and removals
cartItemsContainer.addEventListener('click', (e) => {
    const cartItem = e.target.closest('.cart-item');
    if (!cartItem) return;

    const title = cartItem.querySelector('.cart-item-title').textContent;

    if (e.target.classList.contains('minus')) {
        const quantityElement = cartItem.querySelector('.quantity-value');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateQuantity(title, quantity);
        } else {
            removeFromCart(title);
        }
        updateCartUI();
    }

    if (e.target.classList.contains('plus')) {
        const quantityElement = cartItem.querySelector('.quantity-value');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateQuantity(title, quantity);
        updateCartUI();
    }

    if (e.target.classList.contains('remove-item')) {
        removeFromCart(title);
        updateCartUI();
    }
});

// Initialize cart UI
updateCartUI();

document.addEventListener('click', function (e) {
    // For add to cart buttons in Today's Deals
    if (e.target.closest('#add_to_cart') || e.target.closest('#add_to_cart img')) {
        e.preventDefault();
        const card = e.target.closest('.card');
        const title = card.querySelector('h3').textContent;
        const imgSrc = card.querySelector('img').src;
        const price = products.find(p => p.title === title).price;

        // Trigger animation on the clicked add to cart icon
        const addToCartBtn = e.target.closest('#add_to_cart');
        addToCartBtn.classList.add('cart-icon-animate');

        // Remove animation class after it completes
        setTimeout(() => {
            addToCartBtn.classList.remove('cart-icon-animate');
        }, 600);

        addToCart(title, imgSrc, price);
        updateCartUI();
    }

    // For main cart icon
    if (e.target.closest('.cart_icon') || e.target.closest('.cart_icon img')) {
        e.preventDefault();
        cartOverlay.classList.add('active');
    }
});

// Update your existing addToCart function
function addToCart(title, imgSrc, price) {
    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            title,
            imgSrc,
            price,
            quantity: 1
        });
    }

    // Trigger main cart icon animation
    triggerCartAnimation();
}

function triggerCartAnimation() {
    const cartIcon = document.querySelector('.cart_icon');
    const counter = document.querySelector('.cart_icon span');

    cartIcon.classList.add('cart-icon-animate');
    counter.classList.add('counter-pulse');

    setTimeout(() => {
        cartIcon.classList.remove('cart-icon-animate');
        counter.classList.remove('counter-pulse');
    }, 600);

    updateCartUI();
}


// Product Popup Functionality
const productPopup = document.getElementById('productPopup');
const popupImage = document.getElementById('popupImage');
const popupTitle = document.getElementById('popupTitle');
const popupPrice = document.getElementById('popupPrice');
const popupDescription = document.getElementById('popupDescription');
const closePopup = document.querySelector('.close-popup');
const addToCartPopup = document.querySelector('.add-to-cart-popup');
const buyNowPopup = document.querySelector('.buy-now-popup');

let currentProduct = null;

// Open popup when clicking on product card
document.addEventListener('click', function (e) {
    const card = e.target.closest('.card');
    if (card && !e.target.closest('#add_to_cart') && !e.target.closest('#buy_now')) {
        const title = card.querySelector('h3').textContent;
        const product = products.find(p => p.title === title);
        currentProduct = product;

        // Set popup content
        popupImage.src = product.image;
        popupTitle.textContent = product.title;
        popupPrice.textContent = `$${product.price.toFixed(2)}`;
        popupDescription.textContent = product.description;
        buyNowPopup.href = product.link;

        // Show popup
        productPopup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
});

// Close popup
closePopup.addEventListener('click', () => {
    productPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close when clicking outside popup
productPopup.addEventListener('click', (e) => {
    if (e.target === productPopup) {
        productPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Add to cart from popup
addToCartPopup.addEventListener('click', () => {
    if (currentProduct) {
        addToCart(
            currentProduct.title,
            currentProduct.image,
            currentProduct.price
        );
        triggerCartAnimation();

        // Optional: Close popup after adding to cart
        // productPopup.classList.remove('active');
        // document.body.style.overflow = 'auto';
    }
});


//                  SEARCH FILTER
// Add these properties to your products array
products.forEach((product, index) => {
    product.category = [
        "electronics",
        "sports",
        "fashion",
        "home",
        "beauty"
    ][index % 5];
    product.price = Math.floor(Math.random() * 180) + 20; // $20-$200
});

// Filtering functionality
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const activeFilters = document.createElement('div');
activeFilters.className = 'active-filters';
document.querySelector('.best_sellers-section').prepend(activeFilters);

let currentFilters = {
    searchQuery: '',
    category: 'all',
    maxPrice: 200
};

// Update price display
priceRange.addEventListener('input', () => {
    currentFilters.maxPrice = parseInt(priceRange.value);
    priceValue.textContent = `Up to $${currentFilters.maxPrice}`;
    filterProducts();
});

// Filter event listeners
searchInput.addEventListener('input', (e) => {
    currentFilters.searchQuery = e.target.value.toLowerCase();
    filterProducts();
});

categoryFilter.addEventListener('change', (e) => {
    currentFilters.category = e.target.value;
    filterProducts();
});

// Main filtering function
function filterProducts() {
    const filtered = products.filter(product => {
        // Search query filter
        const matchesSearch =
            product.title.toLowerCase().includes(currentFilters.searchQuery) ||
            product.description.toLowerCase().includes(currentFilters.searchQuery);

        // Category filter
        const matchesCategory =
            currentFilters.category === 'all' ||
            product.category === currentFilters.category;

        // Price filter
        const matchesPrice = product.price <= currentFilters.maxPrice;

        return matchesSearch && matchesCategory && matchesPrice;
    });

    displayFilteredProducts(filtered);
    updateActiveFilters();
}

// Display filtered products
function displayFilteredProducts(filteredProducts) {
    container.innerHTML = '';

    if (filteredProducts.length === 0) {
        container.innerHTML = `
      <div class="no-results">
        <h3>No products found</h3>
        <p>Try adjusting your search or filters</p>
        <button id="resetFilters">Reset Filters</button>
      </div>
    `;

        document.getElementById('resetFilters').addEventListener('click', resetFilters);
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="card-body">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="price">$${product.price.toFixed(2)}</div>
        <div class="buttons">
          <a href="${product.link}" id="buy_now" target="_blank">Buy Now</a>
          <div id="add_to_cart" class="cart-icon-wrapper" title="Add to cart">
            <img src="img asset/shopping-cart.png" alt="Add to cart">
          </div>      
        </div>
      </div>
    `;
        container.appendChild(card);
    });
}

// Update active filters display
function updateActiveFilters() {
    activeFilters.innerHTML = '';

    if (currentFilters.searchQuery) {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `Search: "${currentFilters.searchQuery}"`;
        activeFilters.appendChild(tag);
    }

    if (currentFilters.category !== 'all') {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `Category: ${currentFilters.category}`;
        activeFilters.appendChild(tag);
    }

    if (currentFilters.maxPrice < 200) {
        const tag = document.createElement('div');
        tag.className = 'filter-tag';
        tag.innerHTML = `Max Price: $${currentFilters.maxPrice}`;
        activeFilters.appendChild(tag);
    }
}

// Reset all filters
function resetFilters() {
    searchInput.value = '';
    categoryFilter.value = 'all';
    priceRange.value = 200;
    priceValue.textContent = 'Up to $200';

    currentFilters = {
        searchQuery: '',
        category: 'all',
        maxPrice: 200
    };

    filterProducts();
}

// Initialize with all products
filterProducts();

// Smooth scrolling for navigation
document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });

            // Update URL without page reload
            history.pushState(null, null, targetId);
        }
    });
});