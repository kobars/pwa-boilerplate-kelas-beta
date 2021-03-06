import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Layout = ({ children, seoData, isNoIndex }) => {
  const { asPath: canonicalPath } = useRouter();
  const canonicalUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  return (
    <Fragment>
      <Head>
        {/* SEO Begin  */}
        <title>{`${seoData?.title}`}</title>
        {isNoIndex && <meta name="robots" content="noindex" />}
        <meta name="description" content={seoData?.description} />
        {/* <meta name="author" content={seoData?.author} /> */}
        {/* SEO End */}

        {/* Open Graph Start  */}
        <meta property="og:type" content={seoData?.openGraph.type} />
        <meta property="og:locale" content={seoData?.openGraph.locale} />
        <meta property="og:url" content={seoData?.openGraph.url} />
        <meta property="og:title" content={seoData?.openGraph.title} />
        <meta
          property="og:description"
          content={seoData?.openGraph.description}
        />
        <meta property="og:image" content={seoData?.openGraph.image} />
        <meta property="og:site_name" content={seoData?.openGraph.site_name} />
        {/* Open Graph End */}

        {/* Twitter Card Info Start */}
        <meta name="twitter:card" content={seoData?.twitter.card} />
        <meta name="twitter:site" content={seoData?.twitter.site} />
        <meta name="twitter:title" content={seoData?.twitter.title} />
        <meta
          name="twitter:description"
          content={seoData?.twitter.description}
        />
        <meta name="twitter:image" content={seoData?.twitter.image} />
        {/* Twitter Card Info End */}

        {/* Canonical */}
        <link rel="canonical" href={`${canonicalUrl}${canonicalPath}`} />
      </Head>
      {children}
    </Fragment>
  );
};

export default Layout;
