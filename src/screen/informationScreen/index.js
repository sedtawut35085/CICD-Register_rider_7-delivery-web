import InformationComponent from "../../components/InformationComponents/index";
import { AuthProvider } from '../../auth/Auth'

const informationScreen = () => {
    return (
        <AuthProvider>
            <InformationComponent/>
        </AuthProvider>
    )
}

export default informationScreen