import expect from 'expect';
import { formattedUsername } from '../../src/selectors';

describe('Username Selectors', () => {
    describe('formattedUsername', () => {
        it('should return formatted username data', () => {
            // arrange
            const profiles = [
                {id: "mushangi-derrick", firstName: "Mushangi", lastName: "Derrick"},
                {id: "kioko-philip", firstName: "Kioko", lastName: "Philip"}
            ];

            const expected = [
                {value: "mushangi-derrick", text: "Mushangi Derrick"},
                {value: "kioko-philip", text: "Kioko Philip"}
            ];

            // act
            const usernames = formattedUsername(profiles);

            // assert
            expect(usernames).toEqual(expected);
        });
    });
});
