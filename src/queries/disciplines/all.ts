import {gql} from "@apollo/client";

const GET_DISCIPLINES = gql`
   query {
       disciplinesList {
        items {
          name
        }
      }
   }
`;

export default GET_DISCIPLINES;
