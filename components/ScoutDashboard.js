import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import Rocket from '../form-components/Rocket';
import HAB from '../form-components/HAB';
import Cargoship from '../form-components/Cargoship';

const ScoutDashboard = createMaterialTopTabNavigator({
  Rocket: {screen: Rocket},
  HAB: {screen: HAB},
  Cargoship: {screen: Cargoship},
});

export default createAppContainer(ScoutDashboard);