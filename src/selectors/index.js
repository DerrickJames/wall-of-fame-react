export function formattedUsername(profiles) {
  return profiles.map(profile => {
    return {
      value: profile.id,
      text: profile.firstName + ' ' + profile.lastName
    };
  });
}
