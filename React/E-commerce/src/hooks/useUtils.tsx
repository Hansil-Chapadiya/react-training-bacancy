import { useState } from "react";

const useUtils = () => {

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    return { error, setError, loading, setLoading };
}

export default useUtils;
