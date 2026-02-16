import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // =========================
  // WAITER
  // =========================

  @Post('waiters')
  createWaiter(@Body() dto: CreateWaiterDto) {
    return this.adminService.createWaiter(dto);
  }

  @Get('waiters')
  getWaiters() {
    return this.adminService.findAllWaiters();
  }

  @Patch('waiters/:id')
  updateWaiter(@Param('id') id: string, @Body() dto: UpdateWaiterDto) {
    return this.adminService.updateWaiter(Number(id), dto);
  }

  @Delete('waiters/:id')
  deleteWaiter(@Param('id') id: string) {
    return this.adminService.deleteWaiter(Number(id));
  }

  // =========================
  // TABLE
  // =========================

  @Post('tables')
  createTable(@Body() dto: CreateTableDto) {
    return this.adminService.createTable(dto);
  }

  @Get('tables')
  getTables() {
    return this.adminService.findAllTables();
  }

  @Patch('tables/:id')
  updateTable(@Param('id') id: string, @Body() dto: UpdateTableDto) {
    return this.adminService.updateTable(Number(id), dto);
  }

  @Delete('tables/:id')
  deleteTable(@Param('id') id: string) {
    return this.adminService.deleteTable(Number(id));
  }

  // =========================
  // PRODUCT
  // =========================

  @Post('products')
  createProduct(@Body() dto: CreateProductDto) {
    return this.adminService.createProduct(dto);
  }

  @Get('products')
  getProducts() {
    return this.adminService.findAllProducts();
  }

  @Patch('products/:id')
  updateProduct(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.adminService.updateProduct(Number(id), dto);
  }

  @Delete('products/:id')
  deleteProduct(@Param('id') id: string) {
    return this.adminService.deleteProduct(Number(id));
  }
}
