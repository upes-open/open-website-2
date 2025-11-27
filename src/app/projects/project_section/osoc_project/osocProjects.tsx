import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import {
  getReposByTopic,
  getGithubOgImage,
  type Project,
} from '@/lib/githubApi';

export default async function OsocProjects() {
  let projects: Project[] = [];

  try {
    const repos = await getReposByTopic('upes-open', 'project-osoc-2025');

    projects = repos.map((repo) => ({
      src: getGithubOgImage(repo.htmlUrl),
      alt: `${repo.name} project image`,
      githubLink: repo.htmlUrl,
      projectName: repo.name,
      shortDescription: repo.description || 'No description available',
    }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    projects = [];
  }

  return (
    <div className='w-screen flex flex-col items-center p-1 overflow-x-hidden'>
      <div className='osoc_project w-[100%] mt-7 text-center flex flex-col items-center'>
        <h1 className='font-bold text-2xl'>OSOC PROJECTS</h1>

        {projects.length > 0 ? (
          <InfiniteMovingCards
            projects={projects}
            pauseOnHover={true}
            direction='left'
            speed='slow'
          />
        ) : (
          <p className='text-neutral-600 dark:text-gray-400 mt-4'>
            No projects found with the tag &quot;project-osoc-2025&quot;
          </p>
        )}
      </div>
    </div>
  );
}
