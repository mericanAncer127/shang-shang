import { ReactNode } from 'react';

export interface WorkProps {
  children: ReactNode;
  progress: number;
}

export function WorkRight({ children, progress }: WorkProps) {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className="flex h-screen flex-1 justify-center lg:items-center sm:w-full md:w-full xl:w-8/12 m-auto"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="w-full md:px-0 lg:pt-0">{children}</div>
    </div>
  );
}
