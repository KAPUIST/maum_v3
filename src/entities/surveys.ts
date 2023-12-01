import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SurveyQuestions } from './surveyQuestions';

@Entity({ schema: 'maum', name: 'surveys' })
export class Surveys {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', unique: true })
  title: string;

  @Column('text', { name: 'description' })
  description: string;

  @Column('int', { name: 'deleted' })
  deleted: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => SurveyQuestions, (qus) => qus.id)
  questionId: SurveyQuestions[];
}
