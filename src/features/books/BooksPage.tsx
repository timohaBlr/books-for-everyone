import React from "react";
import useAppSelector from "../../common/hooks/useAppSelector";
import {selectTotalCount} from "./selectors";
import NothingWasFound from "../../common/components/FoundedResults/NothingWasFound";
import {Books} from "./Books";

export const BooksPage = () => {
    const totalItems = useAppSelector(selectTotalCount)


    return (
        <div>
            {!!totalItems && <Books/>}
            {!totalItems && <NothingWasFound/>}
        </div>
    )
}