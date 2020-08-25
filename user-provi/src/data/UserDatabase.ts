import knex from "knex";

export class UserDatabase {
    private connection() {
    return knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME,
        }
    })
}

    private static TABLE_NAME = "User";


    public async createUser(
        id: string,
        email: string,
        password: string
    ): Promise<void> {
        await this.connection()
            .insert({
                id,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME)
    }

    public async getUserByEmail(
        email: string
        ): Promise<any> {
        const result = await this.connection()
          .select("*")
          .from(UserDatabase.TABLE_NAME)
          .where({ email });
    
        return result[0];
    }

    public async getUserById(id: string): Promise<any> {
        const result = await this.connection()
          .select("*")
          .from(UserDatabase.TABLE_NAME)
          .where({ id });
    
        return result[0];
      }
}

