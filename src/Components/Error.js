import {useRouteError} from "react-router-dom";


const Error=()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h2>{err?.status + "! "+ err?.statusText}</h2>
            <h4>{err?.error?.message}</h4>
        </div>
    )
}

export default Error; 