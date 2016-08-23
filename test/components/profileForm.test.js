import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import ProfileForm from '../../src/components/profiles/ProfileForm';

function setUp(saving) {
   let props = {
        profile: {}, saving: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<ProfileForm {...props} />);
}

describe('ProfileForm', function() {
    it('renders form and h1', () => {
        const wrapper = setUp(false);

        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('span').text()).toEqual('Manage Profile');
    });

    it('labels save button "Save" when not saving', () => {
        const wrapper = setUp(false);

        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('labels save button "Saving..." when saving', () => {
        const wrapper = setUp(true);

        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});
