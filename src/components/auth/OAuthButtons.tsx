import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const OAuthButtons: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  const handleGoogleLogin = () => {
    loginWithRedirect({
      // connection: 'google-oauth2',
    });
  };

  const handleGithubLogin = () => {
    loginWithRedirect({
      
      // @ts-ignore
      // connection: 'github',
    });
  };

  const buttonClasses = `
    w-full flex items-center justify-center space-x-2 py-2 px-4
    border border-gray-300 dark:border-gray-600
    rounded-md shadow-sm text-sm font-medium
    text-gray-700 dark:text-gray-200
    bg-white dark:bg-gray-700
    hover:bg-gray-50 dark:hover:bg-gray-600
    focus:outline-none focus:ring-2 focus:ring-offset-2
    focus:ring-primary-500 dark:focus:ring-primary-400
    dark:focus:ring-offset-gray-800
    transition-colors
  `;

  return (
    <div className="space-y-3">
      <button
        onClick={handleGoogleLogin}
        className={buttonClasses}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
            fill="currentColor"
          />
        </svg>
        <span>Continue with Google</span>
      </button>

      <button
        onClick={handleGithubLogin}
        className={buttonClasses}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            fill="currentColor"
          />
        </svg>
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
};
