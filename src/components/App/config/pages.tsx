import React, { lazy } from 'react';

const MainPage = lazy(() => import('@/pages/Main'));
const BlogPage = lazy(() => import('@/pages/Blog'));
const ContactsPage = lazy(() => import('@/pages/Contacts'));
const SinglePage = lazy(() => import('@/pages/BlogSingle'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const FAQPage = lazy(() => import('@/pages/FAQ'));
const ServiceSinglePage = lazy(() => import('@/pages/ServiceSingle'));
const SolutionsPage = lazy(() => import('@/pages/Solutions'));
const SolutionSinglePage = lazy(() => import('@/pages/SolutionsSingle'));
const AboutUsPage = lazy(() => import('@/pages/AboutUs'));
const OurTeamPage = lazy(() => import('@/pages/OurTeam'));
const OurTeamSinglePage = lazy(() => import('@/pages/OurTeamSingle'));

const pages = [
    <MainPage />,
    <SolutionsPage />,
    <BlogPage />,
    <ContactsPage />,
    <OurTeamPage />,
    <AboutUsPage />,
    <ServicesPage />,
    <FAQPage />,
    <SinglePage />,
    <ServiceSinglePage />,
    <SolutionSinglePage />,
    <OurTeamSinglePage />,
];
export default pages;
