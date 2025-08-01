// import Image from 'next/image';

import Image from 'next/image';

export default function Occupation() {
  return (
    <section className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
      <div className="text-center pt-2 md:pt-0 md:text-left">
        <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Jaime Saga</h1>
        <h2 className="text-sm font-normal md:text-base">Senior Full Stack Engineer</h2>
      </div>
      <div>
        <Image
          alt="Jaime Saga"
          height={150}
          width={150}
          src="/static/images/avatar.png"
          className="rounded-full object-scale-down"
        />
      </div>
    </section>
  );
}
