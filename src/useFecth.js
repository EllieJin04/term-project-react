import { useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw Error("Could not fetch the data for the resource");
                }
                const result = await response.json();
                if (result.status === "success") {
                    setData(result.data);
                } else {
                    throw new Error(result.message);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setIsPending(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;