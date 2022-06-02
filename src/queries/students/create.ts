import {gql} from "@apollo/client";

const CREATE_STUDENT = gql`
mutation MyMutation($data: StudentCreateInput!){
  studentCreate(data: $data) {
    firstName
    lastName
    middleName
    mark {
      items {
        discipline {
          name
        }
        name
        mark
      }
    }
  }
}
`;

export default CREATE_STUDENT;
