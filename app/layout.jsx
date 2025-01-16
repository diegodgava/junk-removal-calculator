import { Geist, Geist_Mono, Roboto } from "next/font/google"; // Importa Roboto junto com outras fontes
import "./globals.css";
import Head from "next/head"; // Importa o componente Head

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"], // Define os pesos da fonte que você deseja usar
  subsets: ["latin"],
  variable: "--font-roboto", // Nome da variável CSS
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Define o título da aba */}
        <title>Junk Calculator</title>
        {/* Adiciona o favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
