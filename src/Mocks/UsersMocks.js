import AVATAR_MANU from '../Assets/Avatars/avatar_manu.jpg';
import AVATAR_IBAI from '../Assets/Avatars/avatar_ibai.jpg';
import AVATAR_RM from '../Assets/Avatars/avatar_rm.jpg';
import AVATAR_SERGIO from '../Assets/Avatars/avatar_sergio.jpg';
import AVATAR_NETFLIX from '../Assets/Avatars/avatar_netflix.jpg';
import AVATAR_GITHUB from '../Assets/Avatars/avatar_github.jpg';
import POST_MANU_1 from '../Assets/Posts/Manu/1.jpg';
import POST_MANU_2 from '../Assets/Posts/Manu/2.jpg';
import POST_MANU_3 from '../Assets/Posts/Manu/3.jpg';
import POST_MANU_4 from '../Assets/Posts/Manu/4.jpg';
import POST_MANU_5 from '../Assets/Posts/Manu/5.jpg';

export const USERS = [
  {
    id: 1,
    name: 'Manu FernΓ‘ndez',
    username: 'manufdez19',
    email: 'manufernandez1994@gmail.com',
    password: '1234',
    avatar: AVATAR_MANU,
    verified: false,
    description: `π€π» 90βs kid${'\n'}π Telematics Engineering - UPM${'\n'}π‘ Madrid${'\n'}π¦ DeersRiders${'\n'}π¦ @manufdz19`,
    followers: {
      total: 945,
      list: [],
    },
    follows: {
      total: 845,
      list: [],
    },
    posts: {
      total: 77,
      list: [
        {
          id: 1,
          image: POST_MANU_1,
          title: 'βSpecialsβ Team π΅π€π»',
          likes: 252,
          comments: 2,
          createdAt: '2019-09-08T15:00:00.000Z',
        },
        {
          id: 2,
          image: POST_MANU_2,
          title: 'π€π»ππ',
          likes: 256,
          comments: 18,
          createdAt: '2018-06-28T15:00:00.000Z',
        },
        {
          id: 3,
          image: POST_MANU_3,
          title: 'πβοΈπ',
          likes: 238,
          comments: 18,
          createdAt: '2018-06-28T15:00:00.000Z',
        },
        {
          id: 4,
          image: POST_MANU_4,
          title: 'π€π»ππ',
          likes: 212,
          comments: 2,
          createdAt: '2018-06-28T15:00:00.000Z',
        },
        {
          id: 5,
          image: POST_MANU_5,
          title: 'π€π»ππ',
          likes: 204,
          comments: 5,
          createdAt: '2018-06-28T15:00:00.000Z',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'Sergio FernΓ‘ndez',
    username: 'sergiofdz18',
    email: 'sergy@gmail.com',
    password: '1234',
    avatar: AVATAR_SERGIO,
    verified: false,
    description: `π AlcalΓ‘ de Henares, Madrid${'\n'}π DeersRiders`,
    followers: {
      total: 669,
      list: [],
    },
    follows: {
      total: 1430,
      list: [],
    },
    posts: {
      total: 1,
      list: [],
    },
  },
  {
    id: 3,
    name: 'Ibai',
    username: 'ibaillanos',
    email: 'ibai@gmail.com',
    password: '1234',
    avatar: AVATAR_IBAI,
    verified: true,
    description: `Fundador y dueΓ±o de @squadkoi${'\n'}twitch.tv/ibai`,
    followers: {
      total: 72000000000,
      list: [],
    },
    follows: {
      total: 400,
      list: [],
    },
    posts: {
      total: 169,
      list: [],
    },
  },
  {
    id: 4,
    name: 'Real Madrid C.F.',
    username: 'realmadrid',
    avatar: AVATAR_RM,
    verified: true,
    description: `β½οΈ Official profile of Real Madrid C.F.${'\n'}π 14 times European Champions${'\n'}π FIFA Best Club of the 20th Century${'\n'}π± #RealFootball | π #RMFans`,
    followers: {
      total: 118000000,
      list: [],
    },
    follows: {
      total: 45,
      list: [],
    },
    posts: {
      total: 6336,
      list: [],
    },
  },
  {
    id: 5,
    name: 'Netflix EspanΜa',
    username: 'netflixes',
    avatar: AVATAR_NETFLIX,
    verified: true,
    followers: {
      total: 669,
      list: [],
    },
    follows: {
      total: 1430,
      list: [],
    },
    posts: {
      total: 1,
      list: [],
    },
  },
  {
    id: 6,
    name: 'GitHub',
    username: 'github',
    avatar: AVATAR_GITHUB,
    verified: true,
    description: `Built for developers.${'\n'}sprout.link/github`,
    followers: {
      total: 273000,
      list: [],
    },
    follows: {
      total: 13,
      list: [],
    },
    posts: {
      total: 308,
      list: [],
    },
  },
];
