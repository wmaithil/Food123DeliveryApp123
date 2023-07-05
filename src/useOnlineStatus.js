import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [isOnline, setIsOnline] = useState(true);
    useEffect(()=>{

        window.addEventListener("online",()=>{
            setIsOnline(false);
        });

        window.addEventListener("offline",()=>{
            setIsOnline(false);
        });
    }, []);
    return isOnline;
}

export default useOnlineStatus;