"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ElanYarat() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("elanlar") // Supabase-də cədvəl adı
      .insert([{ title, price }]);

    if (error) {
      alert("Xəta: " + error.message);
    } else {
      alert("Elan əlavə olundu!");
      setTitle("");
      setPrice("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Başlıq"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Qiymət"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Elan əlavə et</button>
    </form>
  );
}
