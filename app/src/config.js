export const BASE_URL = 'https://www.mangaeden.com/api';
export const BASE_IMAGE_URI = 'https://cdn.mangaeden.com/mangasimg/';
/*
  Returned data:
    - dictionaries in the key "manga" contains the manga's image ("im"), title ("t"), ID ("i"), alias ("a"), status ("s"), category ("c"), last chapter date ("ld"), hits ("h")
    - "page", "start", "end" and "total" are self explanatory
 */
export const MANGA_LIST = '/list/0/';

/*
  == Manga List splitted in pages ==

  URL: https://www.mangaeden.com/api/list/[language]/?p=X
  Same as above but returns only 500 manga's informations
  (from manga X*500 to (X+1)*500, where X is the page fetched from the GET parameter 'p')
 */
export const MANGA_LIST_PAGING = '/list/0/?p=';

/*
  == Manga info and chapters list ==

  URL: https://www.mangaeden.com/api/manga/[manga.id]/
  Example: https://www.mangaeden.com/api/manga/4e70e9f6c092255ef7004336/
  Where [manga.id] is the manga's id you can get with the previous api call
  Returned data: all the informations and chapters of the manga.

  -- Chapter's array explained --

  Example of a chapter array element:
    [
    5, # <-- chapter's number
    1275542373.0, # <-- chapter's date
    "5", # <-- chapter's title
    "4e711cb0c09225616d037cc2" # <-- chapter's ID (chapter.id in the next section)
    ],
 */
export const DETAIL_MANGA = '/manga/';

/*
  == Chapter pages ==

  URL: https://www.mangaeden.com/api/chapter/[chapter.id]/
  Example: https://www.mangaeden.com/api/chapter/4e711cb0c09225616d037cc2/
  Where [chapter.id] is the chapter's id you can get with the previous api call.
  Returned data: the images's urls and sizes of the chapter
 */
export const CHAPTER = '/chapter/';

export const PLACEHOLDER_IMAGE = require('../assets/placeholder_no_image.png');
export const DUMMY_IMAGE_LOCAL = require('../assets/under_construction210x300.png');

// REDUX
export const GET_DISCOVER_DATA = 'GET_DISCOVER_DATA';
export const GET_DETAIL_MANGA = 'GET_DETAIL_MANGA';
export const GET_CHAPTER = 'GET_CHAPTER';
export const GET_READ_DATA = 'GET_READ_DATA';

export const REMOVE_CURRENT_DATA = 'REMOVE_CURRENT_DATA';

export const DUMMY_IMAGE_URI =
  'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg';

export const DUMMIES_WORDS =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga, cupiditate, vel nemo deleniti, ad et sed porro culpa repellendus totam inventore quam nesciunt facilis impedit dolore dolorum consequatur voluptatum.';

export const white = '#ffffff';
export const white2nd = '#f5f5f5';
export const white3rd = '#f6f6f6';

export const black = '#000000';
export const black2nd = '#212121';
export const black3rd = '#323232';
