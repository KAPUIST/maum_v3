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
import { QuestionAnswer } from './questionAnswer';

@Entity({ schema: 'maum', name: 'survey_questions' })
export class SurveyQuestions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('text', { name: 'description' })
  description: string;

  @ManyToOne(() => Surveys, (survey) => survey.id)
  surveyId: Surveys;

  @OneToMany(() => QuestionAnswer, (question) => question.id)
  answerId: QuestionAnswer;
}
