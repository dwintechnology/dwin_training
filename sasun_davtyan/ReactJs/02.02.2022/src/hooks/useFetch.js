export const useFetch = (url) => {
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json")
            .then(response => response.json())
            .then(json => {
                setList(json);
            })
    }, []);
}