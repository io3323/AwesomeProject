import React from 'react';
import renderer from 'react-test-renderer';
import {HeaderComponent} from './HeaderComponent';

test('HeaderComponent renders correctly', () => {
  const tree = renderer
    .create(
      <HeaderComponent
        selectBrand={{brandId: 1, brandName: 'Toyota'}}
        setSettingsModalVisible={() => {}}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
