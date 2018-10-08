import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faEnvelope,
  faHeart as faHeartSolid,
  faLock,
  faSearch,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const icons =  {
  search: {
    name: 'search',
    style: 'fas',
    object: faSearch,
  },
  userCircle: {
    name: 'user-circle',
    style: 'fas',
    object: faUserCircle,
  },
  user: {
    name: 'user',
    style: 'fas',
    object: faUser,
  },
  lock: {
    name: 'lock',
    style: 'fas',
    object: faLock,
  },
  envelope: {
    name: 'envelope',
    style: 'fas',
    object: faEnvelope,
  },
  cog: {
    name: 'cog',
    style: 'fas',
    object: faCog,
  },
  heartRegular: {
    name: 'heart',
    style: 'far',
    object: faHeart,
  },
  heart: {
    name: 'heart',
    style: 'fas',
    object: faHeartSolid,
  },
  facebook: {
    name: 'facebook-square',
    style: 'fab',
    object: faFacebookSquare,
  },
  twitter: {
    name: 'twitter-square',
    style: 'fab',
    object: faTwitterSquare,
  },
};

Object.keys(icons).forEach((key) => {
  library.add(icons[key].object);
});

export const iconTypes = Object.keys(icons);

export default icons;
