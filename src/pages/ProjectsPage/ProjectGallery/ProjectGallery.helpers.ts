import { TechFilterType } from '~const/Tech.const';
import { ProjectType } from '../ProjectsPage.data';

const inArr = (item: string, arr: string[]) => {
	return (
		arr.filter((thing) => {
			return thing === item;
		}).length > 0
	);
};

export const filterProjects = (
	projects: ProjectType[],
	filter: TechFilterType,
	searchTerm: string,
) => {
	let newProjects = projects;

	//Filter
	if (filter !== null) {
		newProjects = projects.filter((item) => {
			return inArr(filter, item.techs);
		});
	}

	//Search
	if (searchTerm !== '') {
		newProjects = projects.filter((item) => {
			const a: (keyof ProjectType)[] = [
				'title',
				'subtitle',
				'desc',
				'contributions',
			];

			for (let i = 0; i < a.length; i++) {
				const itemKey = a[i];
				const str = String(item[itemKey]).toLowerCase();

				if (str.indexOf(searchTerm.toLowerCase()) > -1) {
					return true;
				}
			}

			return false;
		});
	}

	return newProjects;
};

export const createProjectsPageUrl = (
	path: string,
	filter?: TechFilterType,
	search?: string,
) => {
	if (search) {
		return `${path}/${filter || null}/${search}`;
	} else if (filter) {
		return `${path}/${filter}`;
	}

	return path;
};
