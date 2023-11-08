const ImageGamePage = ({
  background_image,
  name,
}: {
  background_image: string;
  name: string;
}) => {
  return (
    <div className="flex justify-center">
      <img
        src={background_image}
        alt={`${name} background img`}
        className="max-w-auto rounded-2xl sm:max-w-[640px]"
      />
    </div>
  );
};

export default ImageGamePage;
