import { Logo } from '../Header/Logo';
import { SocialLinks } from './SocialLinks';
import { COMMUNITY_INFO } from './constants';

interface CommunitySectionProps {
  className?: string;
}

export function CommunitySection({ className }: CommunitySectionProps) {
  return (
    <div className={`flex-1 min-w-[220px] space-y-4 ${className}`}>
      <Logo className='text-primary-foreground' />

      <div className='space-y-2'>
        <p className='text-lg font-medium text-muted-foreground'>
          {COMMUNITY_INFO.tagline}
        </p>
        <p className='text-muted-foreground/80 leading-relaxed'>
          {COMMUNITY_INFO.description}
        </p>
      </div>

      <SocialLinks />
    </div>
  );
}
