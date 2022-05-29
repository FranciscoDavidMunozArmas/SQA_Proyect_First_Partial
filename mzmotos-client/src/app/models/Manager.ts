export class Manager{
    _id?: string;
    userid:string;
    ci: string;
    name: string;
    surname: string;
    address: string;
    phone: string;
    email: string;

    constructor(userid:string, ci:string, name: string, surname: string, address: string, phone: string, email: string, id?: string) {
        this.userid = userid;
        this.ci = ci;
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this._id = id;
    }
}

export const managerConverter = {
    fromJSON: (json: any): Manager => {
        return new Manager(json.userid, json.ci, json.name, json.surname, json.address, json.phone, json.email, json._id);
    },
    toJSON: (manager: Manager): any => {
        return {
            userid: manager.userid,
            ci: manager.ci,
            name: manager.name,
            surname: manager.surname,
            address: manager.address,
            phone: manager.phone,
            email: manager.email,
            _id: manager._id
        };
    }
}