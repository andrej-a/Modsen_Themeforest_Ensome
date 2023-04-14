import React, { lazy } from 'react';

const MainPage = lazy(() => import('@/pages/Main'));
const Blog = lazy(() => import('@/pages/Blog'));

const pages = [<MainPage />, <Blog />];
export default pages;
