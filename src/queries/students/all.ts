import {gql} from "@apollo/client";

const GET_STUDENTS = gql`
    query {
  studentsList {
    items {
      firstName
      lastName
      middleName
    }
  }
}
`;

export default GET_STUDENTS;
