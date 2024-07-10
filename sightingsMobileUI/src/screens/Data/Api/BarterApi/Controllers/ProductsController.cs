using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly IDatabaseService _databaseService;

    public ProductsController(IDatabaseService databaseService)
    {
        _databaseService = databaseService;
    }

    [HttpGet("ByOwner/{ownerId}")]
    public async Task<ActionResult<IEnumerable<ProductDTO>>> GetProductsByOwner(string ownerId)
    {
        var products = await _databaseService.GetProductsByOwner(ownerId);
        return Ok(products);
    }
}