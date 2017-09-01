'use strict';

import { Table } from './table.component';

export let routes = [
  {
    path: '/user',
    component: require.ensure([], () => require('./user'), 'user')
  },
  {
    path: '/table',
    component: Table
  }
]
