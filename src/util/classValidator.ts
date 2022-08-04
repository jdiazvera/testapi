import { User } from "../models/user";
import { IsNotEmpty, Min, IsNumber, IsString, IsBoolean, IsEmail, isNotEmpty, Length} from "class-validator";

export class ValidatorUser{
    @IsNotEmpty()
    private readonly login: string;
    @IsString()
    private readonly name: string;
    @IsEmail()
    private readonly email: string;
    @Min(8)
    private readonly password: string;
    @IsBoolean()
    private readonly surname: string;
    @IsString()
    private readonly addres: string;
    @IsNumber()
    private readonly postalcode: number;
    @IsString()
    private readonly location: string;
    @IsString()
    private readonly state: string;
    @IsNumber()
    private readonly phone: number;
    @IsString()
    private readonly bank_account: string;


    constructor(obj:User){
        obj.login = obj.login,
        obj.name = obj.name,
        obj.email = obj.email,
        obj.password = obj.password,
        obj.surname = obj.surname,
        obj.addres = obj.addres,
        obj.postalcode = obj.postalcode,
        obj.location = obj.location,
        obj.state = obj.state,
        obj.phone = obj.phone,  
        obj.bank_account = obj.bank_account
    }
}