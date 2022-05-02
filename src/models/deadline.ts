import {PrimaryKey} from "../types";
import ForeignKey from "../types/foreignKey";

type Deadline = {
    id: PrimaryKey;
    name: string;
    start: Date;
    end: Date;
    disciplineId: ForeignKey;
}

export default Deadline;
