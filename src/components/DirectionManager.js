import React from 'react';

import { tourPages, plansPages } from '../pagesByName';

const tour = tourPages.map(({ path }) => path);
const plans = plansPages.map(({ path }) => path);

const isPlans = pathname => plans.includes(pathname);
const isContact = pathname => pathname.startsWith('/contact');
const isTour = pathname => tour.includes(pathname);
const isLast = (pathname, list) => list.indexOf(pathname) === list.length - 1;

const getTourDirection = (current, previous) =>
  tour.indexOf(current) >= tour.indexOf(previous) ? 'Next' : 'Previous';

const getPlansDirection = (current, previous) =>
  plans.indexOf(current) >= plans.indexOf(previous) ? 'LevelDown' : 'LevelUp';

const getDirection = (current, previous) => {
  if (previous === '') return '';
  if (isTour(current) && isTour(previous)) {
    return getTourDirection(current, previous);
  }
  if (isPlans(current) && isPlans(previous)) {
    return getPlansDirection(current, previous);
  }
  if (isContact(current) && isLast(previous, tour)) return 'Right';
  if (isLast(current, tour) && isContact(previous)) return 'Left';
  if (isContact(current)) return 'Left';
  if (isContact(previous)) return 'Right';
  if (isPlans(current) && !isPlans(previous)) return 'Down';
  if (!isPlans(current) && isPlans(previous)) return 'Up';
  return 'Next';
};

export default class DirectionManager extends React.Component {
  state = {
    previousPathname: '',
    pathname: '',
  };

  getPoseName = name => {
    const direction = getDirection(
      this.props.pathname,
      this.state.previousPathname
    );
    return `${name}${direction}`;
  };

  static getDerivedStateFromProps(props, state) {
    if (props.pathname !== state.pathname) {
      return {
        pathname: props.pathname,
        previousPathname: state.pathname,
      };
    }
    return null;
  }

  render() {
    return this.props.children({
      getPoseName: this.getPoseName,
    });
  }
}
