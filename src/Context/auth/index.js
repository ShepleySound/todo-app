import { useState, createContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const authInstance = axios.create({
  baseURL: process.env.REACT_APP_TODO_API_URL,
});

const AuthContext = createContext(null);
const testUsers = {
  Administrator: {
    password: 'admin',
    name: 'admin',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ',
  },
  Editor: {
    password: 'editor',
    name: 'Editor',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s',
  },
  Writer: {
    password: 'writer',
    name: 'Writer',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68',
  },
  User: {
    password: 'user',
    name: 'User',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go',
  },
};

function AuthProvider({ children }) {
  const [cookies, setCookie] = useCookies(['auth']);

  const [loginData, setLoginData] = useState({
    isLoggedIn: false,
    user: {
      capabilities: [],
    },
    error: null,
  });

  const hasPermission = (capability) => {
    try {
      console.log(loginData);
      if (capability) {
        return loginData.user.capabilities.includes(capability);
      } else return true;
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await authInstance.post(
        '/auth/signin',
        {},
        {
          auth: {
            username: username,
            password: password,
          },
        }
      );
      if (response.data.token) {
        validateToken(response.data.token);
      }
    } catch (err) {
      console.error('Error validating token.', err.message);
    }
  };

  const logout = () => {
    handleLoginState(false, null, {});
  };

  const validateToken = (token) => {
    try {
      const validatedUser = jwt_decode(token);
      handleLoginState(true, token, validatedUser);
    } catch (err) {
      handleLoginState(false, null, {}, err);
    }
  };

  const handleLoginState = (isLoggedIn, token, user, error) => {
    setCookie('auth', token);
    setLoginData({ isLoggedIn, user, error: error || null });
    authInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  useEffect(() => {
    const cookieToken = cookies.auth;
    if (cookieToken) {
      validateToken(cookieToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loginData, hasPermission, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
