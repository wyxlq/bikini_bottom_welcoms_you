import App from '@/App';
import Login from '@/Login';
import Question from '@/views/Question/Question';
import Interview from '@/views/Question/Interview/Interview';
import WrittenExamination from '@/views/Question/WrittenExamination/WrittenExamination';

const routes = [
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/app',
    Component: App,
    children: [
      {
        path: '/question',
        Component: Question,
        children: [
          {
            path: '/interview',
            Component: Interview,
          },
          {
            path: '/writtenExamination',
            Component: WrittenExamination,
          },
        ],
      },
    ],
  },
];

export default routes;
