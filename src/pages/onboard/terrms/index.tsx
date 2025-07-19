import { useNavigate } from "react-router-dom"

const Terms = ()=>{
    const navigate = useNavigate()
    
    const handleNav =()=>{
       navigate("/checklist")
    }

    return(
        <div>
           <div> Terms screen</div>
            <button onClick={handleNav}>Next</button>
        </div>
    )
}

export default Terms