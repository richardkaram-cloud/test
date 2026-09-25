import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Karam Engineering | Structural Engineering & Quantity Surveying",description:"Structural engineering and quantity surveying services for industrial, commercial and residential projects.",metadataBase:new URL("https://karamengineering.com"),openGraph:{title:"Karam Engineering",description:"Structural Engineering & Quantity Surveying",url:"https://karamengineering.com",siteName:"Karam Engineering",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
