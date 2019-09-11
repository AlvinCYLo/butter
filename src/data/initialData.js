import { colors } from '@atlaskit/theme';
// onclick on tab should zoom to locatio on map
const initialData = {
  availableActivities: {
    'Playland': {
      id: 'Playland',
      name: 'Playland',
      time: 5,
      type: 'Play',
      image: './playland.jpg',
      url: 'https://google.com',
      typeColor: {
        soft: colors.Y50,
        hard: colors.Y200
        }
    },
      'Ramen': {
          id: 'Ramen',
          name: 'Ramen',
          time: 2,
          type: 'Eat',
          image: './playland.jpg',
          url: 'https://google.com',
          typeColor: {
              soft: colors.B50,
              hard: colors.B200
          }
      },
      'Volleyball': {
          id: 'Volleyball',
          name: 'Volleyball',
          time: 3,
          type: 'Play',
          image: './playland.jpg',
          url: 'https://google.com',
          typeColor: {
              soft: colors.Y50,
              hard: colors.Y200
          }
      },
  },
  Planner: {
    'ActivityList': {
      id: 'ActivityList',
      title: 'ActivityList',
      activityIds: ['Playland', 'Ramen', 'Volleyball']
    },
    'Agenda': {
      id: 'Agenda',
      title: 'Agenda',
      activityIds: []
    },
  },
  columnOrder: ['ActivityList', 'Agenda'],
};

export default initialData;