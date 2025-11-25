import { UrlObject } from 'url';

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

export default getGithubOgImage;
