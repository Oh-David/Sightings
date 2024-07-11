public interface IDatabaseService
{
    Task<IEnumerable<ProductDTO>> GetProductsByOwner(string ownerId);
    Task<IEnumerable<ProductDTO>> GetProductsNotOwnedByUser(string ownerId);
}