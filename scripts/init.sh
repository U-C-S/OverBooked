read -p "Enter the Postgresql connection string: " DATABASE_CONNECTION_STRING
read -p "Enter the Jwt secret: " JWT_SECRET

dotnet user-secrets set DatabaseConnectionString $DATABASE_CONNECTION_STRING --project api
dotnet user-secrets set JWT_SECRET $JWT_SECRET --project api
