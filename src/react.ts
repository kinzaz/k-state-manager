import { useSyncExternalStore } from "react";
import { kStore } from "./vanilla";

export const useStore = () => {
  const state = useSyncExternalStore(
    kStore.subscribe.bind(kStore),
    kStore.getSnapshot.bind(kStore)
  );

  return {
    state,
    getState: kStore.getSnapshot,
    setState: (newState: number) => kStore.setState(newState),
  };
};
