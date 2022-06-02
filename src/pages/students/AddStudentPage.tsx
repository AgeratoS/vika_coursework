import {BaseLayout} from "../../components/layout";
import AddStudentForm from "../../components/student/AddStudentForm";
import {useMutation, useQuery} from "@apollo/client";
import {students, disciplines} from "../../queries";
import {useNavigate} from "react-router-dom";
import {Alert, CircularProgress} from "@mui/material";

const AddStudentPage = () => {

    const { data, loading, error: dropdownError } = useQuery(disciplines.GET_DISCIPLINES);
    const [addStudent, { error }] = useMutation(students.CREATE_STUDENT)
    const navigate = useNavigate();

    return loading ? <CircularProgress /> : <BaseLayout>
        <AddStudentForm disciplinesList={data.disciplinesList.items} onSubmit={async (values) => {
            // @ts-ignore
            const newValue = {...values, mark: {create: {...values.mark.create, mark: parseInt(values.mark.create.mark)}}};
            await addStudent({ variables: { data: newValue} });
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
