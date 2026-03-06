export async function migrateDbIfNeeded(db) {
  let { user_version: currentDbVersion } = await db.getFirstAsync('PRAGMA user_version')

  if (currentDbVersion < 1) {
    await db.execAsync(`
      PRAGMA journal_mode = 'wal';
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `)
    currentDbVersion = 1
    await db.execAsync(`PRAGMA user_version = ${currentDbVersion}`)
  }
}

export async function getUser(db, email, password) {
  const user = await db.getFirstAsync('SELECT * FROM users WHERE email = ?', [email])

  if (!user) {
    console.log('Email not found:', email)
    throw new Error('Identifiants invalides.')
  }

  if (password !== user.password) {
    console.log('Invalid password for:', email)
    throw new Error('Identifiants invalides.')
  }

  return user.name
}

export async function insertUser(db, name, email, password) {
  const user = await db.getFirstAsync('SELECT id FROM users WHERE email = ?', [email])

  if (user) {
    console.log('Duplicate email:', email)
    throw new Error('Email déjà existant.')
  }

  const result = await db.runAsync('INSERT INTO users (name, email, password) VALUES (?, ?, ?);', [name, email, password])

  return result.lastInsertRowId
}

export async function updatePassword(db, email, password) {
  const user = await db.getFirstAsync('SELECT id FROM users WHERE email = ?', [email])

  if (!user) {
    console.log('Email not found:', email)
    throw new Error('Email introuvable.')
  }

  const result = await db.runAsync('UPDATE users SET password = ? WHERE email = ?;', [password, email])

  return result.changes > 0
}
