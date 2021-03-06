import {gql} from "@apollo/client";

const GET_STUDENTS = gql`
   query {
       studentsList {
        items {
          firstName
          id
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
   }
`;

export default GET_STUDENTS;
