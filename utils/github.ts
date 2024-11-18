type GitHubRepo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    topics: string[];
    language: string;
    stargazers_count: number;
    fork: boolean;
    created_at: string;
}
  
export async function getGithubProjects(): Promise<GitHubRepo[]> {
    const response = await fetch('https://api.github.com/users/0b501e7e/repos', {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
            ...(process.env.GITHUB_TOKEN && {
                'Authorization': `token ${process.env.GITHUB_TOKEN}`
            })
        },
        next: { revalidate: 3600 }
    });
  
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub projects');
    }
  
    const repos = await response.json();
    return repos
        .filter((repo: GitHubRepo) => !repo.fork)
        .sort((a: GitHubRepo, b: GitHubRepo) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .slice(0, 9);
}
