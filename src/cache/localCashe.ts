export const storage = {
  canCached(key: string) {
    return sessionStorage.getItem(key) ? true : false;
  },
  setCache(key: string, value: string) {
    return sessionStorage.setItem(key, value);
  },
  getCache(key: string) {
    return sessionStorage.getItem(key);
  },
};
