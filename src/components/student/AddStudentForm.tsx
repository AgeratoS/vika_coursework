import {Formik} from 'formik';
import {Student} from "../../models";
import React from "react";
import {Button, FormControl, Input, InputLabel, MenuItem, Select} from "@mui/material";

type AddStudentFormProps = {
    onSubmit: (values: Omit<Student, 'id'>) => void;
    disciplinesList: {
        name: string;
    }[];
};

const AddStudentForm: React.FC<AddStudentFormProps> = ({ onSubmit, disciplinesList }) =>
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            middleName: '',
            mark: {
                items: []
            }
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
                <FormControl>
                    <InputLabel>Наименование дисциплины</InputLabel>
                    <Select
                        name={'mark.items[0].discipline.name'}
                        onSelect={handleChange('mark.items[0].discipline.name')}
                        onBlur={handleBlur('mark.items[0].discipline.name')}
                    >
                        {disciplinesList.map(discipline => (
                            <MenuItem value={discipline.name} />
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel>Наименование работы</InputLabel>
                    <Input
                        name={'mark.name'}
                        onChange={handleChange('mark.name')}
                        onBlur={handleBlur('mark.name')}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel>Оценка</InputLabel>
                    <Input
                        name={'mark.mark'}
                        onChange={handleChange('mark.mark')}
                        onBlur={handleBlur('mark.mark')}
                    />
                </FormControl>
                <Button type="submit">Добавить пользователя</Button>
            </form>
        )}
    </Formik>;

export default AddStudentForm;
