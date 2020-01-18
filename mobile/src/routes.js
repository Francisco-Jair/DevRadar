//Onde vão ficar as rotas
import { createAppContainer } from 'react-navigation'
import { creaStackNavigation, createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'DevRadar'
            }
        },
        Profile:
        {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#7d40e7',
            }
        }
    })
)

export default Routes