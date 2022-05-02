import {ForeignKey, PrimaryKey, Grade} from "../types";

type Mark = {
    id: PrimaryKey;
    deadlineId: ForeignKey;
    studentId: ForeignKey;
    mark: Grade;
    workId: ForeignKey;
};

export default Mark;
