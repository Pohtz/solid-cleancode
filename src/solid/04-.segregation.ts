    interface Bird{
        eat(): void;

    }

    interface RunnigBird extends Bird{
        run(): void;
    }


    interface FlyingBird extends Bird{
        fly(): number;
    }

    interface SwimmingBird extends Bird{
        swim(): void;
    }

    class Tucan implements Bird, FlyingBird{

        public eat(){}
        public fly(){ return 10; }

    }


    class Humminbird implements Bird, FlyingBird{
        public fly(){return 10}
        public eat(){}

    }


    class Ostrich implements Bird, RunnigBird{
        public fly(){return 100}
        public eat(){}
        public run(){}
        public swim(){}
    }


    class Penguin implements Bird, SwimmingBird{
        public eat(){}
        public run(){}
        public swim(){}

    }