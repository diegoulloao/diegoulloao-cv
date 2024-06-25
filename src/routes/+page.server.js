// Env vars
import { GITHUB_PAT } from "$env/static/private";

// Queries
import { query } from "@query";

export const load = async () => {
  let sponsors = null;
  let projects = null;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${GITHUB_PAT}`
      },
      body: JSON.stringify({ query })
    });

    if (response.status !== 200) {
      throw new Error(`Status ${response.status}`);
    }

    const { data } = await response.json();

    if (!Object.keys(data).length) {
      throw new Error("No data error");
    }

    sponsors = data.user?.sponsorshipsAsMaintainer?.nodes?.map((s) => ({
      name: s.sponsorEntity.name,
      user: s.sponsorEntity.login,
      avatar: s.sponsorEntity.avatarUrl
    }));

    projects = Object.entries(data).reduce((acc, [key, obj]) => {
      if (key.startsWith("org")) {
        Object.values(obj).forEach((repo) => {
          acc[repo.name] = {
            stars: repo.stargazers.totalCount
          };
        });
      }

      return acc;
    }, {});
  } catch (error) {
    console.error(error);
  }

  return {
    sponsors,
    projects
  };
};
