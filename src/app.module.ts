import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProdutoModule } from './produto/produto.module';
import { ClienteModule } from './cliente/cliente.module';
import { PagamentoModule } from './pagamento/pagamento.module';

@Module({
  imports: [
    VendedorModule,
    PrismaModule,
    UserModule,
    AuthModule,
    ProdutoModule,
    ClienteModule,
    PagamentoModule,
  ],
})
export class AppModule {}
