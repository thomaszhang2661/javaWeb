import { createApp } from "https://unpkg.com/vue@3.2.47/dist/vue.esm-browser.js";

// 导出export
export const app = createApp({
  data() {
    return {
      employees: [
        {
          name: "Harry Potter",
          gender: 1,
          avatar: "images/hp.jpg",
          position: "Developer",
          joinDate: "2023-09-01",
          lastOperation: "2024-05-22 10:30:15",
        },
        {
          name: "Hermione Granger",
          gender: 0,
          avatar: "images/HM.jpg",
          position: "Developer",
          joinDate: "2023-09-01",
          lastOperation: "2024-05-22 14:45:32",
        },
        {
          name: "Ron Weasley",
          gender: 1,
          avatar: "images/RW.jpg",
          position: "Designer",
          joinDate: "2023-09-15",
          lastOperation: "2024-05-22 09:12:47",
        },
        {
          name: "Albus Dumbledore",
          gender: 1,
          avatar: "images/AD.jpeg",
          position: "Manager",
          joinDate: "2023-09-01",
          lastOperation: "2024-05-22 10:30:15",
        },
        {
          name: "Severus Snape",
          gender: 1,
          avatar: "images/ss.jpg",
          position: "Manager",
          joinDate: "2023-09-01",
          lastOperation: "2024-05-22 10:30:15",
        },
        {
          name: "Minerva McGonagall",
          gender: 0,
          avatar: "images/MM.jpg",
          position: "Manager",
          joinDate: "2023-09-01",
          lastOperation: "2024-05-22 10:30:15",
        },
      ],
    };
  },
}).mount("#container");

//  <table class="employee-table">
//           <thead>
//             <tr>
//               <!-- th for table header -->
//               <th>Name</th>
//               <th>Gender</th>
//               <th>Avatar</th>
//               <th>Position</th>
//               <th>Join Date</th>
//               <th>Last Operation</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Harry Potter</td>
//               <td><span class="gender-badge gender-male">Male</span></td>
//               <td>
//                 <img src="images/hp.jpg" alt="HP" class="avatar harry" />
//               </td>
//               <td>
//                 <span class="position-badge position-manager">Developer</span>
//               </td>
//               <td>2023-09-01</td>
//               <td>2024-05-22 10:30:15</td>
//               <td>
//                 <div class="action-buttons">
//                   <button class="btn btn-edit">Edit</button>
//                   <button class="btn btn-delete">Delete</button>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <!-- td table data -->
//               <td>Hermione Granger</td>
//               <td><span class="gender-badge gender-female">Female</span></td>
//               <td>
//                 <img src="images/HM.jpg" alt="HG" class="avatar harry" />
//               </td>
//               <td>
//                 <span class="position-badge position-developer">Developer</span>
//               </td>
//               <td>2023-09-01</td>
//               <td>2024-05-22 14:45:32</td>
//               <td>
//                 <div class="action-buttons">
//                   <button class="btn btn-edit">Edit</button>
//                   <button class="btn btn-delete">Delete</button>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>Ron Weasley</td>
//               <td><span class="gender-badge gender-male">Male</span></td>
//               <td>
//                 <img src="images/RW.jpg" alt="RW" class="avatar ron" />
//               </td>
//               <td>
//                 <span class="position-badge position-designer">Designer</span>
//               </td>
//               <td>2023-09-15</td>
//               <td>2024-05-22 09:12:47</td>
//               <td>
//                 <div class="action-buttons">
//                   <button class="btn btn-edit">Edit</button>
//                   <button class="btn btn-delete">Delete</button>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>Albus Dumbledore</td>
//               <td><span class="gender-badge gender-male">Male</span></td>
//               <td>
//                 <img src="images/AD.jpeg" alt="AD" class="avatar dumbledore" />
//               </td>
//               <td>
//                 <span class="position-badge position-manager">Manager</span>
//               </td>
//               <td>2023-09-01</td>
//               <td>2024-05-22 10:30:15</td>
//               <td>
//                 <div class="action-buttons">
//                   <button class="btn btn-edit">Edit</button>
//                   <button class="btn btn-delete">Delete</button>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>Severus Snape</td>
//               <td><span class="gender-badge gender-male">Male</span></td>
//               <td>
//                 <img src="images/ss.jpg" alt="SS" class="avatar snape" />
//               </td>
//               <td>
//                 <span class="position-badge position-manager">Manager</span>
//               </td>
//               <td>2023-09-01</td>
//               <td>2024-05-22 10:30:15</td>
//               <td>
//                 <div class="action-buttons">
//                   <button class="btn btn-edit">Edit</button>
//                   <button class="btn btn-delete">Delete</button>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>Minerva McGonagall</td>
//               <td><span class="gender-badge gender-female">Female</span></td>
//               <td>
//                 <img src="images/MM.jpg" alt="MM" class="avatar mcgonagall" />
//               </td>
//               <td>
//                 <span class="position-badge position-manager">Manager</span>
//               </td>
//               <td>2023-09-01</td>
//               <td>2024-05-22 10:30:15</td>
//               <td>
//                 <div class="action-buttons">
//                   <button class="btn btn-edit">Edit</button>
//                   <button class="btn btn-delete">Delete</button>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
