import { useCallback, useEffect, useState } from "react";

function useChecked(isCheckedInitially = false) {
  const [isChecked, setIsChecked] = useState(isCheckedInitially);

  useEffect(() => {
    setIsChecked(isCheckedInitially);
  }, [isCheckedInitially]);

  const toggle = useCallback(() => setIsChecked((checked) => !checked), []);
  return [isChecked, toggle];
}

export default useChecked;
