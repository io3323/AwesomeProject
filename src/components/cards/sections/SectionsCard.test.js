import React from 'react';
import renderer from 'react-test-renderer';
import {BrandsCard} from './BrandsCard';

test('BrandsCard Component', () => {
  // Mock props
  const props = {
    brandId: 1,
    brandName: 'Test Brand',
    selectBrand: {brandId: 1, brandName: 'Test Brand'},
    setSelectBrand: jest.fn(),
  };

  // Render the component
  const component = renderer.create(<BrandsCard {...props} />);

  // Get the JSON representation of the component
  const tree = component.toJSON();

  // Expect the component to match the snapshot
  expect(tree).toMatchSnapshot();

  // Simulate press
  tree.props.onPress();

  // Ensure that setSelectBrand was called with the correct parameters
  expect(props.setSelectBrand).toHaveBeenCalledWith(
    props.brandId === props.selectBrand.brandId
      ? {}
      : {brandId: props.brandId, brandName: props.brandName},
  );
});
