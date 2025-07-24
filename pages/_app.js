import "../styles/globals.css";
import "../styles/plugins.css";
import "../styles/style.css";

function App({Component, pageProps: {session, ...pageProps}}) {
    return (
        <Component {...pageProps} />
    );
}

export default App;
