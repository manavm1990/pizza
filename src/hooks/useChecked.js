import { useCallback, useEffect, useState } from "react";

function useChecked(checked = false) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const toggle = useCallback(() => setIsChecked((prev) => !prev), []);
  return [isChecked, toggle];
}

export default useChecked;
