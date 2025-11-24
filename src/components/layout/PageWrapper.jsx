import React, { Suspense } from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';

const PageWrapper = ({ children }) => {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="large" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default PageWrapper;