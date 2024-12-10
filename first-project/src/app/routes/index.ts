import { Router } from 'express';
import { StudentRoutes } from '../modules/students/student.route';
import { UserRoutes } from '../modules/user/user-route';
import { AcademicSemesterRoutes } from './../modules/academic Semister/academic.route';
import { AcademicFacultyRoutes } from '../modules/academic-faculty/academic-faculty-route';
import { AcademicDepartmentRoutes } from '../modules/academic-department/academic-department.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { CourseRoutes } from '../modules/Course/course.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/courses',
    route: CourseRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
