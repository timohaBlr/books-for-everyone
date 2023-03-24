import React from "react";
import useAppSelector from "../../common/hooks/useAppSelector";
import {selectTotalCount} from "./selectors";
import NothingWasFound from "../../common/components/NothingWasFound/NothingWasFound";
import {BooksTable} from "./BooksTable/BooksTable";

export const Books = () => {
    const totalItems = useAppSelector(selectTotalCount)

    if(totalItems===0 ){
        return <NothingWasFound/>
    }

    return (
        <div>
            <BooksTable/>
        </div>
    )
}