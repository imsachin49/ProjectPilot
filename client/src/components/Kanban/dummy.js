export const kanbanGrid = [
    { headerText: 'To Do',
      keyField: 'Open',
      allowToggle: false },
  
    { headerText: 'In Progress',
      keyField: 'InProgress',
      allowToggle: false },
  
    { headerText: 'Testing',
      keyField: 'Testing',
      allowToggle: false,
      isExpanded: false },
  
    { headerText: 'Done',
      keyField: 'Close',
      allowToggle: false },
  ];

  export const kanbanData = [
    {
      Id: 'Task 1',
      Title: 'Adding the feedback section',
      Status: 'Open',
      Summary: 'Analyze theClassName reviews gathered from the customer.',
      Tags: 'Feedback',
      Project: 'Film Fiesta',
      Color: '#02597B',
      className: 'e-kanban',
    },
    {
      Id: 'Task 2',
      Title: 'Fixing server Bugs',
      Status: 'InProgress',
      Summary: 'Improve application performance',
      Tags: 'Improvement',
      Project: 'Film Fiesta',
      Color: '#683A68',
      className: 'e-kanban',
    },
    {
      Id: 'Task 3',
      Title: 'Integrating Chat Features',
      Status: 'InProgress',
      Summary: 'Adding the Chat Features with the team-mates',
      Tags: 'Meeting',
      Project: 'Simplex',
      Color: '#1F88E5',
      className: 'e-kanban',
    },
    {
      Id: 'Task 4',
      Title: 'Browser Issues',
      Status: 'InProgress',
      Summary: 'Fix the issues reported in the IE browser.',
      Tags: 'IE, Issues',
      Project: 'Git Prodigy',
      Color: '#E64A19',
      className: 'e-kanban',
    },
    {
      Id: 'Task 5',
      Title: 'Bug Fixing',
      Status: 'Testing',
      Summary: 'Fix the issues reported by the customer.',
      Tags: 'Customer',
      Project: 'Simplex',
      Color: '#E64A19',
      className: 'e-kanban',
    },

    {
        Id: 'Task 6',
        Title: 'Server bug Fixes',
        Status: 'Testing',
        Summary: 'Fix the issues reported by the customer.',
        Tags: 'Customer Bugs',
        Project: 'Pixel Craft',
        Color: '#E64A19',
        className: 'e-kanban',
      },
    {
      Id: 'Task 7',
      Title: 'Browser Bug',
      Status: 'Testing',
      Summary: 'Fix the issues reported in Safari browser.',
      Tags: 'Fix,Safari,Bug',
      Project: 'StreamFlow',
      Color: '#E64A19',
      className: 'e-kanban',
    },
    {
      Id: 'Task 8',
      Title: 'Testing Application',
      Status: 'Close',
      Summary: 'Test the application in the IE browser.',
      Tags: 'Review,IE',
      Project: 'ByteWave',
      Color: '#02897B',
      className: 'e-kanban',
    },
    {
      Id: 'Task 9',
      Title: 'Validation',
      Status: 'Close',
      Summary: 'Validate the issues reported by the customer.',
      Tags: 'Validation,Fix',
      Project: 'Pixel Craft',
      Color: '#02897B',
      className: 'e-kanban',
    },
  ];