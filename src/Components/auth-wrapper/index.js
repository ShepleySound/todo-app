import { useContext } from 'react';

import { LoginContext } from '../../Context/auth';

export default function AuthWrapper({ capability, children }) {
  const { loginData, hasPermission } = useContext(LoginContext);
  if (loginData.isLoggedIn && hasPermission(capability)) {
    return children;
  }
}
