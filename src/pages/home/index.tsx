import { useAuth } from "../../context/authContext";

const Home = () => {
    const { logout } = useAuth();
    const handleLogout = () => {
        logout()
    }

    return (
        <div>
            <div>Home screen</div>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home