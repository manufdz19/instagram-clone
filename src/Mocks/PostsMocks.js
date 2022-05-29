import POST_NETFLIX_1 from '../Assets/Posts/Netflix/netflix_1.jpg';
import POST_RM_1 from '../Assets/Posts/RealMadrid/rm_1.jpg';
import POST_RM_2 from '../Assets/Posts/RealMadrid/rm_2.jpg';
import { USERS } from './UsersMocks';

export const POSTS = [
  {
    id: 1,
    user: USERS.find((user) => user.username === 'netflixes'),
    photo: POST_NETFLIX_1,
    title:
      'En cuatro temporadas, han crecido más rápido que Dart🦎 #StrangerThings4',
    likes: 50.537,
    comments: {
      total: 5,
      comments: [],
    },
    createdAt: '2022-05-27T15:00:00.000Z',
    updatedAt: '2022-05-27T15:00:00.000Z',
  },
  {
    id: 2,
    user: USERS.find((user) => user.username === 'realmadrid'),
    photo: POST_RM_1,
    title: '👊 #APORLA14 🔜 #UCLfinal',
    likes: 80.356,
    comments: {
      total: 642,
      comments: [],
    },
    createdAt: '2022-05-28T09:00:00.000Z',
    updatedAt: '2022-05-28T09:00:00.000Z',
  },
  {
    id: 3,
    user: USERS.find((user) => user.username === 'realmadrid'),
    photo: POST_RM_2,
    title: '👀 FOCUSED. #APorLa14 | #UCLfinal',
    likes: 814.831,
    comments: {
      total: 4.093,
      comments: [],
    },
    createdAt: '2022-05-27T23:00:00.000Z',
    updatedAt: '2022-05-27T23:00:00.000Z',
  },
];
