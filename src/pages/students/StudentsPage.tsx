import React from "react";
import {BaseLayout} from "../../components/layout";
import {useQuery} from "@apollo/client";
import {students} from "../../queries";
import StudentsList from "../../components/student/StudentsList";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import AutocompleteField from "../../components/student/AutocompleteField";

const StudentsPage: React.FC = () => {

    const { data, loading, error } = useQuery(students.GET_STUDENTS);

    return (
        <BaseLayout>
            <AutocompleteField students={data?.studentsList?.items} />
            <StudentsList
                students={data?.studentsList?.items}
                loading={loading}
                error={error}
            />
            <Button component={Link} to={'/students/add'}>
                Добавить ученика
            </Button>
        </BaseLayout>
    );
}

export default StudentsPage;