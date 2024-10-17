
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
      <body
        className={myFont.className}
      >
        {children}
      </body>
    </html>
  );
}
