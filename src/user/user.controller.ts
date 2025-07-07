import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
/*  basic drizzile crud operations
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: { name: string; email: string,age:number }) {
    return this.userService.createUser(body.name, body.email,body.age);
  }

  @Get()
  findAll() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; email: string,age:number }) {
    return this.userService.updateUser(+id, body.name, body.email,body.age);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(+id);
  }
}     */

//this code is for multiple tables

 

@Controller('data')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(':type')
  create(@Param('type') type: string, @Body() body: any) {
    return this.userService.create(type, body);
  }

  @Get(':type')
  findAll(@Param('type') type: string) {
    return this.userService.findAll(type);
  }

  @Get(':type/:id')
  findOne(@Param('type') type: string, @Param('id') id: string) {
    return this.userService.findOne(type, +id);
  }

  @Put(':type/:id')
  update(@Param('type') type: string, @Param('id') id: string, @Body() body: any) {
    return this.userService.update(type, +id, body);
  }

  @Delete(':type/:id')
  remove(@Param('type') type: string, @Param('id') id: string) {
    return this.userService.remove(type, +id);
  }
}