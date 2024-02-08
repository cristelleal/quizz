import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthChecker({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const authInstance = getAuth();
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (!user) {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return <>{children}</>;
}

AuthChecker.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthChecker;
