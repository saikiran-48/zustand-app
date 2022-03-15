import { useAppStore } from "./store/appStore";

export const BearCount = () => {
  const bears = useAppStore((state) => state.bears);
  return <div> Bears : {bears} </div>;
};
