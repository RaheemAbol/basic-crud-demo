
### Steps to Set Up the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/RaheemAbol/basic-crud-demo.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd basic-crud-demo
   ```

3. **Set Up the Backend:**
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Ensure MongoDB is running:
     ```bash
     mongod --dbpath <path_to_your_data_directory>
     ```
     (Replace `<path_to_your_data_directory>` with the actual path to your MongoDB data directory.)
   - Start the backend server:
     ```bash
     node server.js
     ```

4. **Set Up the Frontend:**
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

### Additional Notes

- **MongoDB Connection String:**
  If using a different MongoDB setup (e.g., MongoDB Atlas), update the connection string in `backend/server.js` to point to your MongoDB instance.


By following these steps, you should be able to clone the project and set it up locally.
