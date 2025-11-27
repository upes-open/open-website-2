import { UrlObject } from 'url';

export interface RepoInfo {
  name: string;
  fullName: string;
  description: string | null;
  htmlUrl: string;
  cloneUrl: string;
  stars: number;
  forks: number;
  topics: string[];
  createdAt: string;
  updatedAt: string;
  language: string | null;
}

export interface Project {
  src: string;
  alt: string;
  githubLink: string;
  projectName: string;
  shortDescription: string;
}

export interface CardItem {
  src: string;
  alt: string;
  githubLink: string;
  name: string;
  shortDescription: string;
}

interface GitHubRepo {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  language: string | null;
}

export function getGithubOgImage(githubLink?: string | UrlObject): string {
  const PLACEHOLDER = '/images/placeholder.png';

  if (!githubLink || typeof githubLink !== 'string') return PLACEHOLDER;

  const input = githubLink.trim();

  const regex =
    /(?:github(?:\.com)?[:/]+)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\.git)?/i;
  const match = input.match(regex);

  if (!match) return PLACEHOLDER;

  let [, owner, repo] = match;

  // strip possible trailing slashes or query strings from repo
  repo = repo.replace(/[:?#].*$/, '');

  const encOwner = encodeURIComponent(owner);
  const encRepo = encodeURIComponent(repo);

  return `https://opengraph.githubassets.com/1/${encOwner}/${encRepo}`;
}

export async function getReposByTopic(
  org: string,
  topic: string,
): Promise<RepoInfo[]> {
  const url = `https://api.github.com/search/repositories?q=org:${org}+topic:${topic}&per_page=100`;

  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN as string}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API Error: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();

  return data.items.map((repo: GitHubRepo) => ({
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    htmlUrl: repo.html_url,
    cloneUrl: repo.clone_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    topics: repo.topics || [],
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
    language: repo.language,
  })) as RepoInfo[];
}
