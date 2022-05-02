import {BaseLayout} from "../../components/layout";
import AddStudentForm from "../../components/student/AddStudentForm";
import {useMutation} from "@apollo/client";
import {students} from "../../queries";
import {useNavigate} from "react-router-dom";
import {Alert} from "@mui/material";

const AddStudentPage = () => {

    const [addStudent, { error }] = useMutation(students.CREATE_STUDENT)
    const navigate = useNavigate();

    return <BaseLayout>
        <AddStudentForm onSubmit={async (values) => {
            await addStudent({ variables: { data: values} });
            if (error !== undefined) {
                navigate('/students');
            }
        }}/>
        {error && <Alert severity='error'>
          Не удалось добавить пользователя по причине: {error.message}
        </Alert>
        }
    </BaseLayout>;
};

export default AddStudentPage;
