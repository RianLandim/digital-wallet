import { PrismaService } from '@infra/database/prisma/prisma.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

type PayloadProps = {
  sub: string;
  username: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'test-key',
    });
  }

  async validate(payload: PayloadProps) {
    const { sub } = payload;
    const user = await this.prisma.user.findUnique({ where: { id: sub } });

    if (!user) {
      throw new UnauthorizedException('Usuário não possui cadastro');
    }

    return user;
  }
}
