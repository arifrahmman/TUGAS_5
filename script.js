Vue.component('navbar-component', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Toko Online</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Produk</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tentang</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kontak</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
});

Vue.component('carousel-component', {
    template: `
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    `
});

Vue.component('product-card', {
    props: ['product'],
    template: `
        <div class="col-md-4">
            <div class="card">
                <img :src="product.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <p class="card-text">{{ product.description }}</p>
                    <a href="#" class="btn btn-primary">Beli Sekarang</a>
                </div>
            </div>
        </div>
    `
});

Vue.component('product-list', {
    data() {
        return {
            products: [
                { name: 'Produk 1', description: 'Deskripsi Produk 1', image: 'https://via.placeholder.com/150' },
                { name: 'Produk 2', description: 'Deskripsi Produk 2', image: 'https://via.placeholder.com/150' },
                { name: 'Produk 3', description: 'Deskripsi Produk 3', image: 'https://via.placeholder.com/150' }
            ]
        };
    },
    template: `
        <div class="container mt-4">
            <div class="row">
                <product-card v-for="product in products" :key="product.name" :product="product"></product-card>
            </div>
        </div>
    `
});

Vue.component('footer-component', {
    template: `
        <footer>
            <p>&copy; 2024 Toko Online. All rights reserved.</p>
        </footer>
    `
});

new Vue({
    el: '#app'
});
