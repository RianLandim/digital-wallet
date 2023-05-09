import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import type { User as AppUser } from '@prisma/client';

export type CurrentUser = AppUser;

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): CurrentUser => {
    const user = ctx.switchToHttp().getRequest().user;
    return user as CurrentUser;
  },
);
