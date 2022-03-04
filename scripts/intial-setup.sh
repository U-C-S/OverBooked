echo "This is 3 step process: Initializing the .env files, installing the dependencies and generating prisma types."

# -----
ENV_FILE="./apps/api/.env"
if [ -f "$ENV_FILE" ]
then
    echo ".env file already exists at $ENV_FILE. Skipping..."
else
	echo "creating .env file..."
    read -p "Enter the postgresSQL URL: " PGSQLURL
    read -p "Enter a secret-key for JWT: " SECRETKEY

    mv $ENV_FILE $ENV_FILE.bak
    touch $ENV_FILE

    echo "PGSQL_DB_URL=\"$PGSQLURL\"" > $ENV_FILE
    echo "JWT_SECRET=\"$SECRETKEY\"" >> $ENV_FILE
    echo "data appended to $ENV_FILE"
fi

# -----
echo "Installing npm packages..."
npm install
echo "npm packages installed."

# -----
echo "Generating prisma types..."
npm run prisma:generate -w api