import { GalleryImage } from '~components/ImageGallery/types';
import ImgHokiSkateboards1Home from '~images/websites/gallery/hoki-skateboards-1-home.jpg';
import ImgHokiSkateboards2Levels from '~images/websites/gallery/hoki-skateboards-2-levels.jpg';
import ImgHokiSkateboards3Game from '~images/websites/gallery/hoki-skateboards-3-game.jpg';
import ImgHokiSkateboards4Game from '~images/websites/gallery/hoki-skateboards-4-game.jpg';
import ImgHokiSkateboards5Coloring from '~images/websites/gallery/hoki-skateboards-5-coloring.jpg';
import ImgHokiSkateboards6Book from '~images/websites/gallery/hoki-skateboards-6-book.jpg';
import ImgHokiSkateboards7Shop from '~images/websites/gallery/hoki-skateboards-7-shop.jpg';
import ImgHokiSkateboards8BuildABoard from '~images/websites/gallery/hoki-skateboards-8-build-a-board.jpg';
import ImgHokiSkateboards9Login from '~images/websites/gallery/hoki-skateboards-9-login.jpg';

export const APP_GALLERY_IMAGES: GalleryImage[] = [
	ImgHokiSkateboards1Home,
	ImgHokiSkateboards2Levels,
	ImgHokiSkateboards3Game,
	ImgHokiSkateboards4Game,
	ImgHokiSkateboards5Coloring,
	ImgHokiSkateboards6Book,
	ImgHokiSkateboards7Shop,
	ImgHokiSkateboards8BuildABoard,
	ImgHokiSkateboards9Login,
].map((image, index) => ({
	alt: `Hoki Skateboards app screen ${index + 1}`,
	filename: image,
}));
