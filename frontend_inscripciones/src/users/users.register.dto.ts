export class UserRegisterDto {

    private dni: string;
    private cuil: string;
    private lastName: string;
    private firstName: string;
    private nacimiento: string;
    private email: string;
    private revista: string;
    private nivel: string;
    



    constructor(
        $dni: string,
        $cuil: string,
        $firstName: string,
        $lastName: string,
        $nacimiento: string,
        $email:string,
        $nivel: string,
        $revista: string,
    
      
    ) {
        this.dni = $dni;
        this.cuil = $cuil;
        this.firstName = $firstName;
        this.lastName = $lastName;
        this.nacimiento = $nacimiento;
        this.email = $email;
        this.nivel = $nivel;
        this.revista= $revista;
     

    }

    /**
    * Getter and Setter $dni
    */
    public get $dni(): string {
        return this.dni;
    }
    public set $dni(value: string) {
        this.dni = value;
    }

    /**
     * Getter and Setter $email
     */
    public get $email(): string {
        return this.email;
    }
    public set $email(value: string) {
        this.email = value;
    }

    public get $cuil(): string {
        return this.cuil;
    }
    public set $cuil(value: string) {
        this.cuil = value;
    }

    public get $nacimiento(): string {
        return this.nacimiento;
    }
    public set $nacimiento(value: string) {
        this.nacimiento = value;
    }
     /*  Getter and Setter $firstName */
     
    public get $firstName(): string {
        return this.firstName;
    }
    public set $firstName(value: string) {
        this.firstName = value;
    }

    /**
     * Getter and Setter $lastName
     */
    public get $lastName(): string {
        return this.lastName;
    }
    public set $lastName(value: string) {
        this.lastName = value;
    }

    public get $nivel(): string {
        return this.nivel;
    }
    public set $nivel(value: string) {
        this.lastName = value;
    }

    public get $revista(): string {
        return this.lastName;
    }
    public set $revista(value: string) {
        this.lastName = value;
    }


  


    
    /**
     * Getter and Setter $gender
     */
    


}