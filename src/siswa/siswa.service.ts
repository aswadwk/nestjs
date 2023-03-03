import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';
import { Siswa } from './entities/siswa.entity';

@Injectable()
export class SiswaService {
  constructor(
    @InjectRepository(Siswa)
    private siswaRepository: Repository<Siswa>,
  ) {}

  create(createSiswaDto: CreateSiswaDto) {
    return this.siswaRepository.save(createSiswaDto);
  }

  findAll() {
    return this.siswaRepository.find({
      relations: {
        kelas: true,
      },
    });
  }

  findOne(id: string) {
    return this.siswaRepository.findOne({
      where: {
        id,
      },
      relations: {
        kelas: true,
      },
    });
  }

  update(id: string, updateSiswaDto: UpdateSiswaDto) {
    return this.siswaRepository.update(id, updateSiswaDto);
  }

  remove(id: string) {
    return this.siswaRepository.delete(id);
  }

  async validateUser(email: string): Promise<any> {
    const user = await this.siswaRepository.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return user;
    }

    return null;
  }
}
