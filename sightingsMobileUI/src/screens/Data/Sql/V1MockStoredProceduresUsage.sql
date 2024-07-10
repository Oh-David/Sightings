DECLARE @RC int
DECLARE @UserId varchar(255)

-- Set the UserId to some string value.
SET @UserId = 'user1'

-- Execute the stored procedure and capture the return code.
EXECUTE @RC = [dbo].[GetUserById] @UserId

-- Print the return code.
PRINT @RC
GO


EXEC GetProductsByOwner @OwnerId = 'user12';