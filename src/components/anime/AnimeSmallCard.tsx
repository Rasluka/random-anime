import { IFullAnime } from "../../interfaces/fullAnime.interface";

export default function AnimeSmallCard(animeData: IFullAnime) {
  console.log(
    "Doing something with this data: ",
    animeData,
    animeData.images.jpg.large_image_url
  );

  return (
    <div className="max-w-md  md:w-4/5 lg:flex my-3 mx-auto hover:opacity-75">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: `url(${animeData.images.jpg.large_image_url})`,
        }}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {animeData.title_english}
          </div>
          <p className="text-gray-700 text-base">
            {animeData.synopsis.substring(0, 150) + "..."}
          </p>
        </div>
        {/* <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={animeData.images.jpg.image_url}
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm"></div>
        </div> */}
      </div>
    </div>
  );
}
