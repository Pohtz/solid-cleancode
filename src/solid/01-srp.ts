(() => {

    interface Product { 
        id:   number;
        name: string;
    }

     class ProductService {

        // private httpAdapter: Object; // No se usa, se puede eliminar o definir su tipo si se va a usar

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos
            console.log('Guardando en base de datos', product );
        }
    }   


    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

 
        private mailer: Mailer;
        private cartBloc: cartBloc;
        private products: Object [] = [];
        private productService: ProductService; // Declarar la propiedad productService

        constructor(productService: ProductService, mailer: Mailer, cartBloc: cartBloc) {
            this.productService = productService;
            this.mailer = mailer;
            this.cartBloc = cartBloc;
        }

        loadProduct(id: number) {
            // Realiza una petición para obtener los productos
            this.productService.getProduct(id);
        }

        saveProduct(product: Product) {
            this.productService.saveProduct(product);
        }

        notifyClients() {
            this.mailer.sendEmail(['client1@example.com'], 'to-clients');
        }

        // Agregar al carrito de compras
        onAddToCart(productId: number) {
            this.cartBloc.onAddToCart(productId);
        }
    }

    class Mailer {
        private masterEmail: string = 'master@shop.com';

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admin') {
            console.log('Enviando correo a los clientes', template, emailList);
        }
    }
   
    class cartBloc {
        public itemsInCart: Object [] = [];

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const cartBlocInstance = new cartBloc();
    const productBloc = new ProductBloc(productService, mailer, cartBlocInstance);
    
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);








})();