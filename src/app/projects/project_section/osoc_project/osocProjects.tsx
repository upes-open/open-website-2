import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { projects } from './constants';

export default function OsocProjects() {
  return (
    <div className='w-screen flex flex-col items-center p-1 overflow-x-hidden'>
      <div className='osoc_project w-[100%] mt-7 text-center flex flex-col items-center'>
        <h1 className='font-bold text-2xl'>OSOC PROJECTS</h1>

        <InfiniteMovingCards
          projects={projects}
          pauseOnHover={true}
          direction='left'
          speed='slow'
        />
      </div>
    </div>
  );
}
