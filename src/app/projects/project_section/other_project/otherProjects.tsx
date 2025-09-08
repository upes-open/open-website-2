import { DisplayCardGrid } from '@/components/ui/cardGrid';
import { cards } from './constants';

export default function OtherProjects() {
  return (
    <div className='w-[100vw] flex flex-col items-center p-1 overflow-x-hidden'>
      <h1 className='font-bold text-2xl'>OTHER PROJECTS</h1>

      <div className='w-[100vw] flex justify-center'>
        <DisplayCardGrid cards={cards} className='gap-10' />
      </div>
    </div>
  );
}
