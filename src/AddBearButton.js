import { useAppStore } from "./store/appStore";

export const AddBearButton = () => {
  const increasePopulation = useAppStore((state) => state.increasePopulation);

  return <button onClick={increasePopulation}> increase </button>;
};
