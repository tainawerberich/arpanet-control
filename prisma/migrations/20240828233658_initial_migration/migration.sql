-- CreateTable
CREATE TABLE `Produto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(45) NOT NULL,
    `espessura` INTEGER NOT NULL,
    `rocha` VARCHAR(45) NOT NULL,
    `tamanho` VARCHAR(45) NOT NULL,
    `acabamento` VARCHAR(45) NOT NULL,
    `quantidade_estoque` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cnpj` VARCHAR(14) NOT NULL,
    `nome` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `telefone` VARCHAR(11) NOT NULL,
    `representante` VARCHAR(45) NOT NULL,
    `id_endereco` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dth_venda` DATETIME(3) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `valor_total` DECIMAL(10, 2) NOT NULL,
    `id_cliente` INTEGER NOT NULL,
    `id_vendedor` INTEGER NOT NULL,
    `id_produto` INTEGER NOT NULL,
    `id_pagamento` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pais` VARCHAR(45) NOT NULL,
    `estado` VARCHAR(45) NOT NULL,
    `cidade` VARCHAR(45) NOT NULL,
    `rua` VARCHAR(45) NOT NULL,
    `bairro` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vendedor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(11) NOT NULL,
    `nome` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `telefone` VARCHAR(9) NOT NULL,
    `tipo_vinculo` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_pagamento` VARCHAR(45) NOT NULL,
    `detalhes_pagamento` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_id_endereco_fkey` FOREIGN KEY (`id_endereco`) REFERENCES `Endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_id_cliente_fkey` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_id_vendedor_fkey` FOREIGN KEY (`id_vendedor`) REFERENCES `Vendedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_id_produto_fkey` FOREIGN KEY (`id_produto`) REFERENCES `Produto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vendas` ADD CONSTRAINT `Vendas_id_pagamento_fkey` FOREIGN KEY (`id_pagamento`) REFERENCES `Pagamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
