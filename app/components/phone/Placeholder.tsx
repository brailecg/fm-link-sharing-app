const placeHolderVariant = {
  imageHolder: "w-24 text h-24 rounded-full",
  nameHolder: "w-[160px] h-4 rounded-full",
  emailHolder: "w-20 h-2 rounded-full",
  linkHolder: "w-[237px] h-[44px] rounded-md",
};
type PlaceHolderVariantKeys = keyof typeof placeHolderVariant;
const Placeholder = ({ variant }: { variant: PlaceHolderVariantKeys }) => {
  return (
    <div
      className={`${placeHolderVariant[variant]} bg-main-grey-outline`}></div>
  );
};

export default Placeholder;
