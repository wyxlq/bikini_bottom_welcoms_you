import ArchiveList from '@/views/Archive/List/List'; // 档案列表
import ArchiveDetail from '@/views/Archive/Detail/Detail'; // 档案详情
import InterviewRoomDetail from '@/views/InterviewRoom/Detail/Detail'; // 面试间详情
import OralExaminationQuestionList from '@/views/Question/OralExamination/List/List'; // 口试题列表
import OralExaminationQuestionDetail from '@/views/Question/OralExamination/Detail/Detail'; // 口试题详情
import OralExaminationQuestionForm from '@/views/Question/OralExamination/Form/Form'; // 口试题表单
import WrittenExaminationQuestionList from '@/views/Question/WrittenExamination/List/List'; // 笔试题列表
import WrittenExaminationQuestionDetail from '@/views/Question/WrittenExamination/Detail/Detail'; // 笔试题详情
import WrittenExaminationQuestionForm from '@/views/Question/WrittenExamination/Form/Form'; // 笔试题表单

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'interview-room/detail',
    Component: InterviewRoomDetail,
    routes: [
      {
        path: ':interviewRoomCode',
        Component: InterviewRoomDetail,
      },
    ],
  },
  {
    path: 'archive',
    Component: ArchiveList,
    routes: [
      {
        path: 'list',
        Component: ArchiveList,
      },
      {
        path: 'detail',
        Component: ArchiveDetail,
        routes: [
          {
            path: ':archiveId',
            Component: ArchiveDetail,
          },
        ],
      },
    ],
  },
  {
    path: 'question/oral-examination',
    Component: OralExaminationQuestionList,
    routes: [
      {
        path: 'list',
        Component: OralExaminationQuestionList,
      },
      {
        path: 'detail',
        Component: OralExaminationQuestionDetail,
        routes: [
          {
            path: ':questionId',
            Component: OralExaminationQuestionDetail,
          },
        ],
      },
      {
        path: 'form',
        Component: OralExaminationQuestionForm,
        routes: [
          {
            path: ':questionId',
            Component: OralExaminationQuestionForm,
          },
        ],
      },
    ],
  },
  {
    path: 'question/written-examination',
    Component: WrittenExaminationQuestionList,
    routes: [
      {
        path: 'list',
        Component: WrittenExaminationQuestionList,
      },
      {
        path: 'detail',
        Component: WrittenExaminationQuestionDetail,
        routes: [
          {
            path: ':questionId',
            Component: WrittenExaminationQuestionDetail,
          },
        ],
      },
      {
        path: 'form',
        Component: WrittenExaminationQuestionForm,
        routes: [
          {
            path: ':questionId',
            Component: WrittenExaminationQuestionForm,
          },
        ],
      },
    ],
  },
];

export default routes;
