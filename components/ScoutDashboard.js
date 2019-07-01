import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import Rocket from '../form-components/Rocket';
import HAB from '../form-components/HAB';
import Cargoship from '../form-components/Cargoship';
import FieldInfo from '../form-components/FieldInfo';

const ScoutDashboard = createMaterialTopTabNavigator({
  General: {screen: FieldInfo},
  Rocket: {screen: Rocket},
  HAB: {screen: HAB},
  Cargoship: {screen: Cargoship},
});

export default createAppContainer(ScoutDashboard);