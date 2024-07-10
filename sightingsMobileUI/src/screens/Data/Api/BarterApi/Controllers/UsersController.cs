using Microsoft.AspNetCore.Mvc;
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
        var users = _context.Users
                            .FromSqlRaw("EXEC GetUserById @UserId={0}", id)
                            .AsEnumerable()
                            .FirstOrDefault();

        if (users == null)
        {
            return NotFound();
        }

        return Ok(users);
    }
}