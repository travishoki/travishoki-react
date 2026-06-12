import React, { useState } from 'react';

import { CarouselDots } from '~components/CarouselDots/CarouselDots';
import { ZoomOverlay } from '~components/ImageModal/ImageMaximizable/ZoomOverlay/ZoomOverlay';
import { ImageModal } from '~components/ImageModal/ImageModal/ImageModal';
import {
	handleWebsiteImageError,
	websiteGalleryImageSrc,
} from '~helpers/websiteImages';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';

import styles from './ProjectImageCarousel.module.scss';

export const ProjectImageCarousel = ({
	company,
	gallery,
	subtitle,
}: ProjectImageCarouselProps) => {
	const [page, setPage] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const [dimensions, setDimensions] = useState<number[]>([0, 0]);

	const goToPage = (index: number) =>
		setPage((index + gallery.length) % gallery.length);

	const currentSrc = websiteGalleryImageSrc(gallery[page].filename);

	const alt = subtitle ? `${company} ${subtitle}` : company;
	const { caption } = gallery[page];

	return (
		<div className={styles.projectImageCarousel}>
			{modalOpen && (
				<ImageModal
					alt={alt}
					dimensions={dimensions}
					onClose={() => setModalOpen(false)}
					onNext={() => goToPage(page + 1)}
					onPrev={() => goToPage(page - 1)}
					src={currentSrc}
				/>
			)}

			<div className={styles.imageContainer}>
				<ZoomOverlay onClick={() => setModalOpen(true)} />

				<img
					alt={alt}
					className="pointer"
					onError={handleWebsiteImageError('gallery')}
					onLoad={(event) =>
						setDimensions([
							event.currentTarget.naturalWidth,
							event.currentTarget.naturalHeight,
						])
					}
					src={currentSrc}
				/>
			</div>

			{caption && <p className={styles.projectImageCaption}>{caption}</p>}

			<CarouselDots
				activeIndex={page}
				count={gallery.length}
				onSelect={setPage}
			/>
		</div>
	);
};

type ProjectImageCarouselProps = {
	company: ProjectType['company'];
	gallery: NonNullable<ProjectType['gallery']>;
	subtitle: ProjectType['subtitle'];
};
