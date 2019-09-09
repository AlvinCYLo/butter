import { colors } from '@atlaskit/theme';

const initialData = {
  activities: {
    'Playland': {
      id: 'Playland',
      name: 'Playland',
      time: 5,
      type: 'Play',
      image: './playland.jpg',
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
          typeColor: {
              soft: colors.B50,
              hard: colors.B200
          }
      },
  },
  columns: {
    'activitiesList': {
      id: 'activitiesList',
      title: 'activitiesList',
      activitiesIds: ['Playland']
    },
    'schedule': {
      id: 'schedule',
      title: 'schedule',
      activitiesIds: ['Ramen']
    },
  },
  columnOrder: ['activitiesList', 'schedule'],
};

export default initialData;