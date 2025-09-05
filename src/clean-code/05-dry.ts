type Size = ''|'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public name: string,
        public size: Size = '',
        public color: string = '',
        public price: number = 0,
    ){}  
    

    isProductReady(): boolean {    
        for ( const key in this ) {  
            switch ( typeof this[key] ) {
            
                    case 'string':
                      if ((<string><unknown>this[key]).length <= 0) throw new Error(`The field ${key} is empty`);
                    break;
                    case 'number':      
                        if ( (<number><unknown>this[key]) <= 0 ) throw new Error(`The field ${key} is zero`);
                    break;
                    default:
                        throw new Error(`${typeof this[key]} is not allowed`);
                         
                }
            }
            return true;
    }
    toString() {

        if (!this.isProductReady()) return;

        return `${this.name} ${this.size} ${this.color} ${this.price}`;
    }

}
(()=> {

       const bluePants = new Product('Pants', 'L', 'Blue', 50);
         console.log( bluePants.toString());

}
)();