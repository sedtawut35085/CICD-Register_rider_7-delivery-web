import RegisterphoneComponent from "../../components/RegisterphoneComponent"
import { AuthProvider } from '../../auth/Auth'

const registerphoneScreen = () => {
    return (
        <AuthProvider>
            <RegisterphoneComponent/>
        </AuthProvider>
    )
}

export default registerphoneScreen