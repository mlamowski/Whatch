export default class Movie {
  constructor(data = {}) {
    this._backdrop_path = data._backdrop_path || "";
    this._description = data._description || "";
    this._genreIDs = data._genreIDs || [];
    this._genres = data._genres || [];
    this._id = data._id || 0;
    this._imdb_id = data._imdb_id || "";
    this._original_language = data._original_language || "";
    this._poster_path = data._poster_path || "";
    this._runtime = data._runtime || 0;
    this._serialized_release_date = data._serialized_release_date || new Date();
    this._title = data._title || "";
    this._vote_average = data._vote_average || 0;
    this._vote_count = data._vote_count || 0;
    this._watchprovider = data._watchprovider || [];
  }

  _title;
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  _id;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  _imdb_id;
  get imdb_id() {
    return this._imdb_id;
  }
  set imdb_id(value) {
    this._imdb_id = value;
  }

  _description;
  get description() {
    return this._description;
  }
  set description(value) {
    this._description = value;
  }

  _backdrop_path;
  get backdrop_path() {
    return this._backdrop_path;
  }
  set backdrop_path(value) {
    this._backdrop_path = value;
  }

  _poster_path;
  get poster_path() {
    return this._poster_path;
  }
  set poster_path(value) {
    this._poster_path = value;
  }

  _genres;
  get genres() {
    return this._genres.join(" • ");
  }
  set genres(value) {
    this._genres = value;
  }

  _genreIDs;
  get genreIDs() {
    return this._genreIDs;
  }
  set genreIDs(value) {
    this._genreIDs = value;
  }

  _original_language;
  get original_language() {
    return this._original_language;
  }
  set original_language(value) {
    this._original_language = value;
  }

  _serialized_release_date;
  //parse date from _serialized_release_date to date object and return it
  get release_date() {
    const release_date = new Date(this._serialized_release_date);
    return release_date;
  }
  //get date as string in format 14.03.1972
  get release_date_string() {
    //check if date is set and return false if not, this is because some movies do not have a date 
    if (this._serialized_release_date) {
      const release_date = new Date(this._serialized_release_date);

      const day = release_date.getDate().toString().padStart(2, "0");
      const month = (release_date.getMonth() + 1).toString().padStart(2, "0");
      const year = release_date.getFullYear();

      const formattedDate = `${year}`;
      return formattedDate;
    } else {
      return false;
    }
  }
  //put in a js date object and save it as _serialized_release_date
  set release_date(value) {
    this._serialized_release_date = value.toISOString();
  }

  _runtime;
  get runtime() {
    return this._runtime;
  }
  set runtime(value) {
    this._runtime = value;
  }

  _vote_average;
  get vote_average() {
    //return vote as percent string
    return (votePercent = Math.round(this._vote_average * 10).toString() + "%");
  }
  set vote_average(value) {
    this._vote_average = value;
  }

  _vote_count;
  get vote_count() {
    return this._vote_count;
  }
  set vote_count(value) {
    this._vote_count = value;
  }

  //ist ein array mit watch provider objekten, wenn keine existieren ist die liste leer
  _watchprovider;
  get watchprovider() {
    return this._watchprovider;
  }
  set watchprovider(value) {
    this._watchprovider = value;
  }
}
