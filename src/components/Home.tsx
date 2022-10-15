import React, { useState, useEffect } from "react";
import { changeTabTitle } from "../utils/changeTabTitle";
import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
// import { getTopAnimes } from "../services/animeService";
import AnimeSmallCard from "./anime/AnimeSmallCard";
import { IFullAnime } from "../interfaces/fullAnime.interface";
import { Carousel } from "flowbite-react";

export default function Home() {
  changeTabTitle("Home");

  const [topFavAnimes, setTopFavAnimes] = useState({
    data: [
      {
        mal_id: 5114,
        url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1223/96541t.jpg",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1223/96541l.jpg",
          },
          webp: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1223/96541.webp",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1223/96541t.webp",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1223/96541l.webp",
          },
        },
        trailer: {
          youtube_id: "--IcmZkvL0Q",
          url: "https://www.youtube.com/watch?v=--IcmZkvL0Q",
          embed_url:
            "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1",
          images: {
            image_url: "https://img.youtube.com/vi/--IcmZkvL0Q/default.jpg",
            small_image_url:
              "https://img.youtube.com/vi/--IcmZkvL0Q/sddefault.jpg",
            medium_image_url:
              "https://img.youtube.com/vi/--IcmZkvL0Q/mqdefault.jpg",
            large_image_url:
              "https://img.youtube.com/vi/--IcmZkvL0Q/hqdefault.jpg",
            maximum_image_url:
              "https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg",
          },
        },
        approved: true,
        titles: [
          {
            type: "Default",
            title: "Fullmetal Alchemist: Brotherhood",
          },
          {
            type: "Synonym",
            title: "Hagane no Renkinjutsushi: Fullmetal Alchemist",
          },
          {
            type: "Synonym",
            title: "Fullmetal Alchemist (2009)",
          },
          {
            type: "Synonym",
            title: "FMA",
          },
          {
            type: "Synonym",
            title: "FMAB",
          },
          {
            type: "Japanese",
            title: "鋼の錬金術師 FULLMETAL ALCHEMIST",
          },
          {
            type: "English",
            title: "Fullmetal Alchemist: Brotherhood",
          },
          {
            type: "French",
            title: "Fullmetal Alchemist Brotherhood",
          },
        ],
        title: "Fullmetal Alchemist: Brotherhood",
        title_english: "Fullmetal Alchemist: Brotherhood",
        title_japanese: "鋼の錬金術師 FULLMETAL ALCHEMIST",
        title_synonyms: [
          "Hagane no Renkinjutsushi: Fullmetal Alchemist",
          "Fullmetal Alchemist (2009)",
          "FMA",
          "FMAB",
        ],
        type: "TV",
        source: "Manga",
        episodes: 64,
        status: "Finished Airing",
        airing: false,
        aired: {
          from: "2009-04-05T00:00:00+00:00",
          to: "2010-07-04T00:00:00+00:00",
          prop: {
            from: {
              day: 5,
              month: 4,
              year: 2009,
            },
            to: {
              day: 4,
              month: 7,
              year: 2010,
            },
          },
          string: "Apr 5, 2009 to Jul 4, 2010",
        },
        duration: "24 min per ep",
        rating: "R - 17+ (violence & profanity)",
        score: 9.13,
        scored_by: 1906976,
        rank: 1,
        popularity: 3,
        members: 2989755,
        favorites: 208471,
        synopsis:
          "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world. [Written by MAL Rewrite]",
        background: null,
        season: "spring",
        year: 2009,
        broadcast: {
          day: "Sundays",
          time: "17:00",
          timezone: "Asia/Tokyo",
          string: "Sundays at 17:00 (JST)",
        },
        producers: [
          {
            mal_id: 17,
            type: "anime",
            name: "Aniplex",
            url: "https://myanimelist.net/anime/producer/17/Aniplex",
          },
          {
            mal_id: 58,
            type: "anime",
            name: "Square Enix",
            url: "https://myanimelist.net/anime/producer/58/Square_Enix",
          },
          {
            mal_id: 143,
            type: "anime",
            name: "Mainichi Broadcasting System",
            url: "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System",
          },
          {
            mal_id: 1155,
            type: "anime",
            name: "Studio Moriken",
            url: "https://myanimelist.net/anime/producer/1155/Studio_Moriken",
          },
        ],
        licensors: [
          {
            mal_id: 102,
            type: "anime",
            name: "Funimation",
            url: "https://myanimelist.net/anime/producer/102/Funimation",
          },
          {
            mal_id: 493,
            type: "anime",
            name: "Aniplex of America",
            url: "https://myanimelist.net/anime/producer/493/Aniplex_of_America",
          },
        ],
        studios: [
          {
            mal_id: 4,
            type: "anime",
            name: "Bones",
            url: "https://myanimelist.net/anime/producer/4/Bones",
          },
        ],
        genres: [
          {
            mal_id: 1,
            type: "anime",
            name: "Action",
            url: "https://myanimelist.net/anime/genre/1/Action",
          },
          {
            mal_id: 2,
            type: "anime",
            name: "Adventure",
            url: "https://myanimelist.net/anime/genre/2/Adventure",
          },
          {
            mal_id: 8,
            type: "anime",
            name: "Drama",
            url: "https://myanimelist.net/anime/genre/8/Drama",
          },
          {
            mal_id: 10,
            type: "anime",
            name: "Fantasy",
            url: "https://myanimelist.net/anime/genre/10/Fantasy",
          },
        ],
        explicit_genres: [],
        themes: [
          {
            mal_id: 38,
            type: "anime",
            name: "Military",
            url: "https://myanimelist.net/anime/genre/38/Military",
          },
        ],
        demographics: [
          {
            mal_id: 27,
            type: "anime",
            name: "Shounen",
            url: "https://myanimelist.net/anime/genre/27/Shounen",
          },
        ],
      },
      {
        mal_id: 11061,
        url: "https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1337/99013t.jpg",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
          },
          webp: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1337/99013.webp",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1337/99013t.webp",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1337/99013l.webp",
          },
        },
        trailer: {
          youtube_id: "D9iTQRB4XRk",
          url: "https://www.youtube.com/watch?v=D9iTQRB4XRk",
          embed_url:
            "https://www.youtube.com/embed/D9iTQRB4XRk?enablejsapi=1&wmode=opaque&autoplay=1",
          images: {
            image_url: "https://img.youtube.com/vi/D9iTQRB4XRk/default.jpg",
            small_image_url:
              "https://img.youtube.com/vi/D9iTQRB4XRk/sddefault.jpg",
            medium_image_url:
              "https://img.youtube.com/vi/D9iTQRB4XRk/mqdefault.jpg",
            large_image_url:
              "https://img.youtube.com/vi/D9iTQRB4XRk/hqdefault.jpg",
            maximum_image_url:
              "https://img.youtube.com/vi/D9iTQRB4XRk/maxresdefault.jpg",
          },
        },
        approved: true,
        titles: [
          {
            type: "Default",
            title: "Hunter x Hunter (2011)",
          },
          {
            type: "Synonym",
            title: "HxH (2011)",
          },
          {
            type: "Japanese",
            title: "HUNTER×HUNTER（ハンター×ハンター）",
          },
          {
            type: "English",
            title: "Hunter x Hunter",
          },
          {
            type: "German",
            title: "Hunter x Hunter",
          },
          {
            type: "Spanish",
            title: "Hunter x Hunter",
          },
          {
            type: "French",
            title: "Hunter X Hunter",
          },
        ],
        title: "Hunter x Hunter (2011)",
        title_english: "Hunter x Hunter",
        title_japanese: "HUNTER×HUNTER（ハンター×ハンター）",
        title_synonyms: ["HxH (2011)"],
        type: "TV",
        source: "Manga",
        episodes: 148,
        status: "Finished Airing",
        airing: false,
        aired: {
          from: "2011-10-02T00:00:00+00:00",
          to: "2014-09-24T00:00:00+00:00",
          prop: {
            from: {
              day: 2,
              month: 10,
              year: 2011,
            },
            to: {
              day: 24,
              month: 9,
              year: 2014,
            },
          },
          string: "Oct 2, 2011 to Sep 24, 2014",
        },
        duration: "23 min per ep",
        rating: "PG-13 - Teens 13 or older",
        score: 9.04,
        scored_by: 1546585,
        rank: 9,
        popularity: 10,
        members: 2476739,
        favorites: 189466,
        synopsis:
          "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased. Ambitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path. During the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world. [Written by MAL Rewrite]",
        background: null,
        season: "fall",
        year: 2011,
        broadcast: {
          day: "Sundays",
          time: "10:55",
          timezone: "Asia/Tokyo",
          string: "Sundays at 10:55 (JST)",
        },
        producers: [
          {
            mal_id: 29,
            type: "anime",
            name: "VAP",
            url: "https://myanimelist.net/anime/producer/29/VAP",
          },
          {
            mal_id: 1003,
            type: "anime",
            name: "Nippon Television Network",
            url: "https://myanimelist.net/anime/producer/1003/Nippon_Television_Network",
          },
          {
            mal_id: 1365,
            type: "anime",
            name: "Shueisha",
            url: "https://myanimelist.net/anime/producer/1365/Shueisha",
          },
        ],
        licensors: [
          {
            mal_id: 119,
            type: "anime",
            name: "VIZ Media",
            url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
          },
        ],
        studios: [
          {
            mal_id: 11,
            type: "anime",
            name: "Madhouse",
            url: "https://myanimelist.net/anime/producer/11/Madhouse",
          },
        ],
        genres: [
          {
            mal_id: 1,
            type: "anime",
            name: "Action",
            url: "https://myanimelist.net/anime/genre/1/Action",
          },
          {
            mal_id: 2,
            type: "anime",
            name: "Adventure",
            url: "https://myanimelist.net/anime/genre/2/Adventure",
          },
          {
            mal_id: 10,
            type: "anime",
            name: "Fantasy",
            url: "https://myanimelist.net/anime/genre/10/Fantasy",
          },
        ],
        explicit_genres: [],
        themes: [],
        demographics: [
          {
            mal_id: 27,
            type: "anime",
            name: "Shounen",
            url: "https://myanimelist.net/anime/genre/27/Shounen",
          },
        ],
      },
      {
        mal_id: 21,
        url: "https://myanimelist.net/anime/21/One_Piece",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/6/73245t.jpg",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
          },
          webp: {
            image_url: "https://cdn.myanimelist.net/images/anime/6/73245.webp",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/6/73245t.webp",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/6/73245l.webp",
          },
        },
        trailer: {
          youtube_id: "l_98K4_6UQ0",
          url: "https://www.youtube.com/watch?v=l_98K4_6UQ0",
          embed_url:
            "https://www.youtube.com/embed/l_98K4_6UQ0?enablejsapi=1&wmode=opaque&autoplay=1",
          images: {
            image_url: "https://img.youtube.com/vi/l_98K4_6UQ0/default.jpg",
            small_image_url:
              "https://img.youtube.com/vi/l_98K4_6UQ0/sddefault.jpg",
            medium_image_url:
              "https://img.youtube.com/vi/l_98K4_6UQ0/mqdefault.jpg",
            large_image_url:
              "https://img.youtube.com/vi/l_98K4_6UQ0/hqdefault.jpg",
            maximum_image_url:
              "https://img.youtube.com/vi/l_98K4_6UQ0/maxresdefault.jpg",
          },
        },
        approved: true,
        titles: [
          {
            type: "Default",
            title: "One Piece",
          },
          {
            type: "Synonym",
            title: "OP",
          },
          {
            type: "Japanese",
            title: "ONE PIECE",
          },
          {
            type: "English",
            title: "One Piece",
          },
        ],
        title: "One Piece",
        title_english: "One Piece",
        title_japanese: "ONE PIECE",
        title_synonyms: ["OP"],
        type: "TV",
        source: "Manga",
        episodes: null,
        status: "Currently Airing",
        airing: true,
        aired: {
          from: "1999-10-20T00:00:00+00:00",
          to: null,
          prop: {
            from: {
              day: 20,
              month: 10,
              year: 1999,
            },
            to: {
              day: null,
              month: null,
              year: null,
            },
          },
          string: "Oct 20, 1999 to ?",
        },
        duration: "24 min",
        rating: "PG-13 - Teens 13 or older",
        score: 8.67,
        scored_by: 1129019,
        rank: 59,
        popularity: 25,
        members: 1978898,
        favorites: 179212,
        synopsis:
          'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy\'s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece. [Written by MAL Rewrite]',
        background:
          "Several anime-original arcs have been adapted into light novels, and the series has inspired 40+ video games as of 2021.",
        season: "fall",
        year: 1999,
        broadcast: {
          day: "Sundays",
          time: "09:30",
          timezone: "Asia/Tokyo",
          string: "Sundays at 09:30 (JST)",
        },
        producers: [
          {
            mal_id: 169,
            type: "anime",
            name: "Fuji TV",
            url: "https://myanimelist.net/anime/producer/169/Fuji_TV",
          },
          {
            mal_id: 416,
            type: "anime",
            name: "TAP",
            url: "https://myanimelist.net/anime/producer/416/TAP",
          },
          {
            mal_id: 1365,
            type: "anime",
            name: "Shueisha",
            url: "https://myanimelist.net/anime/producer/1365/Shueisha",
          },
        ],
        licensors: [
          {
            mal_id: 102,
            type: "anime",
            name: "Funimation",
            url: "https://myanimelist.net/anime/producer/102/Funimation",
          },
          {
            mal_id: 252,
            type: "anime",
            name: "4Kids Entertainment",
            url: "https://myanimelist.net/anime/producer/252/4Kids_Entertainment",
          },
        ],
        studios: [
          {
            mal_id: 18,
            type: "anime",
            name: "Toei Animation",
            url: "https://myanimelist.net/anime/producer/18/Toei_Animation",
          },
        ],
        genres: [
          {
            mal_id: 1,
            type: "anime",
            name: "Action",
            url: "https://myanimelist.net/anime/genre/1/Action",
          },
          {
            mal_id: 2,
            type: "anime",
            name: "Adventure",
            url: "https://myanimelist.net/anime/genre/2/Adventure",
          },
          {
            mal_id: 10,
            type: "anime",
            name: "Fantasy",
            url: "https://myanimelist.net/anime/genre/10/Fantasy",
          },
        ],
        explicit_genres: [],
        themes: [],
        demographics: [
          {
            mal_id: 27,
            type: "anime",
            name: "Shounen",
            url: "https://myanimelist.net/anime/genre/27/Shounen",
          },
        ],
      },
      {
        mal_id: 9253,
        url: "https://myanimelist.net/anime/9253/Steins_Gate",
        images: {
          jpg: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1935/127974t.jpg",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1935/127974l.jpg",
          },
          webp: {
            image_url:
              "https://cdn.myanimelist.net/images/anime/1935/127974.webp",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/1935/127974t.webp",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/1935/127974l.webp",
          },
        },
        trailer: {
          youtube_id: "27OZc-ku6is",
          url: "https://www.youtube.com/watch?v=27OZc-ku6is",
          embed_url:
            "https://www.youtube.com/embed/27OZc-ku6is?enablejsapi=1&wmode=opaque&autoplay=1",
          images: {
            image_url: "https://img.youtube.com/vi/27OZc-ku6is/default.jpg",
            small_image_url:
              "https://img.youtube.com/vi/27OZc-ku6is/sddefault.jpg",
            medium_image_url:
              "https://img.youtube.com/vi/27OZc-ku6is/mqdefault.jpg",
            large_image_url:
              "https://img.youtube.com/vi/27OZc-ku6is/hqdefault.jpg",
            maximum_image_url:
              "https://img.youtube.com/vi/27OZc-ku6is/maxresdefault.jpg",
          },
        },
        approved: true,
        titles: [
          {
            type: "Default",
            title: "Steins;Gate",
          },
          {
            type: "Japanese",
            title: "STEINS;GATE",
          },
          {
            type: "English",
            title: "Steins;Gate",
          },
        ],
        title: "Steins;Gate",
        title_english: "Steins;Gate",
        title_japanese: "STEINS;GATE",
        title_synonyms: [],
        type: "TV",
        source: "Visual novel",
        episodes: 24,
        status: "Finished Airing",
        airing: false,
        aired: {
          from: "2011-04-06T00:00:00+00:00",
          to: "2011-09-14T00:00:00+00:00",
          prop: {
            from: {
              day: 6,
              month: 4,
              year: 2011,
            },
            to: {
              day: 14,
              month: 9,
              year: 2011,
            },
          },
          string: "Apr 6, 2011 to Sep 14, 2011",
        },
        duration: "24 min per ep",
        rating: "PG-13 - Teens 13 or older",
        score: 9.08,
        scored_by: 1272794,
        rank: 4,
        popularity: 13,
        members: 2307596,
        favorites: 175689,
        synopsis:
          'Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo. However, when Rintarou decides to attend neuroscientist Kurisu Makise\'s conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN. Due to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity. [Written by MAL Rewrite]',
        background:
          "Steins;Gate is based on 5pb. and Nitroplus' released in 2009.",
        season: "spring",
        year: 2011,
        broadcast: {
          day: "Wednesdays",
          time: "02:05",
          timezone: "Asia/Tokyo",
          string: "Wednesdays at 02:05 (JST)",
        },
        producers: [
          {
            mal_id: 61,
            type: "anime",
            name: "Frontier Works",
            url: "https://myanimelist.net/anime/producer/61/Frontier_Works",
          },
          {
            mal_id: 108,
            type: "anime",
            name: "Media Factory",
            url: "https://myanimelist.net/anime/producer/108/Media_Factory",
          },
          {
            mal_id: 166,
            type: "anime",
            name: "Movic",
            url: "https://myanimelist.net/anime/producer/166/Movic",
          },
          {
            mal_id: 238,
            type: "anime",
            name: "AT-X",
            url: "https://myanimelist.net/anime/producer/238/AT-X",
          },
          {
            mal_id: 352,
            type: "anime",
            name: "Kadokawa Pictures Japan",
            url: "https://myanimelist.net/anime/producer/352/Kadokawa_Pictures_Japan",
          },
          {
            mal_id: 459,
            type: "anime",
            name: "Nitroplus",
            url: "https://myanimelist.net/anime/producer/459/Nitroplus",
          },
        ],
        licensors: [
          {
            mal_id: 102,
            type: "anime",
            name: "Funimation",
            url: "https://myanimelist.net/anime/producer/102/Funimation",
          },
        ],
        studios: [
          {
            mal_id: 314,
            type: "anime",
            name: "White Fox",
            url: "https://myanimelist.net/anime/producer/314/White_Fox",
          },
        ],
        genres: [
          {
            mal_id: 8,
            type: "anime",
            name: "Drama",
            url: "https://myanimelist.net/anime/genre/8/Drama",
          },
          {
            mal_id: 24,
            type: "anime",
            name: "Sci-Fi",
            url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
          },
          {
            mal_id: 41,
            type: "anime",
            name: "Suspense",
            url: "https://myanimelist.net/anime/genre/41/Suspense",
          },
        ],
        explicit_genres: [],
        themes: [
          {
            mal_id: 40,
            type: "anime",
            name: "Psychological",
            url: "https://myanimelist.net/anime/genre/40/Psychological",
          },
          {
            mal_id: 78,
            type: "anime",
            name: "Time Travel",
            url: "https://myanimelist.net/anime/genre/78/Time_Travel",
          },
        ],
        demographics: [],
      },
      {
        mal_id: 1535,
        url: "https://myanimelist.net/anime/1535/Death_Note",
        images: {
          jpg: {
            image_url: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/9/9453t.jpg",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/9/9453l.jpg",
          },
          webp: {
            image_url: "https://cdn.myanimelist.net/images/anime/9/9453.webp",
            small_image_url:
              "https://cdn.myanimelist.net/images/anime/9/9453t.webp",
            large_image_url:
              "https://cdn.myanimelist.net/images/anime/9/9453l.webp",
          },
        },
        trailer: {
          youtube_id: "Vt_3c8BgxV4",
          url: "https://www.youtube.com/watch?v=Vt_3c8BgxV4",
          embed_url:
            "https://www.youtube.com/embed/Vt_3c8BgxV4?enablejsapi=1&wmode=opaque&autoplay=1",
          images: {
            image_url: "https://img.youtube.com/vi/Vt_3c8BgxV4/default.jpg",
            small_image_url:
              "https://img.youtube.com/vi/Vt_3c8BgxV4/sddefault.jpg",
            medium_image_url:
              "https://img.youtube.com/vi/Vt_3c8BgxV4/mqdefault.jpg",
            large_image_url:
              "https://img.youtube.com/vi/Vt_3c8BgxV4/hqdefault.jpg",
            maximum_image_url:
              "https://img.youtube.com/vi/Vt_3c8BgxV4/maxresdefault.jpg",
          },
        },
        approved: true,
        titles: [
          {
            type: "Default",
            title: "Death Note",
          },
          {
            type: "Synonym",
            title: "DN",
          },
          {
            type: "Japanese",
            title: "デスノート",
          },
          {
            type: "English",
            title: "Death Note",
          },
        ],
        title: "Death Note",
        title_english: "Death Note",
        title_japanese: "デスノート",
        title_synonyms: ["DN"],
        type: "TV",
        source: "Manga",
        episodes: 37,
        status: "Finished Airing",
        airing: false,
        aired: {
          from: "2006-10-04T00:00:00+00:00",
          to: "2007-06-27T00:00:00+00:00",
          prop: {
            from: {
              day: 4,
              month: 10,
              year: 2006,
            },
            to: {
              day: 27,
              month: 6,
              year: 2007,
            },
          },
          string: "Oct 4, 2006 to Jun 27, 2007",
        },
        duration: "23 min per ep",
        rating: "R - 17+ (violence & profanity)",
        score: 8.62,
        scored_by: 2494357,
        rank: 75,
        popularity: 2,
        members: 3517348,
        favorites: 160240,
        synopsis:
          'Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten. For his own amusement, Ryuk drops his "Death Note" into the human world. Light stumbles upon it, deeming the first of its rules ridiculous: the human whose name is written in this note shall die. However, the temptation is too great, and Light experiments by writing a felon\'s name, which disturbingly enacts his first murder. Aware of the terrifying godlike power that has fallen into his hands, Light—under the alias "Kira"—follows his wicked sense of justice with the ultimate goal of cleansing the world of all evil-doers. The meticulous mastermind detective L is already on his trail, but as Light\'s brilliance rivals L\'s, the grand chase for Kira turns into an intense battle of wits that can only end when one of them is dead. [Written by MAL Rewrite]',
        background:
          "Death Note has been adapted into live action films, TV dramas, video games, light novels and a musical composed by a Broadway composer. It is licensed in North America by Viz Media.",
        season: "fall",
        year: 2006,
        broadcast: {
          day: "Wednesdays",
          time: "00:56",
          timezone: "Asia/Tokyo",
          string: "Wednesdays at 00:56 (JST)",
        },
        producers: [
          {
            mal_id: 29,
            type: "anime",
            name: "VAP",
            url: "https://myanimelist.net/anime/producer/29/VAP",
          },
          {
            mal_id: 85,
            type: "anime",
            name: "Konami",
            url: "https://myanimelist.net/anime/producer/85/Konami",
          },
          {
            mal_id: 242,
            type: "anime",
            name: "Ashi Productions",
            url: "https://myanimelist.net/anime/producer/242/Ashi_Productions",
          },
          {
            mal_id: 1003,
            type: "anime",
            name: "Nippon Television Network",
            url: "https://myanimelist.net/anime/producer/1003/Nippon_Television_Network",
          },
          {
            mal_id: 1365,
            type: "anime",
            name: "Shueisha",
            url: "https://myanimelist.net/anime/producer/1365/Shueisha",
          },
        ],
        licensors: [
          {
            mal_id: 119,
            type: "anime",
            name: "VIZ Media",
            url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
          },
        ],
        studios: [
          {
            mal_id: 11,
            type: "anime",
            name: "Madhouse",
            url: "https://myanimelist.net/anime/producer/11/Madhouse",
          },
        ],
        genres: [
          {
            mal_id: 37,
            type: "anime",
            name: "Supernatural",
            url: "https://myanimelist.net/anime/genre/37/Supernatural",
          },
          {
            mal_id: 41,
            type: "anime",
            name: "Suspense",
            url: "https://myanimelist.net/anime/genre/41/Suspense",
          },
        ],
        explicit_genres: [],
        themes: [
          {
            mal_id: 40,
            type: "anime",
            name: "Psychological",
            url: "https://myanimelist.net/anime/genre/40/Psychological",
          },
        ],
        demographics: [
          {
            mal_id: 27,
            type: "anime",
            name: "Shounen",
            url: "https://myanimelist.net/anime/genre/27/Shounen",
          },
        ],
      },
    ],
    components: [],
  });

  const mapSmalAnimeCard = (anAnime: IFullAnime) => {
    return <AnimeSmallCard {...anAnime} />;
  };

  useEffect(() => {
    // getTopAnimes("favorite", 5).then((response) => {
    //   console.log(response.data);
    //   setTopFavAnimes((prevState) => {
    //     const newState = { ...prevState };

    //     newState.data = response.data;
    //     newState.components = response.data.data.map(mapSmalAnimeCard);

    //     return newState;
    //   });
    // });
    setTopFavAnimes((prev: any) => {
      const newState = { ...prev };

      newState.data = prev.data;
      newState.components = prev.data.map(mapSmalAnimeCard);

      return newState;
    });
  }, []);

  return (
    <>
      <div className=" mx-auto">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/Anime_Barnstar_Hires.png"
          className="h-48 w-48 mx-auto"
          alt="Main Logo"
        />
        <h1 className="text-2xl text-center my-5 font-bold ">Search Anime</h1>
        <div className="w-2/6 mx-auto">
          <TextInput
            id="searchInput"
            type="text"
            placeholder="David es Gay"
            required={true}
            icon={FaSearch}
          />
        </div>
      </div>

      <div className="md:inline-grid md:grid-cols-3 md:gap-0">
        <div className="md:w-full">
          <h1 className="text-2xl text-center my-5 font-bold ">
            Most Popular Animes
          </h1>
          {/* <div className="grid md:grid-cols-3 md:gap-4">
          
        </div> */}

          <Carousel slideInterval={4000}>{topFavAnimes.components}</Carousel>
        </div>

        <div className="md:w-full">
          <h1 className="text-2xl text-center my-5 font-bold ">
            Favorite Animes
          </h1>

          <Carousel slideInterval={5000}>{topFavAnimes.components}</Carousel>
        </div>

        <div className="md:w-full">
          <h1 className="text-2xl text-center my-5 font-bold ">
            Favorite Animes
          </h1>

          <Carousel slideInterval={3000}>{topFavAnimes.components}</Carousel>
        </div>
      </div>
    </>
  );
}
