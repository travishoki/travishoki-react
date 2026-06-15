import { createContext, useContext } from 'react';

type TechCatalogueContextValue = {
	// Whether tech icons render as circles (vs rounded squares).
	circle: boolean;
	// The grid column class (e.g. 'col-6 col-md-4') applied to each tech item's
	// <li> in the expanded layout.
	itemClassName: string | undefined;
};

// Stable per-catalogue config, shared via context so it doesn't have to be
// drilled through Content → SectionGroup → List → Item.
const TechCatalogueContext = createContext<TechCatalogueContextValue>({
	circle: false,
	itemClassName: undefined,
});

export const TechCatalogueProvider = TechCatalogueContext.Provider;

export const useCircle = () => useContext(TechCatalogueContext).circle;

export const useItemClassName = () =>
	useContext(TechCatalogueContext).itemClassName;
