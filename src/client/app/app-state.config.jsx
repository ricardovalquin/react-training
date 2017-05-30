import loginState from './login/login.state.jsx';
import dashboardState from './dashboard/dashboard.state.jsx';
import dayState from './dashboard/day/day.state.jsx';

export default (routerInstance) => {
  routerInstance.stateRegistry.register(loginState);
  routerInstance.stateRegistry.register(dashboardState);
  routerInstance.stateRegistry.register(dayState);
  routerInstance.urlRouter.otherwise({ state: 'login' });
}