import { React } from "react";
import { shallow } from "enzyme";
import RecipeDisplay from "./RecipeDisplay";


const setUp = (props={}) => {

    const component = shallow( <RecipeDisplay {...props}/> );
    return component

}

describe('RecipeDisplayComponent', () => {


  it('should render without error', () => {

      
  });
  
    
});

