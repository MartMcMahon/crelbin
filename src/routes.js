import React from 'react';
import { Link } from 'react-router-dom';

import ChatPage from './chat/chat';

export const routes = [
  {
    path: '/',
    key: '/',
    component: ChatPage
  },
];
