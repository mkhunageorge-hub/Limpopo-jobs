import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LIMPOPO JOBS 2026 - Real Jobs Daily",
  description: "Latest jobs in Polokwane, Tzaneen, Giyani, Thohoyandou",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* 1 POPUNDER ONLY - BEST EARNING - DON'T ADD MORE */}
        <script data-cfasync="false" src="https://afders.org/1/c107ea75371c0ce114303979db3d97c0"></script>
      </head>
      <body>
        {children}
        
        {/* 2 BANNERS ONLY - CLEAN AND PROFITABLE */}
        <div style={{textAlign:'center', padding:'20px', background:'#f5f5f5', marginTop:'30px'}}>
          <p style={{fontSize:'12px', color:'#999'}}>Advertisement</p>
          
          {/* Banner 468x60 - Top performer */}
          <div style={{margin:'15px auto'}}>
            <script dangerouslySetInnerHTML={{__html: `atOptions = {'key':'7cb44d6f14347be2ef43d8c068a81a82','format':'iframe','height':60,'width':468,'params':{}};`}} />
            <script src="https://bicea.org/22/7cb44d6f14347be2ef43d8c068a81a82"></script>
          </div>
          
          {/* Banner 300x250 - Second best */}
          <div style={{margin:'15px auto'}}>
            <script dangerouslySetInnerHTML={{__html: `atOptions = {'key':'fe4d9039466ebb135d135faf9b05eaf9','format':'iframe','height':250,'width':300,'params':{}};`}} />
            <script src="https://bicea.org/22/fe4d9039466ebb135d135faf9b05eaf9"></script>
          </div>
        </div>
      </body>
    </html>
  );
}
