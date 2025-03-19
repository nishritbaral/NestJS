import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private apiService: ApiService) {}

  @Get('get')
  getReq() {
    return this.apiService.getReq();
  }

  @Post('post')
  postReq() {
    return { message: 'post API clicked successfully' };
  }

  @Put('put')
  putReq() {
    return { message: ' put API clicked successfully' };
  }

  @Delete('delete')
  deleteReq() {
    return { message: 'delete API clicked successfully' };
  }
}
