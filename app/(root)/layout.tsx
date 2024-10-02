import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
     const LoggedIn={firstName:'Issac' ,lastName:'chowdary'}
  return (
    <main className="flex h-screen w-full fonts-inter">
        <SideBar user={LoggedIn}/>
        <div className="flex  size-full flex-col">
            <div className="root-layout ">
                <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>
            
            <div>
                <MobileNav user={LoggedIn}/>
            </div>
            </div>
            {children}
        </div>
        
    </main>
  );
}
