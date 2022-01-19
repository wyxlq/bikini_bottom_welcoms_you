import Question from '@/views/App/Question/Question';
import Interview from '@/views/App/Question/Interview/Interview';
import WrittenExamination from '@/views/App/Question/WrittenExamination/WrittenExamination';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'question',
    Component: Question,
    routes: [
      {
        path: 'interview',
        Component: Interview,
      },
      {
        path: 'writtenExamination',
        Component: WrittenExamination,
      },
    ],
  },
];

export default routes;
