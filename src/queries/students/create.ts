import {gql} from "@apollo/client";

const CREATE_STUDENT = gql`
mutation MyMutation($data: StudentCreateInput!){
  studentCreate(data: $data) {
    firstName
    lastName
    middleName
  }
}
`;

export default CREATE_STUDENT;
