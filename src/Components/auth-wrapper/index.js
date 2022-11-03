import { useContext } from 'react';

import { AuthContext } from '../../Context/auth';

export default function AuthWrapper({ capability, children }) {
  const { loginData, hasPermission } = useContext(AuthContext);
  if (loginData.isLoggedIn && hasPermission(capability)) {
    return children;
  }
}
