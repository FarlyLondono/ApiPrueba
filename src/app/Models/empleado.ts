export class empleado{
    constructor(

        public Sede:string,
        public Cesantias:string,
        public Proceso:string,
        public Gerencia:string,
        public Banner:string,
        public FechaIngreso:Date,
        public Clave:string,
        public Estado:number,
        public Disponibilidad:number
    
    ){}
   
    formatarName(){
        this.Sede.replace(' ', '')
    }

}

export class RestigerEmpleado{
    constructor( 
        public Sede:string,
        public Cesantias:string,
        public Proceso:string,
        public Gerencia:string,
        public Banner:string,
        public FechaIngreso:Date,
        public Clave:string,
        public Estado:number,
        public Disponibilidad:number
    
    ){}
   
    formatarName(){
        this.Sede.replace(' ', '')
    }

}