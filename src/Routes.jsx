import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// Lazy load pages
const Homepage = lazy(() => import('./pages/homepage'));
const ContactPage = lazy(() => import('./pages/contact'));
const Team = lazy(() => import('./pages/team'));
const ImpactDomains = lazy(() => import('./pages/impact-domains'));
const AboutPage = lazy(() => import('./pages/about'));
const Activities = lazy(() => import('./pages/activities'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Routes = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ErrorBoundary>
          <ScrollToTop />
          <RouterRoutes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Homepage />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ContactPage />
                  </Suspense>
                }
              />
              <Route
                path="/team"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Team />
                  </Suspense>
                }
              />
              <Route
                path="/impact-domains"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ImpactDomains />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AboutPage />
                  </Suspense>
                }
              />
              <Route
                path="/activities"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Activities />
                  </Suspense>
                }
              />
              <Route
                path="/homepage"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Homepage />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Route>
          </RouterRoutes>
        </ErrorBoundary>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default Routes;
