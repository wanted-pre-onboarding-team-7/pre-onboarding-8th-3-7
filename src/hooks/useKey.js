import { useState,useEffect } from "react"
const useKey = () => {
    const [position,setPosition] = useState(0)
    
    function changeKey(e) {
        const {key} = e
        if (key === 'ArrowDown'&&e.nativeEvent.isComposing===false) {setPosition(position+1); }
        else if(key === 'ArrowUp'&&e.nativeEvent.isComposing===false) {setPosition(position-1);}
    }

return {changeKey,position}
}

export default useKey;