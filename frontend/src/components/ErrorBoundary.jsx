import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong.</h1>
                    <p className="text-gray-600 mb-8">We're sorry for the inconvenience. Please try refreshing the page.</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="bg-[#13766b] text-white px-6 py-2 rounded-xl font-medium"
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
