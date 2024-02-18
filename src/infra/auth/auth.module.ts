import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@/infra/auth/jwt.strategy';
import { Env } from '@/infra/env';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      async useFactory(configService: ConfigService<Env, true>) {
        const privateKey = configService.get('JWT_PRIVATE_KEY', {
          infer: true,
        });
        const publicKey = configService.get('JWT_PUBLIC_KEY', { infer: true });

        return {
          signOptions: {
            algorithm: 'RS256',
          },
          privateKey: Buffer.from(privateKey, 'base64'),
          publicKey: Buffer.from(publicKey, 'base64'),
        };
      },
    }),
  ],
  providers: [JwtStrategy],
})
export class AuthModule {}