import React from "react";
import {Autocomplete, TextField} from "@mui/material";
import {Student} from "../../models";
import toAutocompleteView from "../../utils/toAutocompleteView";

type AutocompleteFieldProps = {
    students: Student[] | undefined;
}

const AutocompleteField: React.FC<AutocompleteFieldProps> = ({ students }) => (
    <Autocomplete
        renderInput={(params => <TextField {...params} />)}
        options={
            toAutocompleteView<Student>(students,
                ({firstName, lastName, middleName}) => `${lastName} ${firstName} ${middleName}`
            )
        }
    />
);

export default AutocompleteField;
