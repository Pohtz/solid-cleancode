# Programación Orientada a Objetos (POO)

> Paradigma de programación basado en la construcción de sistemas mediante objetos. Un objeto combina **estado** (atributos) y **comportamiento** (métodos). Los pilares fundamentales son: **Encapsulación, Abstracción, Herencia y Polimorfismo**. Su propósito es mejorar la organización, modularidad, reuso y mantenibilidad del código.

---

### 🌳 Jerarquía de Conceptos POO

├─ 📦 **Objeto**
│  └─ *Es la unidad básica en POO.*
│     - Contiene atributos que representan su estado y métodos que definen su comportamiento.
│     - Se crea a partir de una clase (instancia).
│     - Relación: los objetos colaboran entre sí mediante mensajes (llamadas a métodos).
│
├─ 🏗️ **Clase**
│  └─ *Plantilla que define la estructura y el comportamiento común de un conjunto de objetos.*
│     - Incluye definiciones de atributos (variables de clase o de instancia) y métodos (funciones miembro).
│     - Relación: las clases encapsulan el diseño conceptual y son la base para crear objetos.
│
├─ ✨ **Instancia**
│  └─ *Manifestación concreta de una clase en memoria.*
│     - El proceso de instanciación utiliza un constructor que inicializa el objeto con un estado definido.
│     - Relación: conecta la definición abstracta de la clase con la realidad del objeto en ejecución.
│
├─ 🎨 **Atributo (Propiedad)**
│  └─ *Variable interna de un objeto que define parte de su estado.*
│     - Puede ser de tipo primitivo o referencia.
│     - Relación: los atributos se controlan mediante encapsulación y se exponen (o no) a través de métodos.
│
├─ ⚙️ **Método (Función miembro)**
│  └─ *Función asociada a una clase u objeto.*
│     - Define la lógica que un objeto puede ejecutar y cómo modifica o expone sus atributos.
│     - Tipos: constructores, destructores, getters/setters, estáticos, abstractos.
│     - Relación: son el mecanismo para interactuar con el estado del objeto y con otros objetos.
│
├─ 🛡️ **Encapsulación**
│  └─ *Principio que protege los detalles internos de un objeto.*
│     - Aísla el estado interno y controla el acceso mediante modificadores (public, private, protected).
│     - Relación: conecta directamente con atributos y métodos, garantizando integridad y seguridad.
│
├─ 🎭 **Abstracción**
│  └─ *Principio que consiste en modelar solo los aspectos esenciales de una entidad.*
│     - Se implementa mediante clases abstractas e interfaces, que definen contratos sin detalles de implementación.
│     - Relación: está ligada a encapsulación (ocultar), pero se enfoca en simplificar la visión externa de un sistema.
│
├─ 🔗 **Herencia**
│  └─ *Mecanismo para crear nuevas clases a partir de otras existentes.*
│     - Permite reutilizar código y extender funcionalidades.
│     - Tipos: simple, múltiple (según lenguaje), multinivel, jerárquica.
│     - Relación: conecta con polimorfismo (sobrescritura de métodos) y con abstracción (definir comportamientos genéricos).
│
├─ 🔄 **Polimorfismo**
│  └─ *Capacidad de que una operación o método tenga múltiples implementaciones.*
│     - Se manifiesta como sobrecarga (en tiempo de compilación) y sobrescritura (en tiempo de ejecución).
│     - Relación: depende de la herencia para sobrescribir y de la abstracción para definir comportamientos intercambiables.
│
├─ 🚦 **Modificadores de Acceso**
│  └─ *Reglas de visibilidad que controlan el alcance de atributos y métodos:*
│     - `public` → accesible desde cualquier parte del programa.
│     - `private` → accesible solo dentro de la clase.
│     - `protected` → accesible en la clase y en sus subclases.
│     - `readonly` (según lenguaje) → valor inmutable tras inicialización.
│     - Relación: son el soporte técnico para la encapsulación.
│
├─ 🤝 **Relaciones entre Clases**
│  ├─ Asociación → relación genérica donde una clase conoce a otra.
│  ├─ Agregación → relación de "tiene un", pero los objetos existen de forma independiente.
│  ├─ Composición → relación de "está compuesto de", donde la vida de los objetos está ligada.
│  └─ Dependencia → uso temporal de una clase por otra.
│     - Relación: todas estas relaciones definen el acoplamiento entre objetos y determinan el diseño estructural.
│
├─ 🌟 **Principios de calidad**
│  ├─ Cohesión alta → cada clase debe cumplir una única responsabilidad clara.
│  ├─ Acoplamiento bajo → minimizar dependencias fuertes entre clases.
│  └─ Menor exposición → exponer solo lo estrictamente necesario.
│     - Relación: son guías de diseño que refuerzan los pilares de POO y la aplicación de SOLID.
│
├─ 💎 **Principios SOLID**
│  ├─ Single Responsibility → cada clase con una sola responsabilidad.
│  ├─ Open/Closed → abierto a extensión, cerrado a modificación.
│  ├─ Liskov Substitution → las subclases deben comportarse como sus superclases.
│  ├─ Interface Segregation → preferir interfaces específicas y reducidas.
│  └─ Dependency Inversion → depender de abstracciones, no de implementaciones.
│     - Relación: extienden los principios de calidad y aplican reglas para arquitectura robusta.
│
└─ 📐 **Patrones de Diseño (Design Patterns)**
   ├─ **Creacionales** (gestionan la creación de objetos)
   │  ├─ Singleton → asegura que solo exista una instancia global.
   │  ├─ Factory Method → delega a un método la creación del objeto.
   │  ├─ Abstract Factory → crea familias de objetos relacionados.
   │  └─ Builder → construye objetos complejos paso a paso.
   │     - Relación: resuelven problemas de inicialización y flexibilidad en construcción de objetos.
   │
   ├─ **Estructurales** (organizan clases y objetos para formar sistemas más grandes)
   │  ├─ Adapter → transforma la interfaz de una clase en otra compatible.
   │  ├─ Decorator → añade responsabilidades dinámicamente sin modificar la clase base.
   │  ├─ Composite → permite tratar estructuras jerárquicas de objetos como una unidad.
   │  ├─ Proxy → proporciona un sustituto para controlar el acceso a un objeto.
   │  └─ Facade → ofrece una interfaz simplificada a un subsistema complejo.
   │     - Relación: refuerzan la abstracción y reducen el acoplamiento estructural.
   │
   └─ **Comportamiento** (definen cómo los objetos colaboran e intercambian responsabilidades)
      ├─ Strategy → encapsula algoritmos y los hace intercambiables.
      ├─ Observer → define una relación de suscripción/notificación entre objetos.
      ├─ Command → encapsula una petición como objeto para parametrizar acciones.
      ├─ State → permite que un objeto cambie de comportamiento según su estado interno.
      ├─ Iterator → proporciona acceso secuencial a los elementos de una colección.
      └─ Template Method → define la estructura de un algoritmo, dejando que subclases implementen pasos concretos.
      - Relación: estos patrones explotan herencia, polimorfismo y abstracción para coordinar la interacción dinámica.