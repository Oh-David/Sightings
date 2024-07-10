using System.Data;
using System.Data.SqlClient;

public class DatabaseService : IDatabaseService
{
    private readonly string _connectionString;

    public DatabaseService(IConfiguration configuration)
    {
        _connectionString = configuration.GetConnectionString("DefaultConnection");
    }

    public async Task<IEnumerable<ProductDTO>> GetProductsByOwner(string ownerId)
    {
        var productList = new List<ProductDTO>();

        using (var connection = new SqlConnection(_connectionString))
        {
            using (var command = new SqlCommand("GetProductsByOwner", connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@OwnerId", ownerId);

                connection.Open();
                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        productList.Add(new ProductDTO
                        {
                            Id = reader["id"].ToString(),
                            Name = reader["name"].ToString(),
                            Image = reader["image"].ToString(),
                            Description = reader["description"].ToString(),
                            TradeFor = reader["tradeFor"].ToString(),
                            Category = reader["category"].ToString(),
                            Condition = reader["condition"].ToString(),
                            Location = reader["location"].ToString(),
                            DimensionsWidth = float.Parse(reader["dimensions_width"].ToString()),
                            DimensionsHeight = float.Parse(reader["dimensions_height"].ToString()),
                            DimensionsDepth = float.Parse(reader["dimensions_depth"].ToString()),
                            DimensionsWeight = float.Parse(reader["dimensions_weight"].ToString()),
                            DateListed = DateTime.Parse(reader["dateListed"].ToString())
                        });
                    }
                }
            }
        }

        return productList;
    }
}