import { useEffect, useState } from "react";
import { getResult } from "../api/axios";

import { storage } from "../cache/localCashe";

const useDebouncedEffect = (func,delay, deps) => {
    useEffect(()=>{
      const timer = setTimeout(()=>{
        func(deps)
      },delay);
    return () => {
      clearTimeout(timer);
    }
    },[deps])
  }

function useSearch() {
    const [word, setWord] = useState("")
    const [list,setList] = useState([])

    const onChangeWord = (e) => {
        setWord(e.target.value)
    }

    const result = (value) => {
        console.log(value)
        if(value==='') return setList([])
        if (storage.canCached(value)) {
            console.log(storage.canCached(value))
            setList(JSON.parse(storage.getCache(value)))
        }
        else {
            getResult(value).then(
                data => {
                    storage.setCache(value, JSON.stringify(data))
                    setList(data)
                }
            )
        }
    }


    useDebouncedEffect(result,800,word)
    return {word,list,onChangeWord}
}

export default useSearch;