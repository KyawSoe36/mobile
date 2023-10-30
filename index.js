import { registerRootComponent } from 'expo';
import { MyContextProvider } from './src/context/context';
import Toast from 'react-native-toast-message';

import App from './App';

const provider = () =>(
    <MyContextProvider>
        <App/>
        <Toast />
    </MyContextProvider>
)

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
