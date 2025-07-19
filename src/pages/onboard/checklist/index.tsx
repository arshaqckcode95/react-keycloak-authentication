import { useNavigate } from "react-router-dom"

const CheckList = ()=>{
    const navigate = useNavigate()
    const handleNav =()=>{
       navigate("/home")
    }

    return(
        <div>
           <div> CheckList screen</div>
            <button onClick={handleNav}>Home</button>
        </div>
    )
}

export default CheckList