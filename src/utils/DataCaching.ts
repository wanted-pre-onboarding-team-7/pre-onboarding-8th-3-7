export function cachingData(func: (searchParam: string) => Promise<any>) {
  let cache = new Map();
  return async function (keyword: string) {
    if (cache.has(keyword)) {
      let result = cache.get(keyword);
      if (result.size > 7) {
        result = result.slice(0, 7);
      }
      return result;
    } else {
      let result = await func(keyword);
      if (result.length > 7) {
        result = result.slice(0, 7);
      }
      cache.set(keyword, result);
      return result;
    }
  };
}
