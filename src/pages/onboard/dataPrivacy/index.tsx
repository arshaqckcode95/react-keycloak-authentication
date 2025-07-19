import { useNavigate } from "react-router-dom"

const DataPrivacy = ()=>{
    const navigate = useNavigate()

    const handleNav =()=>{
       navigate("/terms")
    }

    return(
        <div>
           <div> Data Privacy screen</div>
            <button onClick={handleNav}>Terms</button>
        </div>
    )
}

export default DataPrivacy