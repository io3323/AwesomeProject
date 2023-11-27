import React from 'react';
import renderer from 'react-test-renderer';
import {CarsCard} from './CarsCard';

test('CarsCard Component', () => {
  // Mock props
  const props = {
    id: 1,
    model: 'Test Model',
    year: 2023,
    engine: '2.0L Turbocharged',
    transmission: 'Automatic',
    price: '$25,000',
    color: 'Red',
    topSpeed: '200 km/h',
    sectionNum: 1,
    setSelectedId: jest.fn(),
    setMoreInfoModalVisible: jest.fn(),
  };

  // Render the component
  const component = renderer.create(<CarsCard {...props} />);

  // Get the JSON representation of the component
  const tree = component.toJSON();

  // Expect the component to match the snapshot
  expect(tree).toMatchSnapshot();

  // Simulate press
  tree.props.onPress();

  // Ensure that setSelectedId and setMoreInfoModalVisible were called with the correct parameters
  expect(props.setSelectedId).toHaveBeenCalledWith(props.id);
  expect(props.setMoreInfoModalVisible).toHaveBeenCalledWith(true);
});
