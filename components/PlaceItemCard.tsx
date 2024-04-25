import Image from 'next/image';
import CafePhoto from '../public/cafephoto.jpg';
const BASE_URL_PHOTO =
  'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400';

const PlaceItemCard = ({ listData }: any) => {
  const imageUrl =
    listData && listData.photos && listData.photos.length > 0
      ? `${BASE_URL_PHOTO}&photo_reference=${listData.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}`
      : CafePhoto;
  return (
    <div className="max-w-[400px] w-full max-h-[400px] bg-white">
      <div className="w-full relative h-1/2 aspect-[16/9]">
        <Image src={imageUrl} alt="Place Photo" fill objectFit="cover" />
      </div>
      <div className="flex h-1/2 flex-col">
        <p>{listData.name}</p>
        <p>{listData.formatted_address}</p>
        <div className="flex">
          <p>{listData.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceItemCard;
