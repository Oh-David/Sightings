public interface IDatabaseService
{
    Task<IEnumerable<ProductDTO>> GetProductsByOwner(string ownerId);
    Task<IEnumerable<ProductDTO>> GetProductsNotOwnedByUser(string ownerId);
    Task<IEnumerable<BidDTO>> GetAllBidsAsync();
    Task RemoveBidAsync(int bidId);
    Task<int> AddBidAsync(string product1Id, string product2Id);
}