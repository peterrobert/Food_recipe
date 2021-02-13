import { FETCH_GROUP } from "../Types/groupTypes";
import groupReducer from "./groupReducer";

describe('Category reducer', () => {

    it('should return an object with loading true', () => {

         const categories = {
            loading: true,
            data: [],
            error: ''
        }

        const newState = groupReducer(undefined, {
            types: FETCH_GROUP,
            payload: categories
        })

        expect(newState).toEqual(categories)
        
    });

      
});
