import { DisplayCardGrid } from '@/components/ui/cardGrid';
import {
  getReposByTopic,
  getGithubOgImage,
  type CardItem,
} from '@/lib/githubApi';

export default async function OtherProjects() {
  let cards: CardItem[] = [];

  try {
    const repos = await getReposByTopic('upes-open', 'project');

    cards = repos.map((repo) => ({
      src: getGithubOgImage(repo.htmlUrl),
      alt: `${repo.name} project image`,
      githubLink: repo.htmlUrl,
      name: repo.name,
      shortDescription: repo.description || 'No description available',
    }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    cards = [];
  }

  return (
    <div className='w-[100vw] flex flex-col items-center p-1 overflow-x-hidden'>
      <h1 className='font-bold text-2xl'>OTHER PROJECTS</h1>

      <div className='w-[100vw] flex justify-center'>
        {cards.length > 0 ? (
          <DisplayCardGrid cards={cards} className='gap-10' />
        ) : (
          <p className='text-neutral-600 dark:text-gray-400 mt-4'>
            No projects found with the tag &quot;project&quot;
          </p>
        )}
      </div>
    </div>
  );
}
