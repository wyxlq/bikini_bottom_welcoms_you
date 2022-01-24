import { BaseLocations } from '@/types/index.d';

const locations: BaseLocations = [
  {
    code: 'Pineapple_House',
    name: '菠萝屋',
    isInUse: false,
    userIds: [],
  },
  {
    code: 'Rock_House',
    name: '石头屋',
    isInUse: false,
    userIds: [],
  },
  {
    code: 'Easter_Island_Head_House',
    name: '复活岛人像屋',
    isInUse: false,
    userIds: [],
  },
  {
    code: 'Treedome',
    name: '圆顶树屋',
    isInUse: false,
    userIds: [],
  },
  {
    code: 'Anchor_House',
    name: '船锚屋',
    isInUse: false,
    userIds: [],
  },
  {
    code: 'Krusty_Krab',
    name: '蟹堡王餐厅',
    isInUse: true,
    userIds: [4],
  },
  {
    code: 'Chum_Bucket',
    name: '海之霸餐厅',
    isInUse: false,
    userIds: [],
  },
  {
    code: "Mrs._Puff's_Boating_School",
    name: '泡芙老师的海底驾驶训练班',
    isInUse: true,
    userIds: [3],
  },
  {
    code: 'Shady_Shoals_Rest_Home',
    name: '沙沙礁岩安养中心',
    isInUse: true,
    userIds: [5, 6],
  },
  {
    code: 'Jellyfish_Fields',
    name: '水母田',
    isInUse: true,
    userIds: [1, 2],
  },
  {
    code: 'Goo_Lagoon',
    name: '酷乐湖',
    isInUse: false,
    userIds: [],
  },
];

export default locations;
