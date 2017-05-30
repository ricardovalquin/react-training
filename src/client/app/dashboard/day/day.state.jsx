import Day from './Day.component.jsx'

const dayState = {
  name: 'dashboard.day',
  url: '/:day',
  views: {
    'dashboard': Day
  },
  params: {
    day: 'monday'
  },
};

export default dayState;