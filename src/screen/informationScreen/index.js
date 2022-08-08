import InformationComponent from "../../components/InformationComponents";
import { AuthProvider } from '../../auth/Auth'

const informationScreen = () => {
    return (
        <AuthProvider>
            <InformationComponent/>
        </AuthProvider>
    )
}

export default informationScreen