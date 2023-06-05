import { useEffect } from "react";

const useTitle = (title) => {

    useEffect(()=>{

        document.title =`${title}- Fleet Fusion App`

    },[title])

};

export default useTitle;