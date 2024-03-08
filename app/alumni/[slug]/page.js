'use client';
import { React } from 'react';
import styles from '../../page.module.css';
import data from '../../data/alumni.json';
import AlumniDescription from '@/app/components/AlumniDescription/page';

const Students = ({ params }) => {
  const students = data.alumni;
  const student = students.find((student) => student.slug === params.slug);

  return (
    <main className={styles.main}>
      <AlumniDescription data={student}></AlumniDescription>
    </main>
  );
};

export default Students;
