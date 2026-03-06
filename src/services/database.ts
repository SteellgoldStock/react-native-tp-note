import { SQLiteDatabase } from "expo-sqlite"
import { Movie } from "../types/movie"

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  // @ts-ignore :)
  let { user_version: currentDbVersion } = await db.getFirstAsync('PRAGMA user_version')

  if (currentDbVersion < 1) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        title TEXT NOT NULL UNIQUE,
        real_names TEXT NOT NULL,
        release_year INTEGER NOT NULL,
        type TEXT NOT NULL,
        note INTEGER NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `)
    console.log("PPPPPPPPPPPPPPP")

    currentDbVersion = 1
    await db.execAsync(`PRAGMA user_version = ${currentDbVersion}`)
  }
}

export const getMovies = async (db: SQLiteDatabase): Promise<Movie[] | undefined> => {
  const movies = await db.getAllAsync<Movie>('SELECT * FROM movies');
  if (!movies) return null;

  return movies;
}

export const getMovie = async (db: SQLiteDatabase, id: number): Promise<Movie | undefined> => {
  const movie = await db.getFirstAsync<Movie>('SELECT * FROM movies WHERE id = ?', [id]);

  if (!movie) return null;
  return movie;
}

export async function insertMovie(db: SQLiteDatabase, movie: Movie) {
  const exist = await db.getFirstAsync<Movie>('SELECT * FROM movies WHERE title = ?', [movie.title])

  console.log("il existe ou pas ?")
  console.log(exist)

  if (exist) {
    console.log('Duplicate movie:', movie.title)
    throw new Error('Film déjà dans la base de données.')
  }

  const result = await db.runAsync('INSERT INTO movies (title, real_names, release_year, type, note) VALUES (?, ?, ?, ?, ?);', [movie.title, movie.real_names, movie.release_year, movie.type, movie.note])

  console.log("aaaa")

  return result;
}

export const deleteMovie = async (db: SQLiteDatabase, id: number): Promise<boolean> => {
  const movie = await db.getFirstAsync('DELETE FROM movies WHERE id = ?', [id]);

  console.log(movie);

  if (!movie) return false;
  return true;
}