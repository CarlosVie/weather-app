import React from 'react';
import HomePage from '../pages/HomePage/components';

export interface RoutesType {
  readonly key: string
  readonly path: string;
  readonly component: React.FC
}

export default [
  {key: 'HomePage', path: '/', component: HomePage},
  {key: 'HomePage', path: '/page', component: HomePage},
];
