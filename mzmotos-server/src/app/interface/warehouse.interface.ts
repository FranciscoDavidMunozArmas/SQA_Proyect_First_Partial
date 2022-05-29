import { Document } from "mongoose"

export interface Warehouse extends Document {
    _id?: string,
    userid:string,
    ci: string,
    name: string,
    surname: string,
    address: string,
    phone: string,
    email: string
}

export const warehouseConverter = {
    convertJSON: (json: any) => {
        return {
            _id: json._id,
            userid: json.userid,
            ci: json.ci,
            username: json.username,
            name: json.name,
            surname: json.surname,
            address: json.address,
            phone: json.phone,
            email: json.email
        }
    }
}