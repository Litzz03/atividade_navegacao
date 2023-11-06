import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Initial from "../screens/Initial";
import RegisterName from "../screens/RegisterName";
import RegisterDocuments from "../screens/RegisterDocuments";
import Result from "../screens/Result";

function AppRoutes(){

const {Screen, Navigator} = createNativeStackNavigator();

    return(

        <Navigator initialRouteName="initial" screensOptions={{Headers: false}}>
            <Screen name="initial" component={Initial}/>
            <Screen name="registerName" component={RegisterName}/>
            <Screen name="registerDocuments" component={RegisterDocuments}/>
            <Screen name="result" component={Result}/>
        </Navigator>

    )

}

export default AppRoutes