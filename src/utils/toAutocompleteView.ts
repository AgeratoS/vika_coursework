import {PrimaryKey} from "../types";

const toAutocompleteView = <T extends {id: PrimaryKey}>
    (source: T[] | undefined, toLabelCallback: (item: T) => string) => {
    if (source === undefined) {
        return [];
    }
    else {
        return source.map((sourceItem) => (
            {
                label: toLabelCallback(sourceItem),
                id: sourceItem.id
            }
        ))
    }
}

export default toAutocompleteView;
