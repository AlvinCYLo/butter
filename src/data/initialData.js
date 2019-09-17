import { colors } from '@atlaskit/theme';

const initialData = {
  availableActivities: {
    'Playland': {
      id: 'Playland',
      name: 'Playland',
      time: 5,
      type: 'Attraction',
      address: '2901 E Hastings St, Vancouver, BC',
      typeColor: {
        soft: colors.Y50,
        hard: colors.Y200
      }
    },
    'Ramen': {
      id: 'Ramen',
      name: 'Ramen',
      time: 2,
      type: 'Food',
      address: '558 W Broadway, Vancouver, BC',
      typeColor: {
        soft: colors.B50,
        hard: colors.B200
      }
    },
    'Metrotown': {
      id: 'Metrotown',
      name: 'Metrotown at the Metropolis',
      time: 3,
      type: 'Shopping',
      url: 'https://google.com',
      address: '1 Athletes Way, Vancouver, BC',
      typeColor: {
        soft: colors.P50,
        hard: colors.P200
      }
    },
    'StanleyPark': {
      id: 'StanleyPark',
      name: 'Stanley Park',
      time: 3,
      type: 'Park',
      url: 'https://google.com',
      address: '1 Athletes Way, Vancouver, BC',
      typeColor: {
        soft: colors.T50,
        hard: colors.T200
      }
    },
    'KitsBeach': {
      id: 'KitsBeach',
      name: 'Kitsilano Beach',
      time: 5,
      type: 'Outdoor',
      url: 'https://google.com',
      address: '1 Athletes Way, Vancouver, BC',
      typeColor: {
        soft: colors.G50,
        hard: colors.G200
      }
    },
  },
  components: {
    'Activities': {
      id: 'Activities',
      title: 'Activities',
      type: 'list',
      activityIds: ['Playland', 'Metrotown', 'KitsBeach']
    },
    'Agenda': {
      id: 'Agenda',
      title: 'Agenda',
      type: 'board',
      activityIds: ['Ramen', 'StanleyPark']
    },
  },
  layout: ['Activities', 'Agenda'],
};

export default initialData;