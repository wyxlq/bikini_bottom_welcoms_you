import InterviewRecordList from '@/views/InterviewRecord/List/List'; // 面试记录列表
import InterviewRecordDetail from '@/views/InterviewRecord/Detail/Detail'; // 面试记录详情
import InterviewRoomDetail from '@/views/InterviewRoom/Detail/Detail'; // 面试间详情
import InterviewRoomForm from '@/views/InterviewRoom/Form/Form'; // 面试间表单
// import OralExaminationQuestionList from '@/views/Question/OralExamination/List/List'; // 口试题列表
// import OralExaminationQuestionDetail from '@/views/Question/OralExamination/Detail/Detail'; // 口试题详情
// import OralExaminationQuestionForm from '@/views/Question/OralExamination/Form/Form'; // 口试题表单
// import WrittenExaminationQuestionList from '@/views/Question/WrittenExamination/List/List'; // 笔试题列表
// import WrittenExaminationQuestionDetail from '@/views/Question/WrittenExamination/Detail/Detail'; // 笔试题详情
// import WrittenExaminationQuestionForm from '@/views/Question/WrittenExamination/Form/Form'; // 笔试题表单

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'interview-record',
    routes: [
      {
        path: 'list',
        Component: InterviewRecordList,
      },
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
    ],
  },
  {
    path: 'interview-room',
    routes: [
      {
        path: 'detail',
        Component: InterviewRoomDetail,
        routes: [
          {
            path: ':roomId',
            Component: InterviewRoomDetail,
          },
        ],
      },
      {
        path: 'form',
        Component: InterviewRoomForm,
      },
    ],
  },
  // {
  //   path: 'question/oral-examination',
  //   Component: OralExaminationQuestionList,
  //   routes: [
  //     {
  //       path: 'list',
  //       Component: OralExaminationQuestionList,
  //     },
  //     {
  //       path: 'detail',
  //       Component: OralExaminationQuestionDetail,
  //       routes: [
  //         {
  //           path: ':questionId',
  //           Component: OralExaminationQuestionDetail,
  //         },
  //       ],
  //     },
  //     {
  //       path: 'form',
  //       Component: OralExaminationQuestionForm,
  //       routes: [
  //         {
  //           path: ':questionId',
  //           Component: OralExaminationQuestionForm,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   path: 'question/written-examination',
  //   Component: WrittenExaminationQuestionList,
  //   routes: [
  //     {
  //       path: 'list',
  //       Component: WrittenExaminationQuestionList,
  //     },
  //     {
  //       path: 'detail',
  //       Component: WrittenExaminationQuestionDetail,
  //       routes: [
  //         {
  //           path: ':questionId',
  //           Component: WrittenExaminationQuestionDetail,
  //         },
  //       ],
  //     },
  //     {
  //       path: 'form',
  //       Component: WrittenExaminationQuestionForm,
  //       routes: [
  //         {
  //           path: ':questionId',
  //           Component: WrittenExaminationQuestionForm,
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default routes;
