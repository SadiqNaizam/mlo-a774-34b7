import React from 'react';
import LoginForm from '@/components/Login/LoginForm';

/**
 * LoginPage serves as the main entry point for the user authentication flow.
 * It utilizes a centered layout to prominently display the LoginForm component.
 * The background color is inherited from the body styles defined in global CSS.
 */
const LoginPage: React.FC = () => {
  return (
    // This main container implements the CenteredFormLayout template requirements.
    // It uses flexbox to center the LoginForm component vertically and horizontally
    // within the full viewport height.
    <main className="flex h-screen w-full items-center justify-center bg-background">
      <LoginForm />
    </main>
  );
};

export default LoginPage;
