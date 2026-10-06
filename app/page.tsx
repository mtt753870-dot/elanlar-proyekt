"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Axtarış: ${query}`);
    // Burada istəsən Supabase ilə filter işlədə bilərsən
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-copy">
            <span className="eyebrow">AZƏRBAYCANIN MOTOSİKLET PLATFORMASI</span>
            <h1>
              İstədiyin motosikleti<br />
              <em>tez tap.</em>
            </h1>
            <p>
              Yalnız motosikletlər üçün hazırlanmış 003MOTO-da elanlara bax,
              müqayisə et və satıcı ilə əlaqə saxla.
            </p>

            {/* Axtarış qutusu */}
            <div className="hero-search">
              <input
                placeholder="Məsələn: Yamaha MT-07"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={handleSearch}>Axtar</button>
            </div>

            {/* Populyar markalar */}
            <div className="quick">
              <span>Populyar:</span>
              <Link href="/motosikletler?brand=Honda">Honda</Link>
              <Link href="/motosikletler?brand=Yamaha">Yamaha</Link>
              <Link href="/motosikletler?brand=Kawasaki">Kawasaki</Link>
              <Link href="/motosikletler?brand=BMW">BMW</Link>
            </div>
          </div>

          <div className="hero-art">
            <div className="ring"></div>
            {/* Burada istəsən Bike komponentini çağır */}
            <div className="stat">
              <b>003MOTO</b>
              <span>Yalnız motosiklet</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
