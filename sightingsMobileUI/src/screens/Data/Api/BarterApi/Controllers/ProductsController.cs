using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IConfiguration _configuration;

    public ProductsController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    [HttpGet("ByOwner/{ownerId}")]
    public async Task<ActionResult<IEnumerable<ProductDTO>>> GetProductsByOwner(string ownerId)
    {
        var connectionString = _configuration.GetConnectionString("DefaultConnection");
        var productList = new List<ProductDTO>();

        using (var connection = new SqlConnection(connectionString))
        {
            using (var command = new SqlCommand("GetProductsByOwner", connection))
            {
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@OwnerId", ownerId);

                connection.Open();
                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (reader.Read())
                    {
                        var product = new ProductDTO
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
                        };
                        productList.Add(product);
                    }
                }
            }
        }

        return productList;
    }
}