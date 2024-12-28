import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../auth.service';
import { SignInDto, signInSchema } from '../dto/sign-in.dto';
import { AuthGuard } from '../auth.guard';
import { Request } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    const parseResult = signInSchema.safeParse(signInDto);

    if (!parseResult.success) {
      throw new BadRequestException(parseResult.error.format());
    }
    const { username, password } = parseResult.data;

    return this.authService.signIn(username, password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  // @ts-ignore
  getProfile(@Request() req) {
    return req.user;
  }
}
