import { useAuth } from "../../context/authContext";

const SafePage = () => {
    const { logout } = useAuth();
    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <div>dashboard screen</div>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default SafePage