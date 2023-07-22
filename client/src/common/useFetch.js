import { useEffect, useState } from "react";
// test performance of option 1 vs. option 2
export default function useFetch(uri) {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState();

  // option 1
  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  // option 2
  // useEffect(() => {
  //   const controller = new AbortController();
  //   fetch(uri, { signal: controller.signal })
  //     .then((data) => data.json())
  //     .then(setData)
  //     .then(() => setLoading(false))
  //     .catch((error) => {
  //       if (error.name !== "AbortError") {
  //         setError(error);
  //       }
  //     });
  //   return () => {
  //     controller.abort();
  //   };
  // }, [uri]);

  return { loading, data, error };
}
