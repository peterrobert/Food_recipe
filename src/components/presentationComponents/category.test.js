import { React } from 'react';
import { shallow } from 'enzyme';
import Category from './Category';

describe('Category Component', () => {
  it('should render an image without errors', () => {
    const container = shallow(<Category />);
    const renderContainer = container.find('.card-img-top');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a button without errors', () => {
    const container = shallow(<Category />);
    const renderContainer = container.find('.btn');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a title without errors', () => {
    const container = shallow(<Category />);
    const renderContainer = container.find('.card-title');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a card without errors', () => {
    const container = shallow(<Category />);
    const renderContainer = container.find('.card');
    expect(renderContainer.length).toEqual(1);
  });

  it('should render a column without errors', () => {
    const container = shallow(<Category />);
    const renderContainer = container.find('.col-md-3');
    expect(renderContainer.length).toEqual(1);
  });
});
