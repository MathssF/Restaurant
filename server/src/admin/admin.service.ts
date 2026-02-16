import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWaiterDto } from './dto/create-waiter.dto';
import { UpdateWaiterDto } from './dto/update-waiter.dto';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  // =========================
  // WAITER
  // =========================

  createWaiter(data: CreateWaiterDto) {
    return this.prisma.waiter.create({ data });
  }

  async updateWaiter(id: number, data: UpdateWaiterDto) {
    await this.ensureWaiterExists(id);

    return this.prisma.waiter.update({
      where: { id },
      data,
    });
  }

  findAllWaiters() {
    return this.prisma.waiter.findMany();
  }

  async deleteWaiter(id: number) {
    await this.ensureWaiterExists(id);

    return this.prisma.waiter.delete({
      where: { id },
    });
  }

  private async ensureWaiterExists(id: number) {
    const waiter = await this.prisma.waiter.findUnique({
      where: { id },
    });

    if (!waiter) {
      throw new NotFoundException('Waiter not found');
    }
  }

  // =========================
  // TABLE
  // =========================

  createTable(data: CreateTableDto) {
    return this.prisma.table.create({ data });
  }

  async updateTable(id: number, data: UpdateTableDto) {
    await this.ensureTableExists(id);

    return this.prisma.table.update({
      where: { id },
      data,
    });
  }

  findAllTables() {
    return this.prisma.table.findMany();
  }

  async deleteTable(id: number) {
    await this.ensureTableExists(id);

    return this.prisma.table.delete({
      where: { id },
    });
  }

  private async ensureTableExists(id: number) {
    const table = await this.prisma.table.findUnique({
      where: { id },
    });

    if (!table) {
      throw new NotFoundException('Table not found');
    }
  }

  // =========================
  // PRODUCT
  // =========================

  createProduct(data: CreateProductDto) {
    return this.prisma.product.create({ data });
  }

  async updateProduct(id: number, data: UpdateProductDto) {
    await this.ensureProductExists(id);

    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  findAllProducts() {
    return this.prisma.product.findMany();
  }

  async deleteProduct(id: number) {
    await this.ensureProductExists(id);

    return this.prisma.product.delete({
      where: { id },
    });
  }

  private async ensureProductExists(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }
  }
}
