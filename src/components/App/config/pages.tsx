import React, { lazy } from 'react';

const MainPage = lazy(() => import('@/pages/Main'));
const Blog = lazy(() => import('@/pages/Blog'));
const ContactsPage = lazy(() => import('@/pages/Contacts'));
const SinglePage = lazy(() => import('@/pages/BlogSingle'));
const Services = lazy(() => import('@/pages/ServicesPage'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const ServiceSingle = lazy(() => import('@/pages/ServiceSingle'));
const SolutionsPage = lazy(() => import('@/pages/Solutions'));
const SolutionSinglePage = lazy(() => import('@/pages/SolutionsSingle'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const OurTeam = lazy(() => import('@/pages/OurTeam'));
const OurTeamSingle = lazy(() => import('@/pages/OurTeamSingle'));

const pages = [
    <MainPage />,
    <SolutionsPage />,
    <Blog />,
    <ContactsPage />,
    <OurTeam />,
    <AboutUs />,
    <Services />,
    <FAQ />,
    <SinglePage />,
    <ServiceSingle />,
    <SolutionSinglePage />,
    <OurTeamSingle />,
];
export default pages;
