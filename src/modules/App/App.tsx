import React from "react";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (_props) => {
    const [count, setCount] = React.useState<number>(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount((count) => count + 1);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    function displayCount(message: string): string {
        return message;
    }

    return <h2>{displayCount(`Count: ${count}`)}</h2>;
};

export default App;
