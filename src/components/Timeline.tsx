import type { InfoType } from '@/config';

function getEventByYear(items: InfoType[], year: string): InfoType[] {
  return items.filter(item => item.year === year);
}

export default function Timeline({ posters, speaker }:
{
  posters: InfoType[];
  speaker: InfoType[];
}) {
  const years = [...new Set([...speaker.map(item => item.year), ...posters.map(item => item.year)])];

  return (
    <div className="relative max-w-screen-lg mx-auto mb-16">
      {/* Timeline line */}
      <div className="absolute left-1/2 w-px h-full bg-gray-300"></div>

      {/* Timeline items */}
      {years.map((year, index) => (
        <div
          key={year}
          className={`flex items-center ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          } mb-10 relative`}
        >
          <div className="absolute w-8 h-8 bg-white flex items-center justify-center text-sm font-semibold left-1/2 transform -translate-x-1/2">
            {year}
          </div>

          {/* Speaker Info (Left Side) */}
          {getEventByYear(speaker, year).map((item, index) => (
            <div
              key={index}
              className="mr-10 flex-1 p-5 rounded-lg text-right justify-end"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <img
                src={item.image}
                alt={item.title}
                className="mt-3 rounded-lg max-w-[250px]"
              />
            </div>
          ))}

          {/* Poster Info (Right Side) */}
          {getEventByYear(posters, year).map((item, index) => (
            <div
              key={index}
              className="ml-10 flex-1 p-5 rounded-lg"
            >
              <h3 className="text-xl font-bold">{posters[index]?.title}</h3>
              <p className="text-sm text-gray-600">{posters[index]?.description}</p>
              <img
                src={item.image}
                alt={item.title}
                className="mt-3 rounded-lg max-w-[250px]"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
