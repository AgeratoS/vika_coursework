import { PrimaryKey } from "../types";

type Student = {
    id: PrimaryKey;
    firstName: string;
    lastName: string;
    middleName: string;
};


export default Student;
