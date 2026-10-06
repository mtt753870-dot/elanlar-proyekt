export type Listing = {
  id: string; title: string; brand: string; model: string; price: number; year: number;
  mileage: number; engineCc: number; city: string; type: string; image: string; description: string;
};

export const listings: Listing[] = [
  { id:'1', title:'Honda CBR 600RR', brand:'Honda', model:'CBR 600RR', price:12900, year:2019, mileage:18400, engineCc:599, city:'Bakı', type:'Sport', image:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85', description:'Səliqəli və baxımlı motosiklet. Şəxsi istifadə olunub. Texniki vəziyyəti haqqında ətraflı məlumat elan sahibi tərəfindən veriləcək.' },
  { id:'2', title:'Yamaha MT-07', brand:'Yamaha', model:'MT-07', price:9850, year:2021, mileage:9200, engineCc:689, city:'Bakı', type:'Naked', image:'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85', description:'Şəhər və gündəlik istifadə üçün uyğun model. Baxımlı vəziyyətdədir.' },
  { id:'3', title:'Kawasaki Ninja 400', brand:'Kawasaki', model:'Ninja 400', price:8700, year:2020, mileage:12100, engineCc:399, city:'Sumqayıt', type:'Sport', image:'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=85', description:'Sport görünüşlü, kompakt və çevik motosiklet.' },
  { id:'4', title:'BMW G 310 R', brand:'BMW', model:'G 310 R', price:7600, year:2022, mileage:6800, engineCc:313, city:'Bakı', type:'Naked', image:'https://images.unsplash.com/photo-1558980394-0c7e7c6d2e2d?auto=format&fit=crop&w=1000&q=85', description:'Az yürüşlü motosiklet. Şəhər istifadəsi üçün əlverişli.' },
  { id:'5', title:'Suzuki GSX-R750', brand:'Suzuki', model:'GSX-R750', price:11200, year:2018, mileage:20700, engineCc:750, city:'Gəncə', type:'Sport', image:'https://images.unsplash.com/photo-1558980664-10ea7b7e8c5b?auto=format&fit=crop&w=1000&q=85', description:'Sport motosiklet. Elan məlumatları nümunə məqsədlidir.' },
  { id:'6', title:'KTM Duke 390', brand:'KTM', model:'Duke 390', price:6900, year:2021, mileage:10500, engineCc:373, city:'Bakı', type:'Naked', image:'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1000&q=85', description:'Yüngül və çevik motosiklet. Şəhər üçün praktik seçim.' }
];
