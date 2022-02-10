import InterviewQuestionDetail from '@/views/InterviewQuestion/Detail/Detail';
import InterviewQuestionForm from '@/views/InterviewQuestion/Form/Form';
import InterviewQuestionList from '@/views/InterviewQuestion/List/List';
import InterviewRecordDetail from '@/views/InterviewRecord/Detail/Detail';
import InterviewRecordForm from '@/views/InterviewRecord/Form/Form';
import InterviewRecordList from '@/views/InterviewRecord/List/List';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'interview-question',
    routes: [
      {
        path: 'detail',
        Component: InterviewQuestionDetail,
        routes: [
          {
            path: ':recordId',
            Component: InterviewQuestionDetail,
          },
        ],
      },
      {
        path: 'form',
        Component: InterviewQuestionForm,
      },
      {
        path: 'list',
        Component: InterviewQuestionList,
      },
    ],
  },
  {
    path: 'interview-record',
    routes: [
      {
        path: 'detail',
        Component: InterviewRecordDetail,
        routes: [
          {
            path: ':recordId',
            Component: InterviewRecordDetail,
          },
        ],
      },
      {
        path: 'form',
        Component: InterviewRecordForm,
      },
      {
        path: 'list',
        Component: InterviewRecordList,
      },
    ],
  },
];

export default routes;
