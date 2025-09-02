import { CommunitySection } from './CommunitySection';
import { QuickLinksSection } from './QuickLinks';
import { ContactSection } from './ContactSection';
import { Copyright } from './Copyright';

export function FooterContent() {
  return (
    <div className='container max-w-6xl mx-auto px-4'>
      {/* Main Footer Content */}
      <div className='flex flex-col sm:flex-row justify-between gap-8 pb-6'>
        <CommunitySection className='flex-1 max-w-sm' />

        <div className='flex flex-col sm:flex-row gap-6 sm:gap-8'>
          <QuickLinksSection className='flex-1 min-w-[180px]' />
          <ContactSection className='flex-1 min-w-[180px]' />
        </div>
      </div>

      {/* Copyright Section */}
      <Copyright />
    </div>
  );
}
