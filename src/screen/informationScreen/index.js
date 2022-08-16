
import { AuthProvider } from '../../auth/Auth'
import InformationComponent from '../../components/InformationComponent'
import { UseContextProvider } from "../../context/UserContext";

const informationScreen = () => {
    return (
        <AuthProvider>
            <UseContextProvider>
                <InformationComponent />
            </UseContextProvider>
        </AuthProvider>
    )
}

export default informationScreen