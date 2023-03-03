import { type } from 'os';
import { Kelas } from 'src/kelas/entities/kelas.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Siswa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  alamat: string;

  @Column()
  kelas_id: string;

  @ManyToOne(() => Kelas)
  @JoinColumn({ name: 'kelas_id', referencedColumnName: 'id' })
  kelas: Kelas;
  // kelas:
}
