import PreliminaryComponent from "../../components/PreliminaryinformationComponent"
import { AuthProvider } from '../../auth/Auth'

const preliminaryScreen = () => {
    return (
        <AuthProvider>
            <PreliminaryComponent/>
        </AuthProvider>
    )
}

export default preliminaryScreen