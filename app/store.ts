import { create } from "zustand";

import {
  LinkDataType,
  ProfileDetailsType,
} from "./protected/protectedFileTypes";

type LinkDataState = {
  linkDataArray: LinkDataType[] | undefined;
};

type LinkDataAction = {
  updateLinkDataArray: (linkDataArray: LinkDataState["linkDataArray"]) => void;
};

export const useLinkDataStore = create<LinkDataState & LinkDataAction>(
  (set) => ({
    linkDataArray: [],
    updateLinkDataArray: (linkDataArray) =>
      set(() => ({ linkDataArray: linkDataArray })),
  })
);

type IsLoadingState = {
  isLoading: boolean;
};

type IsLoadingAction = {
  updateIsLoading: (isLoading: IsLoadingState["isLoading"]) => void;
};

export const useIsLoadingStore = create<IsLoadingState & IsLoadingAction>(
  (set) => ({
    isLoading: false,
    updateIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
  })
);

type ProfileDetailsState = {
  profileDetailsState: ProfileDetailsType | undefined;
};

type ProfileDetailsAction = {
  updateProfileDetailsArray: (
    profileDetailsState: ProfileDetailsState["profileDetailsState"]
  ) => void;
};

export const useProfileDetails = create<
  ProfileDetailsState & ProfileDetailsAction
>((set) => ({
  profileDetailsState: undefined,
  updateProfileDetailsArray: (profileDetailsState) =>
    set(() => ({ profileDetailsState: profileDetailsState })),
}));
