import App from "next/app";
import Head from "next/head";
// import { Provider } from 'next-auth/client';
import "../styles/globals.css"

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      //   <Provider session={pageProps.session}>
      <>
        <Head>
          <title>Project G</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </>
      //   </Provider>
    );
  }
}

export default MyApp;
