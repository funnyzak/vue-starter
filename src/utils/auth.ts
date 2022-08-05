import { useCache } from '@/hooks/web/useCache';
import { TokenType, UserInfoVO } from '@/api/login/types';
import { decrypt, encrypt } from '@/utils/jsencrypt';

const { wsCache } = useCache('localStorage');

const AccessTokenKey = 'ACCESS_TOKEN';
const RefreshTokenKey = 'REFRESH_TOKEN';
const UserKey = 'USER_KEY';

export const clearAuth = () => {
  removeToken();
  wsCache.delete(UserKey);
};

export const setUser = (user: UserInfoVO) => {
  wsCache.set(UserKey, user);
};

export const getUser = (): UserInfoVO | undefined => {
  const _cacheUser = wsCache.get(UserKey);
  return _cacheUser && _cacheUser !== null ? (_cacheUser as UserInfoVO) : undefined;
};

export const getPermissionList = () => {
  return wsCache.get(UserKey) &&
    wsCache.get(UserKey) !== null &&
    wsCache.get(UserKey).permissions &&
    wsCache.get(UserKey).permissions !== null
    ? (wsCache.get(UserKey)?.permissions as string[])
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
