export class Warehouse {
    _id?: string;
    userid:string;
    ci: string;
    name: string;
    surname: string;
    address: string;
    phone: string;
    email: string;

    constructor(userid:string, ci: string, name: string, surname: string, address: string, phone: string, email: string, id?: string) {
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

export const warehouseConverter = {
    fromJSON: (json: any): Warehouse => {
        return new Warehouse(json.userid, json.ci, json.name, json.surname, json.address, json.phone, json.email, json._id);
    },
    toJSON: (warehouse: Warehouse): any => {
        return {
            userid: warehouse.userid,
            ci: warehouse.ci,
            name: warehouse.name,
            surname: warehouse.surname,
            address: warehouse.address,
            phone: warehouse.phone,
            email: warehouse.email,
            _id: warehouse._id
        };
    }
};