import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'passport';
@Injectable()
export class AuthService {
  
  constructor(private jwtService: JwtService) {}
  
  async createJwtToken(profile: Profile): Promise<any> {
    const payload = { sub: profile.id, username: profile.displayName };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateJwtToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new Error('Token is Invalid !! ');
    }
  }

  async findOrCreateUser(accessToken: string, refreshToken: string, profile: Profile,): Promise<any> { 
    console.log("In login ", profile);
    console.log("In login AT", accessToken);
    console.log("In login RT", refreshToken);
  }
}
