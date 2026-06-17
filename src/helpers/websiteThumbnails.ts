import React from 'react';

import ImgAllAmericanSod from '~images/websites/thumbnail/all-american-sod.jpg';
import ImgBarrierPestControl from '~images/websites/thumbnail/barrier-pest-control.jpg';
import ImgBeitLehi from '~images/websites/thumbnail/beit-lehi.jpg';
import ImgBlueMondaySalon from '~images/websites/thumbnail/blue-monday-salon.jpg';
import ImgChatbooksComBookCreation from '~images/websites/thumbnail/chatbooks-com-book-creation.jpg';
import ImgChatbooksComCardsQuickFlowSources from '~images/websites/thumbnail/chatbooks-com-cards-quick-flow-sources.jpg';
import ImgChatbooksComCardsTaxonomyPages from '~images/websites/thumbnail/chatbooks-com-cards-taxonomy-pages.jpg';
import ImgChatbooksComPremiumLayflat from '~images/websites/thumbnail/chatbooks-com-premium-layflat.jpg';
import ImgCreativeMediaEducation from '~images/websites/thumbnail/creative-media-education.jpg';
import ImgDebtFreePlanning from '~images/websites/thumbnail/debt-free-planning.jpg';
import ImgEnsparkElearningCourses from '~images/websites/thumbnail/enspark-elearning-courses.jpg';
import ImgEnsparkFlashBanner from '~images/websites/thumbnail/enspark-flash-banner.jpg';
import ImgEnsparkLearningManagementSystem from '~images/websites/thumbnail/enspark-learning-management-system.jpg';
import ImgEnsparkMarketingWebsite from '~images/websites/thumbnail/enspark-marketing-website.jpg';
import ImgEricArocaMotivationalSpeaker from '~images/websites/thumbnail/eric-aroca-motivational-speaker.jpg';
import ImgFirstMile from '~images/websites/thumbnail/first-mile.jpg';
import ImgFoodCards from '~images/websites/thumbnail/food-cards.jpg';
import ImgHokiSkateboardsReactNativeGame from '~images/websites/thumbnail/hoki-skateboards-react-native-game.jpg';
import ImgHokiSkateboards from '~images/websites/thumbnail/hoki-skateboards.jpg';
import ImgLavavolt from '~images/websites/thumbnail/lavavolt.jpg';
import ImgLindseyhokiCom from '~images/websites/thumbnail/lindseyhoki-com.jpg';
import ImgMissingImages from '~images/websites/thumbnail/missing-images.jpg';
import ImgNewLifeRecovery from '~images/websites/thumbnail/new-life-recovery.jpg';
import ImgOverstockComAdminPortal from '~images/websites/thumbnail/overstock-com-admin-portal.jpg';
import ImgOverstockComAffiliateLinks from '~images/websites/thumbnail/overstock-com-affiliate-links.jpg';
import ImgOverstockComAmpFeaturedProduct from '~images/websites/thumbnail/overstock-com-amp-featured-product.jpg';
import ImgOverstockComCustomerReviewImages from '~images/websites/thumbnail/overstock-com-customer-review-images.jpg';
import ImgOverstockComHackathon2017 from '~images/websites/thumbnail/overstock-com-hackathon-2017.jpg';
import ImgOverstockComResponsiveSeeAllReviewsPage from '~images/websites/thumbnail/overstock-com-responsive-see-all-reviews-page.jpg';
import ImgOverstockComReviewsBreakout from '~images/websites/thumbnail/overstock-com-reviews-breakout.jpg';
import ImgOverstockComRewardsForReviews from '~images/websites/thumbnail/overstock-com-rewards-for-reviews.jpg';
import ImgOverstockComSeeAllReviewsPageMobileAddToCart from '~images/websites/thumbnail/overstock-com-see-all-reviews-page-mobile-add-to-cart.jpg';
import ImgOverstockComStarRatingsColor from '~images/websites/thumbnail/overstock-com-star-ratings-color.jpg';
import ImgParadigmLifeLms from '~images/websites/thumbnail/paradigm-life-lms.jpg';
import ImgParadigmLife from '~images/websites/thumbnail/paradigm-life.jpg';
import ImgRgdjanitorial from '~images/websites/thumbnail/rgdjanitorial.jpg';
import ImgRookeCapitalManagementFinancialPlanning from '~images/websites/thumbnail/rooke-capital-management-financial-planning.jpg';
import ImgRoomChoiceStudentHousingSoftware from '~images/websites/thumbnail/room-choice-student-housing-software.jpg';
import ImgSaintsAndSinnersHalfMarathonAndTeamRelay from '~images/websites/thumbnail/saints-and-sinners-half-marathon-and-team-relay.jpg';
import ImgSolitudepg from '~images/websites/thumbnail/solitudepg.jpg';
import ImgSouthamConsulting from '~images/websites/thumbnail/southam-consulting.jpg';
import ImgSpiffDocuments from '~images/websites/thumbnail/spiff-documents.jpg';
import ImgSpiffTeamHierarchy from '~images/websites/thumbnail/spiff-team-hierarchy.jpg';
import ImgSpiffTranslations from '~images/websites/thumbnail/spiff-translations.jpg';
import ImgThePuttingTour from '~images/websites/thumbnail/the-putting-tour.jpg';
import ImgTrulyLindseyPhotography from '~images/websites/thumbnail/truly-lindsey-photography.jpg';
import ImgUtahCasa from '~images/websites/thumbnail/utah-casa.jpg';
import ImgWeddingWebsite from '~images/websites/thumbnail/wedding-website.jpg';
import ImgWininsights from '~images/websites/thumbnail/wininsights.jpg';

