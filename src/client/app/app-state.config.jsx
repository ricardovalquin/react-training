import loginState from './login/login.state.jsx';

export default (routerInstance) => {
  routerInstance.stateRegistry.register(loginState);
  routerInstance.urlRouter.otherwise({ state: 'login' });
}