import {Formik} from 'formik';
import {Student} from "../../models";
import React from "react";
import {Button, FormControl, Input, InputLabel, MenuItem, Select} from "@mui/material";

type AddStudentFormProps = {
    onSubmit: (values: Omit<Student, 'id' | 'mark'>) => void;
    disciplinesList: {
        name: string;
        id: string;
    }[];
};

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onSubmit, disciplinesList }) =>
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            middleName: '',
            mark: {}
        }}
        onSubmit={onSubmit}
    >
        {({ handleSubmit, handleChange, handleBlur, setFieldValue }) => (
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
                <div>
                    <FormControl>
                    <InputLabel>Наименование дисциплины</InputLabel>
                    <Select
                        name={'mark.create.discipline.connect.id'}
                        onChange={(e) => {
                            const value = e.target.value;
                            setFieldValue('mark.create.discipline.connect.id', value);
                        }}
                        onBlur={handleBlur('mark.create.discipline.connect.id')}
                    >
                        {disciplinesList.map(discipline => (
                            <MenuItem value={discipline.id}>{discipline.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                </div>
                <FormControl>
                    <InputLabel>Наименование работы</InputLabel>
                    <Input
                        name={'mark.create.name'}
                        onChange={handleChange('mark.create.name')}
                        onBlur={handleBlur('mark.create.name')}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Оценка</InputLabel>
                    <Input
                        name={'mark.create.mark'}
                        onChange={handleChange('mark.create.mark')}
                        onBlur={handleBlur('mark.create.mark')}
                    />
                </FormControl>
                <Button type="submit">Добавить оценку</Button>
            </form>
        )}
    </Formik>;

export default AddStudentForm;
