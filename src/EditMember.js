import React, { useState, useEffect } from "react";
import axios from "axios";

const EditMember = ({ match }) => {
  const [memberData, setMemberData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    intiationYear: "",
    activeStatus: "Active",
    position: "",
    debts: 0,
    duesPaid: false,
    comments: "",
  });

  useEffect(() => {
    // Fetch member data by ID
    axios
      .get(`/api/members/${match.params.id}`)
      .then((response) => {
        setMemberData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the member data!", error);
      });
  }, [match.params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData({
      ...memberData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setMemberData({
      ...memberData,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/members/${match.params.id}`, memberData)
      .then((response) => {
        alert("Member information updated successfully!");
        // Redirect or update the UI as needed
      })
      .catch((error) => {
        console.error("There was an error updating the member data!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={memberData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={memberData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={memberData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={memberData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Initiation Year:</label>
        <input
          type="number"
          name="intiationYear"
          value={memberData.intiationYear}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Active Status:</label>
        <select
          name="activeStatus"
          value={memberData.activeStatus}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Alumni">Alumni</option>
          <option value="Pledge">Pledge</option>
          <option value="Demitted">Demitted</option>
        </select>
      </div>
      <div>
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={memberData.position}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Debts:</label>
        <input
          type="number"
          name="debts"
          value={memberData.debts}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Dues Paid:</label>
        <input
          type="checkbox"
          name="duesPaid"
          checked={memberData.duesPaid}
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <label>Comments:</label>
        <textarea
          name="comments"
          value={memberData.comments}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Member</button>
    </form>
  );
};

export default EditMember;
