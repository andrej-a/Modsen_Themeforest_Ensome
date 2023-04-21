import React, { lazy } from 'react';

const MainPage = lazy(() => import('@/pages/Main'));
const Blog = lazy(() => import('@/pages/Blog'));
const ContactsPage = lazy(() => import('@/pages/Contacts'));
const SinglePage = lazy(() => import('@/pages/BlogSingle'));
const Services = lazy(() => import('@/pages/ServicesPage'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const ServiceSingle = lazy(() => import('@/pages/ServiceSingle'));
const SolutionsPage = lazy(() => import('@/pages/Solutions'));

const pages = [
    <MainPage />,
    <SolutionsPage />,
    <Blog />,
    <ContactsPage />,
    <Services />,
    <FAQ />,
    <SinglePage />,
    <ServiceSingle />,
];
export default pages;
