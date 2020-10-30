export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';


export enum LoadingState {
  STATE_LOADING = 'STATE_LOADING',
  STATE_READY = 'STATE_READY',
  STATE_ERROR = 'STATE_ERROR',
}