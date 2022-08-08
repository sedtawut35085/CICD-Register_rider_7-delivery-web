
import { AuthProvider } from '../../auth/Auth'
import InformationComponent from '../../components/InformationComponent'

const informationScreen = () => {
    return (
        <AuthProvider>
            <InformationComponent />
        </AuthProvider>
    )
}

export default informationScreen