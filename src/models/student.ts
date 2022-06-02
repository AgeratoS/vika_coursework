import { PrimaryKey } from "../types";

type Student = {
    id: PrimaryKey;
    firstName: string;
    lastName: string;
    middleName: string;
    mark: {
        items: {
           discipline: {
               name: string;
           },
           name: string;
           mark: number;
        }[];
    }
};


export default Student;
