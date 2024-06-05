import React, { ReactNode } from 'react';
import { createClient } from '../../prismicio';
import Footer from '../FooterSection/Footer';
import Navbar from '../Navbars/Navbar';
interface LayoutProps {
  children?: ReactNode;
}
async function Layout({ children }: LayoutProps) {
  const client = createClient();
  const navbar = await client.getSingle<any>('navbar');
  const footer = await client.getSingle('footer');
  return (
    <div>
      <Navbar navbar={navbar}/>
      {children}
      <Footer footer={footer} />
    </div>
  );
}
export default Layout;