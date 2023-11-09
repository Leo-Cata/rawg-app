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
        className="w-full rounded-2xl "
      />
    </div>
  );
};

export default ImageGamePage;
