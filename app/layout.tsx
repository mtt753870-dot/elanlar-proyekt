import './globals.css';
import Link from 'next/link';
import { Heart, UserRound, Plus, Search } from 'lucide-react';

export const metadata = { title:'003MOTO — Motosiklet elanları', description:'Azərbaycanda motosiklet elanları üçün 003MOTO marketplace.' };

export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="az"><body>
  <header className="header"><div className="header-inner">
   <Link href="/" className="logo">003<span>MOTO</span></Link>
   <div className="top-search"><Search size={18}/><input placeholder="Marka, model və ya elan axtar..."/><button>Axtar</button></div>
   <nav><Link href="/motosikletler"><span>Elanlar</span></Link><Link href="/login"><Heart size={18}/><span>Seçilmiş</span></Link><Link href="/login"><UserRound size={18}/><span>Daxil ol</span></Link><Link href="/elan-yarat" className="add"><Plus size={18}/> Elan yerləşdir</Link></nav>
  </div></header>
  {children}
  <footer><div className="container footer-inner"><div><div className="logo">003<span>MOTO</span></div><p>Motosiklet elanları üçün yeni nəsil marketplace.</p></div><div><b>003MOTO</b><a href="/motosikletler">Elanlar</a><a href="/elan-yarat">Elan yerləşdir</a><a href="/login">Daxil ol</a></div><div><b>Kömək</b><a href="#">Qaydalar</a><a href="#">Əlaqə</a><a href="#">Məxfilik</a></div></div><div className="copyright">© 2026 003MOTO. Bütün hüquqlar qorunur.</div></footer>
 </body></html>
}
