export default function ElanCard({ title, price, marka, model, year, contact, image }: any) {
  return (
    <div className="border rounded p-4 shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{marka} {model} - {year}</p>
      <p className="text-blue-600 font-semibold">{price} AZN</p>
      <p className="text-gray-600">{contact}</p>
    </div>
  );
}
