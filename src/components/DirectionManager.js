import React from 'react';

import { tourPages, plansPages } from '../pagesByName';

const tour = tourPages.map(({ path }) => path);
const plans = plansPages.map(({ path }) => path);

const isPlans = pathname => pathname.startsWith('/floor-plans/');
const isContact = pathname => pathname.startsWith('/contact');
const isTour = pathname => pathname === '/' || pathname.startsWith('/tour/');

const getNext = (current, previous, list = []) =>
  list.indexOf(current) > list.indexOf(previous) ? 'Next' : 'Previous';

const getDirection = (current, previous) => {
  if (previous === '') return '';
  if (isContact(current)) return 'Left';
  if (isContact(previous)) return 'Right';
  if (isPlans(current) && !isPlans(previous)) return 'Down';
  if (!isPlans(current) && isPlans(previous)) return 'Up';
  if (isTour(current) && isTour(previous)) {
    return getNext(current, previous, tour);
  }
  if (isPlans(current) && isPlans(previous)) {
    return getNext(current, previous, plans);
  }
  return 'Next';
};

export default class DirectionManager extends React.PureComponent {
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
    console.log(this.state.previousPathname);
    return this.props.children({
      getPoseName: this.getPoseName,
    });
  }
}
