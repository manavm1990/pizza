import { useCallback, useState } from "react";

function useChecked(isCheckedInitially = false) {
  const [isChecked, setIsChecked] = useState(isCheckedInitially);

  const toggle = useCallback(() => setIsChecked((checked) => !checked), []);
  return [isChecked, toggle];
}

export default useChecked;
