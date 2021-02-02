import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

const rows = [
  {
    name1: 'Mads L. Klausen',
    email: 'MadsLKlausen@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 1
  },
  {
    name1: 'Alfred K. Krogh',
    email: 'AlfredKKrogh@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 2
  },
  {
    name1: 'Silas L. Bertelsen',
    email: 'SilasLBertelsen@armyspy.com',
    edit_path: 'http://google.com',
    per_id: 3
  },
  {
    name1: 'Mia A. Johnsen',
    email: 'MiaAJohnsen@dayrep.com',
    edit_path: 'http://google.com',
    per_id: 4
  },
  {
    name1: 'Alfred S. Schou',
    email: 'AlfredSSchou@jourrapide.com',
    edit_path: 'http://google.com',
    per_id: 5
  }
];

it('renders without crashing', () => {
  shallow(<App rows={[]} locale="da" rowsPerPage={5} />);
});

it('renders 5 rows', () => {
  const wrapper = mount(<App rows={rows} locale="da" rowsPerPage={5} />);

  expect(wrapper.find('tr').length).toBe(5);
});

it('filters rows based on input', () => {
  const wrapper = mount(<App rows={rows} locale="da" rowsPerPage={5} />);

  wrapper.find('input').simulate('change', { target: { value: 'k' } });

  expect(wrapper.find('tr').length).toBe(2);
});
