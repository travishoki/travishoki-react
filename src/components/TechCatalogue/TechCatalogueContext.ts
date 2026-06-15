import { createContext, useContext } from 'react';

type TechCatalogueContextValue = {
	// Whether tech icons render as circles (vs rounded squares).
	circle: boolean;
};

// Stable per-catalogue config, shared via context so it doesn't have to be
// drilled through Content → SectionGroup → List → Item.
const TechCatalogueContext = createContext<TechCatalogueContextValue>({
	circle: false,
});

export const TechCatalogueProvider = TechCatalogueContext.Provider;

export const useCircle = () => useContext(TechCatalogueContext).circle;
