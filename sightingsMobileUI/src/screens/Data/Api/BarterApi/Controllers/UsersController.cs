using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly BarterContext _context;

    public UsersController(BarterContext context)
    {
        _context = context;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUserById(string id)
    {
        var user = new User();

        using (var connection = _context.Database.GetDbConnection())
        {
            await connection.OpenAsync();

            using (var command = connection.CreateCommand())
            {
                command.CommandText = "GetUserById";
                command.CommandType = System.Data.CommandType.StoredProcedure;
                command.Parameters.Add(new SqlParameter("@UserId", id));

                using (var reader = await command.ExecuteReaderAsync())
                {
                    if (await reader.ReadAsync())
                    {
                        user.Id = reader["id"].ToString();
                        user.Username = reader["username"].ToString();
                        user.PasswordHash = reader["password_hash"].ToString();
                        user.Email = reader["email"].ToString();
                        user.Name = reader["name"].ToString();
                        user.Location = reader["location"].ToString();
                        user.DateJoined = (DateTime)reader["dateJoined"];
                    }
                }
            }
        }

        if (user == null)
        {
            return NotFound();
        }

        return user;
    }
}