export default function ProjectCard({ title, description, image }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 border border-gray-200">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4 text-right" dir="rtl">
        <div className="font-bold text-xl mb-2 text-blue-600">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 text-right">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
}