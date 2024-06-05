import React, { ReactNode } from 'react';
import { createClient } from '../../prismicio';
import Footer from '../FooterSection/Footer';
interface LayoutProps {
  children?: ReactNode;
}
async function Layout({ children }: LayoutProps) {
  const client = createClient();
  const footer = await client.getSingle('footer');
  return (
    <div>
      {children}
      <Footer footer={footer} />
    </div>
  );
}
export default Layout;