import { createContext, useContext } from 'react';

// The grid column class (e.g. 'col-6 col-md-4') applied to each tech item's
// <li> in the expanded layout. Shared via context so it doesn't have to be
// drilled through Content → SectionGroup → List → Item.
const ItemClassNameContext = createContext<string | undefined>(undefined);

export const ItemClassNameProvider = ItemClassNameContext.Provider;

export const useItemClassName = () => useContext(ItemClassNameContext);
