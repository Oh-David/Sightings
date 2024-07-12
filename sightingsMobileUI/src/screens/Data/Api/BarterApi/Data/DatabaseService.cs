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
                        productList.Add(reader.MapTo<ProductDTO>());
                    }
                }
            }
        }

        return productList;
    }

    public async Task<IEnumerable<ProductDTO>> GetProductsNotOwnedByUser(string ownerId)
    {
        var productList = new List<ProductDTO>();

        using (var connection = new SqlConnection(_connectionString))
        {
            using (var command = new SqlCommand("GetProductsNotOwnedByUser", connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@OwnerId", ownerId);

                connection.Open();
                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        productList.Add(reader.MapTo<ProductDTO>());
                    }
                }
            }
        }

        return productList;
    }

    public async Task<int> AddBidAsync(string product1Id, string product2Id)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            using (var command = new SqlCommand("AddBid", connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@product1Id", product1Id);
                command.Parameters.AddWithValue("@product2Id", product2Id);

                connection.Open();
                return (int)await command.ExecuteScalarAsync();
            }
        }
    }

    public async Task RemoveBidAsync(int bidId)
    {
        using (var connection = new SqlConnection(_connectionString))
        {
            using (var command = new SqlCommand("RemoveBid", connection))
            {
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@bidId", bidId);

                connection.Open();
                await command.ExecuteNonQueryAsync();
            }
        }
    }

    public async Task<IEnumerable<BidDTO>> GetAllBidsAsync()
    {
        var bidList = new List<BidDTO>();

        using (var connection = new SqlConnection(_connectionString))
        {
            using (var command = new SqlCommand("GetAllBids", connection))
            {
                command.CommandType = CommandType.StoredProcedure;

                connection.Open();
                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        bidList.Add(reader.MapTo<BidDTO>());
                    }
                }
            }
        }

        return bidList;
    }
}