interface StateType {
  auth: any;
  users: any;
}

export const state: StateType = {
  auth: {},
  users: {},
};

export const testUseSelector = (f: Function) => f(state);
