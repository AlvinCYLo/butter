import { colors } from '@atlaskit/theme';

const initialData = {
  availableActivities: {
    'Playland': {
      id: 'Playland',
      name: 'Playland',
      time: 5,
      type: 'Play',
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
      'Volleyball': {
        id: 'Volleyball',
        name: 'Volleyball',
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
      activityIds: ['Playland', 'Volleyball']
    },
    'Planner': {
      id: 'Planner',
      title: 'Planner',
      type: 'board',
      activityIds: ['Ramen', 'StanleyPark']
    },
  },
  layout: ['Activities', 'Planner'],
};

export default initialData;