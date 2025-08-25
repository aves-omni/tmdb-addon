require("dotenv").config();
const { TMDBClient } = require("../utils/tmdbClient");
const moviedb = new TMDBClient(process.env.TMDB_API);

async function getLanguages() {
  const [primaryTranslations, languages] = await Promise.all([
    moviedb.primaryTranslations(),
    moviedb.languages(),
  ]);
  return primaryTranslations.map((element) => {
    const [language, country] = element.split("-");
    const findLanguage = languages.find((obj) => obj.iso_639_1 === language);
    return { iso_639_1: element, name: findLanguage.english_name};
  });
}

module.exports = { getLanguages };
