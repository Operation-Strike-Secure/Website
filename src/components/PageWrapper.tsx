import React from "react";

interface PageWrapperProps {
    children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return (
        <div className="pt-10 pb-10 flex items-center justify-center">
            <div className="bg-gray-900 bg-opacity-70 text-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                {children}
            </div>
        </div>
    );
};

export default PageWrapper;
