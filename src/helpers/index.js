// Helpers
const getRepositoriesByOrg = (projects) => {
	return projects.reduce((acc, r) => {
		if (r.contributor) return acc;

		const repoPathname = r.url.replace(/^https?:\/\/github.com\//, "");
		const [org, repo] = repoPathname.split("/");

		if (!(org in acc)) acc[org] = [];
		acc[org].push(repo);

		return acc;
	}, {});
};

export { getRepositoriesByOrg };
