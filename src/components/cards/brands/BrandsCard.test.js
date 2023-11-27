import React from 'react';
import renderer from 'react-test-renderer';
import {BrandsCard} from './BrandsCard';

test('BrandsCard Component', () => {
  // Mock props
  const brandId = 1;
  const brandName = 'BrandName';
  const selectBrand = {brandId: 1, brandName: 'SelectedBrand'};
  const setSelectBrand = jest.fn();

  // Render the component
  const component = renderer.create(
    <BrandsCard
      brandId={brandId}
      brandName={brandName}
      selectBrand={selectBrand}
      setSelectBrand={setSelectBrand}
    />,
  );

  // Get the JSON representation of the component
  const tree = component.toJSON();

  // Expect the component to match the snapshot
  expect(tree).toMatchSnapshot();

  // Simulate press
  tree.props.onPress();

  // Ensure that setSelectBrand was called with the correct parameters
  expect(setSelectBrand).toHaveBeenCalledWith(
    brandId === selectBrand.brandId ? {} : {brandId, brandName},
  );
});
