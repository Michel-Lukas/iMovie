import Navbar from '../components/Navbar';
import './globals.css';

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html>
         <body>
            <main>
               <div className="content">
                  <Navbar />
                  {children}
               </div>
            </main>
         </body>
      </html>
   );
}
