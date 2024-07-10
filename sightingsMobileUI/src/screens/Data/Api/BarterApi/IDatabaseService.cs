public interface IDatabaseService
{
    Task<IEnumerable<ProductDTO>> GetProductsByOwner(string ownerId);
}