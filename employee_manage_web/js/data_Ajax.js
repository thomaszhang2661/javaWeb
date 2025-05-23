import { createApp } from "https://unpkg.com/vue@3.2.47/dist/vue.esm-browser.js";
// import axios or specific exports as needed, for example:


// 导出export
export const app = createApp({
  data() {
    return {
      searchForm: {
        // 封装用户输入的查询条件
        name: "",
        gender: "",
        job: "",
      },
      employees: [],
    };
  },
  // 方法
  methods: {
    searchEmployee() {
      // 发送请求
      axios
        .get("https://web-server.itheima.net/emps/list", {
          params: {
            name: this.searchForm.name,
            age: this.searchForm.age,
            job: this.searchForm.job,
          }
        })
        .then((response) => {
          this.employees = response.data;
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
        });
    },
    clear() {
      // 清空搜索条件
      this.searchForm.name = "";
      this.searchForm.gender = "";
      this.searchForm.job = "";
    },
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
