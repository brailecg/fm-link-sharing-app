import { create } from "zustand";

import { LinkTableType } from "./protected/protectedFileTypes";

type LinkDataState = {
  linkDataArray: LinkTableType[];
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
