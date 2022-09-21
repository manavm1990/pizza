import { useEffect, useState } from "react";
import APIService from "services/api";

const api = new APIService();

function useEntities(entity) {
  const [entities, setEntity] = useState([]);

  useEffect(() => {
    api.index(entity).then((data) => {
      setEntity(data);
    });
  });

  return entities;
}

export default useEntities;
