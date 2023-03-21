import * as actions from './actions'
import {InferValueTypes} from "../../app/types";

export type BooksActionsType = ReturnType<InferValueTypes<typeof actions>>