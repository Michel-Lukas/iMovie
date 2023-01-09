import Navbar from './components/Navbar';
import './globals.css';
import { UserProvider } from './context/UserContext';

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html>
         <body>
            <main>
               <UserProvider>
                  <div className="content">
                     <Navbar />
                     {children}
                  </div>
               </UserProvider>
            </main>
         </body>
      </html>
   );
}
