import { Inter } from "next/font/google";
import { Footer } from '@/containers/footer';
import { Navbar } from '@/containers/navbar';

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <main className={`flex min-h-screen flex-col items-center justify-between bg-slate-900 ${inter.className}`}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
