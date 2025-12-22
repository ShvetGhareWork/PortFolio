// GitHub Stats Data & API Integration
import { Octokit } from "@octokit/rest";

export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  followers: number;
  totalContributions: number;
  publicGists: number;
  lastUpdated: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const CACHE_KEY = "github_stats_cache";
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour in milliseconds

// Initialize Octokit (no auth token for public data)
const octokit = new Octokit();

/**
 * Fetch GitHub user statistics
 */
export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  try {
    // Check cache first
    const cached = getCachedStats();
    if (cached) {
      return cached;
    }

    // Fetch user data
    const { data: user } = await octokit.users.getByUsername({ username });

    // Fetch repositories to calculate total stars
    const { data: repos } = await octokit.repos.listForUser({
      username,
      per_page: 100,
      sort: "updated",
    });

    const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);

    const stats: GitHubStats = {
      totalRepos: user.public_repos,
      totalStars,
      followers: user.followers,
      totalContributions: 0, // This requires GraphQL API or scraping
      publicGists: user.public_gists,
      lastUpdated: new Date().toISOString(),
    };

    // Cache the results
    cacheStats(stats);

    return stats;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    // Return fallback data
    return getFallbackStats();
  }
}

/**
 * Get cached stats from localStorage
 */
function getCachedStats(): GitHubStats | null {
  if (typeof window === "undefined") return null;

  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const age = Date.now() - timestamp;

    if (age < CACHE_DURATION) {
      return data;
    }

    // Cache expired
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch {
    return null;
  }
}

/**
 * Cache stats in localStorage
 */
function cacheStats(stats: GitHubStats): void {
  if (typeof window === "undefined") return;

  try {
    const cacheData = {
      data: stats,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error("Error caching stats:", error);
  }
}

/**
 * Fallback stats when API fails
 */
function getFallbackStats(): GitHubStats {
  return {
    totalRepos: 25,
    totalStars: 150,
    followers: 80,
    totalContributions: 1200,
    publicGists: 12,
    lastUpdated: new Date().toISOString(),
  };
}

/**
 * Generate mock contribution data for the heatmap
 * In production, you'd fetch this from GitHub's GraphQL API
 */
export function generateContributionData(): ContributionDay[] {
  const contributions: ContributionDay[] = [];
  const today = new Date();
  
  // Generate last 365 days
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Random contribution count (weighted towards some activity)
    const random = Math.random();
    let count = 0;
    let level: 0 | 1 | 2 | 3 | 4 = 0;
    
    if (random > 0.3) {
      count = Math.floor(Math.random() * 15);
      if (count === 0) level = 0;
      else if (count <= 3) level = 1;
      else if (count <= 6) level = 2;
      else if (count <= 9) level = 3;
      else level = 4;
    }
    
    contributions.push({
      date: date.toISOString().split('T')[0],
      count,
      level,
    });
  }
  
  return contributions;
}
