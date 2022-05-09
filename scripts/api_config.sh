read -p "Enter the Postgresql connection string: " DATABASE_CONNECTION_STRING

dotnet user-secrets set DatabaseConnectionString $DATABASE_CONNECTION_STRING