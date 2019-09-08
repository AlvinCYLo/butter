import { colors } from '@atlaskit/theme';

const initialData = {
  activities: {
    'Playland': {
      id: 'Playland',
      name: 'Playland',
      time: 5,
      type: 'Play',
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
          typeColor: {
              soft: colors.B50,
              hard: colors.B200
          }
      },
  },
  columns: {
    'column-1': {
      id: 'activitiesList',
      title: 'activitiesList',
      activitiesIds: ['Playland']
    },
    'column-2': {
      id: 'schedule',
      title: 'schedule',
      activitiesIds: ['Ramen']
    },
  },
  columnOrder: ['column-1', 'column-2'],
};

export default initialData;