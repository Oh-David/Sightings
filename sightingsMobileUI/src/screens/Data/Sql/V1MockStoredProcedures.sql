CREATE OR ALTER PROCEDURE GetUserById
@UserId VARCHAR(255)
AS
BEGIN
    SELECT * FROM Users WHERE id = @UserId
END;

CREATE OR ALTER PROCEDURE GetProductsByOwner
    @OwnerId VARCHAR(255)
AS
BEGIN
    SELECT
        p.id,
        p.name,
        p.image,
        p.description,
        p.tradeFor,
        pc.category AS category,
        p.condition,
        p.location,
        p.ownerId,
        p.dimensions_width,
        p.dimensions_height,
        p.dimensions_depth,
        p.dimensions_weight,
        p.dateListed
    FROM Products p
    INNER JOIN ProductCategories pc ON p.categoryId = pc.id
    WHERE p.ownerId = @OwnerId;
END;
GO;

CREATE OR ALTER PROCEDURE GetAllProductCategories
AS
BEGIN
    SELECT id, category
    FROM ProductCategories
    ORDER BY category;
END;

CREATE OR ALTER PROCEDURE GetProductsNotOwnedByUser
    @OwnerId VARCHAR(255)
AS
BEGIN
    SELECT 
        p.id,
        p.name,
        p.image,
        p.description,
        p.tradeFor,
        p.categoryId,
        c.category,
        p.condition,
        p.location,
        p.ownerId,
        p.dimensions_width,
        p.dimensions_height,
        p.dimensions_depth,
        p.dimensions_weight,
        p.dateListed
    FROM 
        Products p
    INNER JOIN 
        ProductCategories c ON p.categoryId = c.id
    WHERE 
        p.ownerId <> @OwnerId;
END;

CREATE OR ALTER PROCEDURE AddBid
    @product1Id VARCHAR(255),
    @product2Id VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;

    INSERT INTO Bids (product1Id, product2Id)
    VALUES (@product1Id, @product2Id);

    SELECT SCOPE_IDENTITY() AS NewBidId;
END;

CREATE OR ALTER PROCEDURE RemoveBid
    @bidId INT
AS
BEGIN
    SET NOCOUNT ON;

    DELETE FROM Bids
    WHERE id = @bidId;
END;

CREATE OR ALTER PROCEDURE GetAllBids
AS
BEGIN
    SET NOCOUNT ON;

    SELECT
        B.id AS bidId,
        B.product1Id,
        P1.name AS product1Name,
        B.product2Id,
        P2.name AS product2Name
    FROM
        Bids B
    JOIN
        Products P1 ON B.product1Id = P1.id
    JOIN
        Products P2 ON B.product2Id = P2.id;
END;
