import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnails Downloader"
        description="Download High-Quality Thumbnails from YouTube videos."
        canonical="https://www.youtube-thumbnails-downloader.com/"
        openGraph={{
          url: "https://www.youtube-thumbnails-downloader.com/",
          title: "Youtube Thumbnails Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Youtube Thumbnails Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
