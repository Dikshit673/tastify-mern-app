import { JSX } from 'react';
import {
  FaCartPlus,
  FaHeadset,
  FaLaptop,
  FaUserTie,
  FaUtensils,
} from 'react-icons/fa';

type ServiceType = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
};

const servicesArr: ServiceType[] = [
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

export { servicesArr };
