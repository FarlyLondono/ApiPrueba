export class user{
    constructor( 
        public Nombres:string,
        public Apellidos:string,
        public email:string,
        public password:string,
        public Estado:number,
    
    ){}
   
    formatarName(){
        this.Nombres.replace(' ', '')
    }

}

export class RestigerUser{
    constructor( 
        public Nombres:string,
        public Apellidos:string,
        public email:string,
        public password:string,
        public Estado:string,
    
    ){}
   
    formatarName(){
        this.Nombres.replace(' ', '')
    }

}