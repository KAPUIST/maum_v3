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
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Surveys } from './surveys';
import { SurveyQuestions } from './surveyQuestions';

@Entity({ schema: 'maum', name: 'question_answer' })
export class QuestionAnswer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('text', { name: 'description' })
  description: string;

  @ManyToOne(() => SurveyQuestions, (question) => question.id)
  questionId: Surveys;
}
