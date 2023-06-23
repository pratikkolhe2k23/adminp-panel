import * as React from 'react';
import '../components/css/sidebar.css'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar';
import './assets/itsMe.jpg';
import { Routes, Route, Link } from 'react-router-dom';
import StudentDash from './student';
import ClassesDash from './classes';
import Teacher from './teacher';
import Admission from './admission';


export default function sidebar() {

   return (



      <div div className='flex flex-row'>
         <div className=' grid grid-col w-1/5 h-screen p-3 bg-slate-800 '>

            <ul className='grid-row-6 flex flex-column justify-center align-items-center'>
               <li><Link to="/">
                  <Avatar src='./itsMe.png'  ></Avatar>
               </Link>
               </li>
               <li><Button variant="text"><Link  to="student.js">Student</Link></Button></li>
               <li><Button variant="text"><Link  to="teacher.js">Teacher</Link></Button></li>
               <li><Button variant="text"><Link  to='classes.js'>Classes</Link></Button></li>
               <li><Button variant="text"><Link  to='admission.js'>Admission</Link></Button></li>
               <li><Button variant="contained">Log Out</Button></li>
            </ul>







         </div>

         <div className='grid grid-col-full'>
            <Routes>

               <Route path="student.js" element={<StudentDash />}></Route>

               <Route path="teacher.js" element={<Teacher />}>  </Route>

               <Route path="classes.js" element={<ClassesDash />}>  </Route>

               <Route path="admission.js" element={<Admission />}>  </Route>

            </Routes>

         </div>
      </div>




   )









}