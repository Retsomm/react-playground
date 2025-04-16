import React, { useEffect, useState } from 'react';
import './LiveUserFilter.css';
const LiveUserFilter = () => {
    const [users, setUsers] = useState([]); // 儲存 API 回傳的使用者資料
    const [searchTerm, setSearchTerm] = useState(''); // 儲存搜尋關鍵字
  
    useEffect(() => {
      const fetchUsers = async () => {
        const res = await fetch('https://randomuser.me/api?results=20');
        const data = await res.json();
        setUsers(data.results);
      };
  
      fetchUsers();
    }, []);
  
    const filteredUsers = users.filter(user => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const location = `${user.location.city}, ${user.location.country}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase()) || location.includes(searchTerm.toLowerCase());
    });
  
    return (
      <div className="user-container">
        <header className="header">
          <h4 className="title">Live User Filter</h4>
          <small className="subtitle">Search by name and/or location</small>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>
  
        <ul className="user-list">
          {filteredUsers.length === 0 ? (
            <li><h3>Loading...</h3></li>
          ) : (
            filteredUsers.map((user, index) => (
              <li key={index}>
                <img src={user.picture.large} alt={user.name.first} />
                <div className="user-info">
                  <h4>{user.name.first} {user.name.last}</h4>
                  <p>{user.location.city}, {user.location.country}</p>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }

export default LiveUserFilter