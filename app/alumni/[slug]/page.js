'use client';
import { React } from 'react';
import styles from '../../page.module.css';
import data from '../../data/alumni.json';
import AlumniDescription from '@/app/components/AlumniDescription/page';
import AlumniProject from '@/app/components/AlumniProject/page';
import QuestionAndAnswers from '@/app/components/QuestionAndAnswers/page';

const Students = ({ params }) => {
  const students = data.alumni;
  const student = students.find((student) => student.slug === params.slug);

  return (
    <main>
      <AlumniDescription data={student}></AlumniDescription>
      <AlumniProject data={student}></AlumniProject>
      <QuestionAndAnswers data={student}></QuestionAndAnswers>
    </main>
  );
};

export default Students;
