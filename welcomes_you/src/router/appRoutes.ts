import Location from '@/views/App/Location/Location';
import LocationDetail from '@/views/App/Location/Detail/Detail';
import Question from '@/views/App/Question/Question';
import Interview from '@/views/App/Question/Interview/Interview';
import WrittenExamination from '@/views/App/Question/WrittenExamination/WrittenExamination';

import { BaseRoutes } from '@/types/index.d';

const routes: BaseRoutes = [
  {
    path: 'location',
    title: '比奇堡',
    showInMenu: true,
    Component: Location,
  },
  {
    path: 'location/detail/:locationCode',
    Component: LocationDetail,
  },
  {
    path: 'question',
    title: '题目',
    showInMenu: true,
    Component: Question,
  },
  {
    path: 'question/interview',
    title: '面试题',
    showInMenu: true,
    Component: Interview,
  },
  {
    path: 'question/written-examination',
    title: '笔试题',
    showInMenu: true,
    Component: WrittenExamination,
  },
];

export default routes;
