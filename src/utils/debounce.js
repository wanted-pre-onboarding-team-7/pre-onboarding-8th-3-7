export const debounce = (callback, duration,args) => {
    const timer = setTimeout(()=>{
        callback(args)
    },duration)
    return () => {
      clearTimeout(timer)
    };
  };
  
  