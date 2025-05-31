import {
  FaCartPlus,
  FaHeadset,
  FaLaptop,
  FaUserTie,
  FaUtensils,
} from 'react-icons/fa';
import { ServicesArrItemType } from '../types';

export const ServicesData: ServicesArrItemType[] = [
  {
    id: 1,
    icon: <FaUserTie />,
    title: 'Master Chef',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nisi!',
  },
  {
    id: 2,
    icon: <FaUtensils />,
    title: 'Food Quality',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nisi!',
  },
  {
    id: 3,
    icon: <FaCartPlus />,
    title: 'online Food Order',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nisi!',
  },
  {
    id: 4,
    icon: <FaLaptop />,
    title: 'Online table Book',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nisi!',
  },
  {
    id: 5,
    icon: <FaHeadset />,
    title: '24/7 Service',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nisi!',
  },
];
