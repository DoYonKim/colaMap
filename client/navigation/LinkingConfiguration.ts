import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabMyLocation: {
            screens: {
              TabMyLocationScreen: 'one',
            },
          },
          TabMap: {
            screens: {
              TabMapScreen: 'two',
            },
          },
          TabProfile: {
            screens: {
              TabProfileScreen: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
