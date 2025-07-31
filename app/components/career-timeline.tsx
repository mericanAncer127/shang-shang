import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  place: string;
}

const timeline: TimelineItem[] = [
  { year: '2017', title: 'B.S. of Computer Science', place: 'University of Texas at Austin' },
  { year: '2018', title: 'Intern Developer', place: 'Haus London' },
  { year: '2019', title: 'Developer', place: 'Taylr Clothing' },
  { year: '2020', title: 'Software Engineer', place: 'Studio Proper' },
  { year: '2021', title: 'Engineer', place: 'Parliament' },
  { year: '2022', title: 'Senior Engineer', place: 'SpeakingRoses' },
  { year: '2023', title: 'Lead Engineer', place: 'The Oblist' },
  { year: '2024', title: 'Senior Engineer', place: 'OnlyNY' },
  { year: '2025+', title: 'Exclusive Contributor', place: '(?)' },
];

export default function CareerTimeline() {
  return (
    <div className="w-full flex justify-center py-8">
      {/* Desktop horizontal timeline */}
      <div className="hidden md:flex relative max-w-5xl items-center mt-24 mb-30">
        <div
          className="absolute left-0 right-0 top-1/2 h-1 bg-primary-500 z-0"
          style={{ transform: 'translateY(-50%)' }}
        />
        {timeline.map((item, idx) => {
          const isAbove = idx % 2 === 0;
          return (
            <div
              key={item.year}
              className="relative flex-1 min-w-[72px] lg:w-[120px] flex flex-col items-center z-10"
            >
              {/* Point */}
              <div
                className="w-3 h-3 bg-primary-500 border-2 border-white dark:border-black rounded-full absolute left-1/2 top-1/2 z-20"
                style={{ transform: 'translate(-50%, -50%)' }}
              />
              {/* Year label */}
              <div
                className={`absolute left-1/2 z-30 font-semibold text-primary-700 dark:text-primary-300 text-xs md:text-sm whitespace-nowrap ${isAbove ? 'bottom-7' : 'top-7'} -translate-x-1/2`}
              >
                {item.year}
              </div>
              {/* Text */}
              <div
                className={`flex flex-col absolute left-1/2 z-20 text-center whitespace-nowrap text-xs sm:text-sm md:text-base ${isAbove ? 'bottom-14' : 'top-14'} -translate-x-1/2`}
                style={{
                  marginBottom: isAbove ? 'clamp(0.5rem, 2vw, 2.5rem)' : undefined,
                  marginTop: !isAbove ? 'clamp(0.5rem, 2vw, 2.5rem)' : undefined,
                }}
              >
                <span className="font-medium">{item.title}</span>{' '}
                <span className="text-gray-500 dark:text-gray-400">{item.place}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* Mobile vertical timeline */}
      <div className="flex md:hidden flex-col relative w-full max-w-md mx-auto items-center">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary-500 z-0"
          style={{ transform: 'translateX(-50%)' }}
        />
        {timeline.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={item.year}
              className="relative flex w-full min-h-[60px] items-center z-10 mb-8 last:mb-0"
            >
              {/* Point */}
              <div
                className="w-3 h-3 bg-primary-500 border-2 border-white dark:border-black rounded-full absolute left-1/2 z-20"
                style={{ transform: 'translate(-50%, 0)' }}
              />
              {/* Year label */}
              <div
                className={`absolute z-30 font-semibold text-primary-700 dark:text-primary-300 text-xs top-1/2 -translate-y-1/2 ${isLeft ? 'left-[calc(50%-0.5rem)] -translate-x-full text-right' : 'left-[calc(50%+0.5rem)] text-left'}`}
                style={{ minWidth: '2.5rem', marginTop: 0, marginBottom: 0 }}
              >
                {item.year}
              </div>
              {/* Text */}
              <div
                className={`flex flex-col w-1/2 px-2 text-xs sm:text-sm ${isLeft ? 'pr-12 text-right' : 'pl-12 ml-auto text-left'}`}
                style={{
                  order: isLeft ? 0 : 2,
                  marginTop: isLeft ? undefined : 'clamp(0.25rem, 2vw, 1.5rem)',
                  marginBottom: isLeft ? 'clamp(0.25rem, 2vw, 1.5rem)' : undefined,
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                }}
              >
                <span className="font-medium">{item.title}</span>{' '}
                <span className="text-gray-500 dark:text-gray-400">{item.place}</span>
              </div>
              <div className="w-1/2" style={{ order: isLeft ? 2 : 0 }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
