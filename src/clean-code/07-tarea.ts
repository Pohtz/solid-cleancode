(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        public id   : string;
        public type : HtmlType;

        constructor( { id, type }: HtmlElementProps  ){
            this.id   = id;
            this.type = type;
        }
    }   

    class InputAttributes {        
        public value        : string;
        public placeholder  : string;

        constructor({
            value,
            placeholder
            
        }: AttributesProps) {
            this.value       = value;
            this.placeholder = placeholder;
        } 
    }
    
    class InputEvents  {
        constructor( ){
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    class InputElements {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor(
            value        : string,
            placeholder  : string,
            id           : string,
             ) {
            this.html            = new HtmlElement( id, 'input' );
            this.attributes      = new InputAttributes( value, placeholder, id );
            this.events          = new InputEvents( );
        }
    }


    const nameField = new InputElements ('Fernando','Enter first name','txtName',)
    console.log({ nameField });

})()