
import { AuthProvider } from '../../auth/Auth'
import InformationComponent from '../../components/InformationComponent'
import { UseContextProvider } from "../../context/UserContext";

const informationScreen = ({currentstep}) => {
    return (
        <AuthProvider>
            <UseContextProvider>
                <InformationComponent currentstep={currentstep}/>
            </UseContextProvider>
        </AuthProvider>
    )
}

export default informationScreen