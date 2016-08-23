import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const profiles = [{
    id: "mushangi-derrick",
    firstName: "Mushangi",
    lastName: "Derrick",
    location: "Nairobi, Kenya",
    biography: "This Mushangi's bio.",
    avatar: "url to avatar"
}, {
    id: "kioko-philip",
    firstName: "Kioko",
    lastName: "Philip",
    location: "Nairobi, Kenya",
    biography: "This Kioko's bio.",
    avatar: "url to avatar"
}, {
    id: "mwas-joel",
    firstName: "Mwas",
    lastName: "Joel",
    location: "Mombasa, Kenya",
    biography: "This Mwas's bio.",
    avatar: "url to avatar"
}];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
    return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

class ProfileApi {
    static getAllProfiles() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], profiles));
            }, delay);
        });
    }

    static saveProfile(profile) {
        profile = Object.assign({}, profile); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minUserNameLength = 3;
                if (profile.firstName.length < minUserNameLength) {
                    reject(`Firstname must be at least ${minUserNameLength} characters.`);
                }

                if (profile.lastName.length < minUserNameLength) {
                    reject(`Lastname must be at least ${minUserNameLength} characters.`);
                }

                if (profile.id) {
                    const existingProfileIndex = profiles.findIndex(a => a.id == profile.id);
                    profiles.splice(existingProfileIndex, 1, profile);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new profiles in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    profile.id = generateId(profile);
                   // profile.watchHref = `http: //www.pluralsight.com/profiles/${profile.id}`;
                    profiles.push(profile);
                }

                resolve(profile);
            }, delay);
        });
    }

    static deleteProfile(profileId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfProfileToDelete = profiles.findIndex(profile => {
                    profile.id == profileId;
                });
                profiles.splice(indexOfProfileToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default ProfileApi;
