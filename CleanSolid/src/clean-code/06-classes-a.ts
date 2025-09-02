(() => {

    // No aplicando el principio de responsabilidad única
    type Gender = "M" | "F";

    class Person {
     
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
        
    }
    
    class user extends Person {

        public lastAccess: Date;
        
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends user {
        constructor(
            public workingDirectory: string,
            public lastFolderOpen: string,
            email           : string,
            role            : string,
            name            : string,
            gender          : Gender,
            birthdate       : Date,
        ) {
            super(email, role, name, gender, birthdate);
            
        }
    }


    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'carlos@google.com',
        'Admin',
        'Carlos',
        'M',
        new Date
    )

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });

})();