import { useCache } from '@/hooks/web/useCache';
import { TokenType } from '@/api/login/types';
import { decrypt, encrypt } from '@/utils/jsencrypt';

const { wsCache } = useCache();
const AccessTokenKey = 'ACCESS_TOKEN';
const RefreshTokenKey = 'REFRESH_TOKEN';

export const clearAuth = () => {
  removeToken();
  wsCache.delete('user');
};

export const getPermissionList = () => {
  return wsCache.get('user') &&
    wsCache.get('user') !== null &&
    wsCache.get('user').permissions &&
    wsCache.get('user').permissions !== null
    ? (wsCache.get('user')?.permissions as string[])
    : [];
};

// 获取token
export const getAccessToken = () => {
  return wsCache.get(AccessTokenKey);
};

// 刷新token
export const getRefreshToken = () => {
  return wsCache.get(RefreshTokenKey);
};

// 设置token
export const setToken = (token: TokenType) => {
  wsCache.set(RefreshTokenKey, token.refreshToken, { exp: token.expiresTime });
  wsCache.set(AccessTokenKey, token.accessToken);
};

// 删除token
export const removeToken = () => {
  wsCache.delete(AccessTokenKey);
  wsCache.delete(RefreshTokenKey);
};

const UsernameKey = 'USERNAME';
const PasswordKey = 'PASSWORD';
const RememberMeKey = 'REMEMBER_ME';

export const getUsername = () => {
  return wsCache.get(UsernameKey);
};

export const setUsername = (username: string) => {
  wsCache.set(UsernameKey, username);
};

export const removeUsername = () => {
  wsCache.delete(UsernameKey);
};

export const getPassword = () => {
  const password = wsCache.get(PasswordKey);
  return password ? decrypt(password) : undefined;
};

export const setPassword = (password: string) => {
  wsCache.set(PasswordKey, encrypt(password));
};

export const removePassword = () => {
  wsCache.delete(PasswordKey);
};

export const getRememberMe = () => {
  return wsCache.get(RememberMeKey) === 'true';
};

export const setRememberMe = (rememberMe: string) => {
  wsCache.set(RememberMeKey, rememberMe);
};

export const removeRememberMe = () => {
  wsCache.delete(RememberMeKey);
};
