import InterviewRoomList from '@/views/App/InterviewRoom/List/List'; // 面试间列表
import InterviewRoomDetail from '@/views/App/InterviewRoom/Detail/Detail'; // 面试间详情
import ArchiveList from '@/views/App/Archive/List/List'; // 档案列表
import ArchiveDetail from '@/views/App/Archive/Detail/Detail'; // 档案详情
import ArchiveForm from '@/views/App/Archive/Form/Form'; // 档案表单
import OralExaminationQuestionList from '@/views/App/Question/OralExamination/List/List'; // 口试题列表
import OralExaminationQuestionDetail from '@/views/App/Question/OralExamination/Detail/Detail'; // 口试题详情
import OralExaminationQuestionForm from '@/views/App/Question/OralExamination/Form/Form'; // 口试题表单
import WrittenExaminationQuestionList from '@/views/App/Question/WrittenExamination/List/List'; // 笔试题列表
import WrittenExaminationQuestionDetail from '@/views/App/Question/WrittenExamination/Detail/Detail'; // 笔试题详情
import WrittenExaminationQuestionForm from '@/views/App/Question/WrittenExamination/Form/Form'; // 笔试题表单

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'interview-room/list',
    title: '面试间',
    showInMenu: true,
    Component: InterviewRoomList,
  },
  {
    path: 'interview-room/detail/:interviewRoomCode',
    Component: InterviewRoomDetail,
  },
  {
    path: 'archive/list',
    title: '档案',
    showInMenu: true,
    Component: ArchiveList,
  },
  {
    path: 'archive/detail',
    Component: ArchiveDetail,
  },
  {
    path: 'archive/form',
    Component: ArchiveForm,
  },
  {
    path: 'question/oral-examination/list',
    title: '口试',
    showInMenu: true,
    Component: OralExaminationQuestionList,
  },
  {
    path: 'question/oral-examination/detail',
    Component: OralExaminationQuestionDetail,
  },
  {
    path: 'question/oral-examination/form',
    Component: OralExaminationQuestionForm,
  },
  {
    path: 'question/written-examination/list',
    title: '笔试',
    showInMenu: true,
    Component: WrittenExaminationQuestionList,
  },
  {
    path: 'question/written-examination/detail',
    Component: WrittenExaminationQuestionDetail,
  },
  {
    path: 'question/written-examination/form',
    Component: WrittenExaminationQuestionForm,
  },
];

export default routes;
