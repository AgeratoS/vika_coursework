import {Formik} from 'formik';
import {Student} from "../../models";
import React from "react";
import {Button, FormControl, Input, InputLabel} from "@mui/material";

type AddStudentFormProps = {
    onSubmit: (values: Omit<Student, 'id'>) => void;
};

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onSubmit }) =>
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            middleName: ''
        }}
        onSubmit={onSubmit}
    >
        {({ handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel>Фамилия</InputLabel>
                    <Input
                        name={'lastName'}
                        onChange={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Имя</InputLabel>
                    <Input
                        name={'firstName'}
                        onChange={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Отчество</InputLabel>
                    <Input
                        name={'middleName'}
                        onChange={handleChange('middleName')}
                        onBlur={handleBlur('middleName')}
                    />
                </FormControl>
                <Button type="submit">Добавить пользователя</Button>
            </form>
        )}
    </Formik>;

export default AddStudentForm;