// Project itemKey -> hashed thumbnail URL. Built from static imports so each
// thumbnail is fingerprinted by webpack (cache-busting) and validated at build
// time, rather than resolved from a runtime PUBLIC_URL string.
const THUMBNAILS: Record<string, string> = {
	'all-american-sod': ImgAllAmericanSod,
	'barrier-pest-control': ImgBarrierPestControl,
	'beit-lehi': ImgBeitLehi,
	'blue-monday-salon': ImgBlueMondaySalon,
	'chatbooks-com-book-creation': ImgChatbooksComBookCreation,
	'chatbooks-com-cards-quick-flow-sources':
		ImgChatbooksComCardsQuickFlowSources,
	'chatbooks-com-cards-taxonomy-pages': ImgChatbooksComCardsTaxonomyPages,
	'chatbooks-com-premium-layflat': ImgChatbooksComPremiumLayflat,
	'creative-media-education': ImgCreativeMediaEducation,
	'debt-free-planning': ImgDebtFreePlanning,
	'enspark-elearning-courses': ImgEnsparkElearningCourses,
	'enspark-flash-banner': ImgEnsparkFlashBanner,
	'enspark-learning-management-system': ImgEnsparkLearningManagementSystem,
	'enspark-marketing-website': ImgEnsparkMarketingWebsite,
	'eric-aroca-motivational-speaker': ImgEricArocaMotivationalSpeaker,
	'first-mile': ImgFirstMile,
	'food-cards': ImgFoodCards,
	'hoki-skateboards': ImgHokiSkateboards,
	'hoki-skateboards-react-native-game': ImgHokiSkateboardsReactNativeGame,
	lavavolt: ImgLavavolt,
	'lindseyhoki-com': ImgLindseyhokiCom,
	'new-life-recovery': ImgNewLifeRecovery,
	'overstock-com-admin-portal': ImgOverstockComAdminPortal,
	'overstock-com-affiliate-links': ImgOverstockComAffiliateLinks,
	'overstock-com-amp-featured-product': ImgOverstockComAmpFeaturedProduct,
	'overstock-com-customer-review-images': ImgOverstockComCustomerReviewImages,
	'overstock-com-hackathon-2017': ImgOverstockComHackathon2017,
	'overstock-com-responsive-see-all-reviews-page':
		ImgOverstockComResponsiveSeeAllReviewsPage,
	'overstock-com-reviews-breakout': ImgOverstockComReviewsBreakout,
	'overstock-com-rewards-for-reviews': ImgOverstockComRewardsForReviews,
	'overstock-com-see-all-reviews-page-mobile-add-to-cart':
		ImgOverstockComSeeAllReviewsPageMobileAddToCart,
	'overstock-com-star-ratings-color': ImgOverstockComStarRatingsColor,
	'paradigm-life': ImgParadigmLife,
	'paradigm-life-lms': ImgParadigmLifeLms,
	rgdjanitorial: ImgRgdjanitorial,
	'rooke-capital-management-financial-planning':
		ImgRookeCapitalManagementFinancialPlanning,
	'room-choice-student-housing-software': ImgRoomChoiceStudentHousingSoftware,
	'saints-and-sinners-half-marathon-and-team-relay':
		ImgSaintsAndSinnersHalfMarathonAndTeamRelay,
	solitudepg: ImgSolitudepg,
	'southam-consulting': ImgSouthamConsulting,
	'spiff-documents': ImgSpiffDocuments,
	'spiff-team-hierarchy': ImgSpiffTeamHierarchy,
	'spiff-translations': ImgSpiffTranslations,
	'the-putting-tour': ImgThePuttingTour,
	'truly-lindsey-photography': ImgTrulyLindseyPhotography,
	'utah-casa': ImgUtahCasa,
	'wedding-website': ImgWeddingWebsite,
	wininsights: ImgWininsights,
};

export const websiteThumbnailSrc = (itemKey: string): string =>
	THUMBNAILS[itemKey] ?? ImgMissingImages;

// Last-resort fallback if a resolved thumbnail fails to load at runtime.
export const handleThumbnailError = (
	event: React.SyntheticEvent<HTMLImageElement>,
) => {
	const img = event.currentTarget;

	// Stop listening so a missing fallback can't retrigger this handler.
	img.onerror = null;
	img.src = ImgMissingImages;
};
