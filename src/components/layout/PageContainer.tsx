import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function PageContainer({
  children,
  className = "",
  fullWidth = false,
}: PageContainerProps) {
  if (fullWidth) {
    return <div className={`w-full px-4 sm:px-6 lg:px-12 ${className}`}>{children}</div>;
  }

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full ${className}`}>
      {children}
    </div>
  );
}
