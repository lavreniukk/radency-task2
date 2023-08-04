import INote from "../../types/noteInterface"

const mockNotes: INote[] = [
    {
        id: 1,
        name: 'Shopping list',
        created: '2019-01-01T00:00:00.000Z',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: '',
        isArchived: false,
    },
    {
        id: 2,
        name: 'The theory of evolution',
        created: '2019-01-01T00:00:00.000Z',
        category: 'Random Thought',
        content: 'The evolution...',
        dates: '',
        isArchived: false,
    },
    {
        id: 3,
        name: 'New feature',
        created: '2019-01-01T00:00:00.000Z',
        category: 'Idea',
        content: 'Implement new feature, I should start at 3/5/2021, deadline - 5/5/2021',
        dates: '3/5/2021, 5/5/2021',
        isArchived: false,
    },
    {
        id: 4,
        name: 'William Gaddis',
        created: '2019-01-01T00:00:00.000Z',
        category: 'Idea',
        content: 'Power doesnt corrupt people; people corrupt power.',
        dates: '',
        isArchived: false,
    },
    {
        id: 5,
        name: 'Books',
        created: '2019-01-01T00:00:00.000Z',
        category: 'Task',
        content: 'The Lean Startup',
        dates: '',
        isArchived: false,
    },
    {
        id: 6,
        name: 'Coding projects',
        created: '2019-01-01T00:00:00.000Z',
        category: 'Idea',
        content: 'Bug tracker',
        dates: '',
        isArchived: false,
    },
    {
        id: 7,
        name: 'Movies list',
        created: '2019-01-01T00:00:00.000Z',
        category: 'Task',
        content: 'I definitely should rewatch Green Mile',
        dates: '',
        isArchived: false,
    },
];

export default mockNotes;