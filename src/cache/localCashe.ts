
export const session = {
    set(key:string,value:string) {
        sessionStorage.setItem(key,value)
    },
    get(key:string) {
        return sessionStorage.getItem(key)
    }
}
export const cacheStorage = {
    setCache(key:string,value:string) {
        sessionStorage.set(key,value)
    },
    getCache(key:string) {
        sessionStorage.get(key)
    }
}