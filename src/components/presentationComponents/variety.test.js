import { React } from "react";
import { shallow } from "enzyme";
import Variety from "./Category";

describe('Variety Component', () => {

    it('should render an image without errors', () => {
        const container = shallow( <Variety /> );
        const renderContainer = container.find('.card-img-top');
        expect(renderContainer.length).toEqual(1); 
    });
    
    it('should render a button without errors', () => {
        const container = shallow(  <Variety /> );
        const renderContainer = container.find('.btn');
        expect(renderContainer.length).toEqual(1); 
    });

    it('should render a title without errors', () => {
        const container = shallow( <Variety /> );
        const renderContainer = container.find('.card-title');
        expect(renderContainer.length).toEqual(1); 
    });
    
});
