import React from "react";
import {Alert, CircularProgress} from "@mui/material";
import {Student} from "../../models";
import {ApolloError} from "@apollo/client";

type StudentsListProps = {
    students: Student[] | null | undefined;
    loading: boolean;
    error?: ApolloError;
}

const StudentsList: React.FC<StudentsListProps> = ({ students, loading, error }) => {
    if (loading) {
        return <CircularProgress />
    }
    else if (error !== null && error !== undefined) {
        return <Alert severity='error'>Произошла ошибка при обращении к серверу: {error!.message}</Alert>
    }
    else if (students!.length === 0) {
        return <p>Студентов нет</p>
    }
    else {
        return <table>
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                </tr>
            </thead>
            <tbody>
            {students!.map((student) => (
                <tr key={student.id}>
                    <td>{student.lastName}</td>
                    <td>{student.firstName}</td>
                    <td>{student.middleName}</td>
                </tr>
            ))}
            </tbody>
        </table>
    }
}

export default StudentsList;
