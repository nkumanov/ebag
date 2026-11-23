import { createSlice, rootReducer, RootState, WithSlice } from "@finances/core";

type InitialState = {
  userDetails: {
    first_name: string;
    last_name: string;
  };
};
const initialState: InitialState = {
  userDetails: {
    first_name: "Nikolay",
    last_name: "Kumanov",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    changeUserDetails: (state) => {
      state.userDetails.first_name = "Daniel";
    },
  },
  selectors: {
    selectName: (state) => {
      return state.userDetails;
    },
  },
});

export const injectedAuthSlice = authSlice.injectInto(rootReducer);

export const { selectName } = injectedAuthSlice.selectors;
export const { changeUserDetails } = injectedAuthSlice.actions;

declare global {
  interface LazyLoadedSlices extends WithSlice<typeof authSlice> {}
  interface AppActions {
    changeUserDetails: ReturnType<typeof authSlice.actions.changeUserDetails>;
  }
}
