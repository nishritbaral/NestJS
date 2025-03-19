import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getReq() {
    return { message: 'get API clicked successfully' };
  }

  postReq() {
    return { message: 'post API clicked successfully' };
  }

  putReq() {
    return { message: ' put API clicked successfully' };
  }

  deleteReq() {
    return { message: 'delete API clicked successfully' };
  }
}
