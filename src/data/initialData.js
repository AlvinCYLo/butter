const initialData = {
    tasks: {
        'science-world': {id: 'science-world', time: 2, content: 'tour'},
        'hokkaido-ramen-santouka': {id: 'hokkaido-ramen-santouka', time: 1, content: 'food'},
        'playland': {id: 'playland', time: 4, content: 'amusement-park'}
    },
    columns: {
        'column-1': {
            id: 'activities',
            title: 'Activities',
            taskIds: ['science-world', 'hokkaido-ramen-santouka', 'playland']
        }
    },
    columnOrder: ['column-1']
};

export default initialData;