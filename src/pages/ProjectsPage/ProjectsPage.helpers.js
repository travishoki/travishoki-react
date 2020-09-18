const inArr = (item, arr) => {
	return arr.filter((thing) => {
		return thing === item;
	}).length > 0;
};

export const filterProjects = (projects, filter, searchTerm) => {
	//Filter
	if (filter !== null){
		projects = projects.filter((item) => {
			return inArr(filter, item.techs);
		});
	}

	//Search
	if (searchTerm !== '') {
		projects = projects.filter((item) => {
			const a = ["title", "subtitle", "desc", "contributions"];

			for (let i = 0 ; i < a.length ; i++) {
				const itemKey = a[i];
				const str = String(item[itemKey]).toLowerCase();

				if (str.indexOf(searchTerm.toLowerCase()) > -1) {
					return true;
				}
			}

			return false;
		});
	}

	return projects;
};

export const createProjectsPageUrl = (path, filter, search) => {
	if (search) {
		return `${path}/${filter || null}/${search}`;
	} else if (filter) {
		return `${path}/${filter}`;
	}

	return path;
};
