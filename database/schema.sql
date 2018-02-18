

CREATE TABLE Groceries (
  id 
)


DROP TABLE IF EXISTS `Stock`;
		
CREATE TABLE `Stock` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `quantity` INTEGER NOT NULL DEFAULT 0,
  `description` VARCHAR(32) NOT NULL DEFAULT '''',
  PRIMARY KEY (`id`)
);

 {id: 1, quantity: 5, description: "frozen pizza"},
  {id: 2, quantity: 10, description: "greek yogurt"},
  {id: 3, quantity: 2, description: "wine"},
  {id: 4, quantity: 1, description: "iced coffee"}
INSERT INTO Stock (quantity, description) VALUES (5, 'frozen pizza'), (10, 'greek yogurt'), (20, 'wine'), (10, 'iced coffee'), (21, 'bananas');
