import React, { lazy } from 'react';

const MainPage = lazy(() => import('@/pages/Main'));
const Blog = lazy(() => import('@/pages/Blog'));
const ContactsPage = lazy(() => import('@/pages/Contacts'));
const SinglePage = lazy(() => import('@/pages/BlogSingle'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const pages = [
    <MainPage />,
    <Blog />,
    <ContactsPage />,
    <FAQ />,
    <SinglePage />,
];
export default pages;
