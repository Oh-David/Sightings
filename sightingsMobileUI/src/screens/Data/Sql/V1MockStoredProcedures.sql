CREATE OR ALTER PROCEDURE GetUserById
@UserId VARCHAR(255)
AS
BEGIN
    SELECT * FROM Users WHERE id = @UserId
END;
GO;

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
GO;

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
GO;