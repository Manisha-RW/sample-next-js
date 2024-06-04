/**
 * @typedef {import("@prismicio/client").Content.ClientsSlice} ClientsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ClientsSlice>} ClientsProps
 * @param {ClientsProps}
 */
const Clients = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for clients (variation: {slice.variation}) Slices
    </section>
  );
};

export default Clients;
