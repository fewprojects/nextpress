
import localFont from 'next/font/local'
import "./globals.css";
const myFont = localFont({
  src: './fonts/Satoshi-Variable.ttf',
  display: 'swap',
})
export const metadata = {
  title: {
    template: `%s | NextPress - NextJS Blog Template with Wordpress CMS`,
    default: "NextPress - NextJS Blog Template with Wordpress CMS"
  },
  description: "NextJS 14 Blog Template with Wordpress API Integration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-8G1MPQ72YR`}
          strategy="afterInteractive"
          as="script"
          rel="preload"
        />
        <script async id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8G1MPQ72YR');
        `}}>
        </script> */}
        <meta content="text/html; charset=UTF-8" name="Content-Type" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="language" content="en-us" />
        <meta name="theme-color" content="#B4D6CD" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
      </head>
      <body
        className={myFont.className}
      >
        {children}
      </body>
    </html>
  );
}
