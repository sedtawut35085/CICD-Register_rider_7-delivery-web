import LogoutComponent from "../../components/Logoutcomponent";
import { AuthProvider } from '../../auth/Auth'

const logoutScreen = () => {
    return (
        <AuthProvider>
            <LogoutComponent/>
        </AuthProvider>
    )
}

export default logoutScreen