import create from 'zustand';

const navStore = create((set) => ({
  sc_collector: null,
  sc_agent: null,
  curSection: null,
  setCollector: (section_id) =>
    set((state) => ({ ...state, sc_collector: section_id })),
  setAgent: (section_id) =>
    set((state) => create({ ...state, sc_agent: section_id })),
  setSection: (section) => set((state) => ({ ...state, curSection: section })),
}));

export default navStore;

/**
 * the functions take in state varibles
 * these functions are also like redux actions
 * They take in the section id and set it
 * they are called in the component
 * in a typical project these would be done with a reducer or an action file
 */
