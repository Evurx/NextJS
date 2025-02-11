import React, { ReactNode } from 'react';
import Link from "next/link";
import "../styles/globals.css";
import Image from 'next/image';


interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {


  const header = (
    <header>
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
        
        <Link href={"/"}>
        <Image src="/logo.png" width={40} height={40} className='mx-auto'></Image>
          <h1 className="text-2xl text-white font-bold mt-4">Serkan's Blog</h1>
        </Link>
        <p className='text-slate-300'>Welcome to my tech blog.</p>
   
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by Serkan</h3>
      </div>
    </footer>

  )



  return (
    <html>
    <head />
    <body>
      <div className="mx-auto  max-w-2xl px-6">
        {header}
        {children}
        {footer}
      </div>
    </body>
  </html>
  );
};

export default RootLayout;
