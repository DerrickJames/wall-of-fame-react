import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { ManageProfilePage } from '../../../src/components/profiles/ManageProfilePage';

describe('Manage Profile Page', () => {
    it('sets error message when trying to save empty firstName', () => {
        const props = {
            actions: {saveProfile: () => {return Promise.resolve();}},
            profile: {id: '', firstName: '', lastName: '', email: ''}
        };
        const wrapper = mount(<ManageProfilePage {...props}/>);
        const saveButton = wrapper.find('input').last();

        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.firstName).toBe("Firstname must be at least 3 characters.");
    });
});
