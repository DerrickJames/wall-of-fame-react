import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../../src/redux/reducers';
import initialState from '../../src/redux/reducers/initialState';
import * as profileActions from '../../src/redux/actions/profileActions';

describe('Store', () => {
    it('should handle creating profiles', () => {
        // arrange
        const store = createStore(rootReducer, initialState);
        const profile = {firstName: "Mushangi", lastName: "Derrick"};

        // act
        const action = profileActions.createProfileSuccess(profile);
        store.dispatch(action);

        // assert
        const actual = store.getState().profiles[0];
        const expected = {firstName: "Mushangi", lastName: "Derrick"};

        expect(actual).toEqual(expected);
    });
});
