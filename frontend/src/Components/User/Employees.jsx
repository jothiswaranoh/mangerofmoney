import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 12px;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Loading = styled.div`
  text-align: center;
  font-style: italic;
  color: #888;
`;

const Error = styled.div`
  text-align: center;
  color: #ff0000;
`;

const EmployeeList = () => {
  const [customersData, setCustomersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = [
          {
            CustomerID: 1001,
            CustomerName: "Nirav Joshi",
            CustomerEmail: "nirav@gmail.com",
            address: "coimbatore",
            Status: "Active",
            Weeks: "40",
            Budget: "Rs.2.4k",
            Location: "India",
          },
          {
            CustomerID: 1001,
            CustomerName: "Nirav Joshi",
            CustomerEmail: "nirav@gmail.com",
            address: "coimbatore",
            Status: "Active",
            StatusBg: "#8BE78B",
            Weeks: "40",
            Budget: "Rs.2.4k",
            Location: "India",
          },
          {
            CustomerID: 1002,

            CustomerName: "Sunil Joshi",
            CustomerEmail: "sunil@gmail.com",
            address: "Elite Admin",
            Status: "Active",

            StatusBg: "#8BE78B",
            Weeks: "11",
            Budget: "Rs.3.9k",
            Location: "India",
          },
          {
            CustomerID: 1003,

            CustomerName: "Andrew McDownland",
            CustomerEmail: "andrew@gmail.com",
            address: "Real Homes WP Theme",
            Status: "Pending",
            StatusBg: "#FEC90F",
            Weeks: "19",
            Budget: "Rs.24.5k",
            Location: "USA",
          },
          {
            CustomerID: 1004,

            CustomerName: "Christopher Jamil",
            CustomerEmail: "jamil@gmail.com",
            address: "MedicalPro WP Theme",
            Status: "Completed",
            StatusBg: "#8BE78B",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1005,

            CustomerName: "Michael",
            CustomerEmail: "michael@gmail.com",
            address: "Weekly WP Theme",
            Status: "Cancel",
            StatusBg: "red",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1006,
            CustomerName: "Nirav Joshi",
            CustomerEmail: "nirav@gmail.com",
            address: "coimbatore",
            Status: "Active",
            StatusBg: "#8BE78B",
            Weeks: "40",
            Budget: "Rs.2.4k",
            Location: "India",
          },
          {
            CustomerID: 1007,

            CustomerName: "Sunil Joshi",
            CustomerEmail: "sunil@gmail.com",
            address: "Elite Admin",
            Status: "Active",

            StatusBg: "#8BE78B",
            Weeks: "11",
            Budget: "Rs.3.9k",
            Location: "India",
          },
          {
            CustomerID: 1008,

            CustomerName: "Andrew McDownland",
            CustomerEmail: "andrew@gmail.com",
            address: "Real Homes WP Theme",
            Status: "Pending",
            StatusBg: "#FEC90F",
            Weeks: "19",
            Budget: "Rs.24.5k",
            Location: "USA",
          },
          {
            CustomerID: 1009,

            CustomerName: "Christopher Jamil",
            CustomerEmail: "jamil@gmail.com",
            address: "MedicalPro WP Theme",
            Status: "Completed",
            StatusBg: "#8BE78B",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1010,

            CustomerName: "Michael",
            CustomerEmail: "michael@gmail.com",
            address: "Weekly WP Theme",
            Status: "Cancel",
            StatusBg: "red",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1011,
            CustomerName: "Nirav Joshi",
            CustomerEmail: "nirav@gmail.com",
            address: "coimbatore",
            Status: "Active",
            StatusBg: "#8BE78B",
            Weeks: "40",
            Budget: "Rs.2.4k",
            Location: "India",
          },
          {
            CustomerID: 1012,

            CustomerName: "Sunil Joshi",
            CustomerEmail: "sunil@gmail.com",
            address: "Elite Admin",
            Status: "Active",

            StatusBg: "#8BE78B",
            Weeks: "11",
            Budget: "Rs.3.9k",
            Location: "India",
          },
          {
            CustomerID: 1013,

            CustomerName: "Andrew McDownland",
            CustomerEmail: "andrew@gmail.com",
            address: "Real Homes WP Theme",
            Status: "Pending",
            StatusBg: "#FEC90F",
            Weeks: "19",
            Budget: "Rs.24.5k",
            Location: "USA",
          },
          {
            CustomerID: 1014,

            CustomerName: "Christopher Jamil",
            CustomerEmail: "jamil@gmail.com",
            address: "MedicalPro WP Theme",
            Status: "Completed",
            StatusBg: "#8BE78B",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1015,

            CustomerName: "Michael",
            CustomerEmail: "michael@gmail.com",
            address: "Weekly WP Theme",
            Status: "Cancel",
            StatusBg: "red",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1016,
            CustomerName: "Nirav Joshi",
            CustomerEmail: "nirav@gmail.com",
            address: "coimbatore",
            Status: "Active",
            StatusBg: "#8BE78B",
            Weeks: "40",
            Budget: "Rs.2.4k",
            Location: "India",
          },
          {
            CustomerID: 1017,

            CustomerName: "Sunil Joshi",
            CustomerEmail: "sunil@gmail.com",
            address: "Elite Admin",
            Status: "Active",

            StatusBg: "#8BE78B",
            Weeks: "11",
            Budget: "Rs.3.9k",
            Location: "India",
          },
          {
            CustomerID: 1018,

            CustomerName: "Andrew McDownland",
            CustomerEmail: "andrew@gmail.com",
            address: "Real Homes WP Theme",
            Status: "Pending",
            StatusBg: "#FEC90F",
            Weeks: "19",
            Budget: "Rs.24.5k",
            Location: "USA",
          },
          {
            CustomerID: 1019,

            CustomerName: "Christopher Jamil",
            CustomerEmail: "jamil@gmail.com",
            address: "MedicalPro WP Theme",
            Status: "Completed",
            StatusBg: "#8BE78B",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1020,

            CustomerName: "Michael",
            CustomerEmail: "michael@gmail.com",
            address: "Weekly WP Theme",
            Status: "Cancel",
            StatusBg: "red",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1021,
            CustomerName: "Nirav Joshi",
            CustomerEmail: "nirav@gmail.com",
            address: "Hosting Press HTML",
            Status: "Active",
            StatusBg: "#8BE78B",
            Weeks: "40",
            Budget: "Rs.2.4k",
            Location: "India",
          },
          {
            CustomerID: 1022,

            CustomerName: "Sunil Joshi",
            CustomerEmail: "sunil@gmail.com",
            address: "Elite Admin",
            Status: "Active",

            StatusBg: "#8BE78B",
            Weeks: "11",
            Budget: "Rs.3.9k",
            Location: "India",
          },
          {
            CustomerID: 1023,

            CustomerName: "Andrew McDownland",
            CustomerEmail: "andrew@gmail.com",
            address: "Real Homes WP Theme",
            Status: "Pending",
            StatusBg: "#FEC90F",
            Weeks: "19",
            Budget: "Rs.24.5k",
            Location: "USA",
          },
          {
            CustomerID: 1024,

            CustomerName: "Christopher Jamil",
            CustomerEmail: "jamil@gmail.com",
            address: "MedicalPro WP Theme",
            Status: "Completed",
            StatusBg: "#8BE78B",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1025,

            CustomerName: "Michael",
            CustomerEmail: "michael@gmail.com",
            address: "Weekly WP Theme",
            Status: "Cancel",
            StatusBg: "red",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1026,
            CustomerName: "Nirav Joshi",
            CustomerEmail: "nirav@gmail.com",
            address: "Hosting Press HTML",
            Status: "Active",
            StatusBg: "#8BE78B",
            Weeks: "40",
            Budget: "Rs.2.4k",
            Location: "India",
          },
          {
            CustomerID: 1027,

            CustomerName: "Sunil Joshi",
            CustomerEmail: "sunil@gmail.com",
            address: "Elite Admin",
            Status: "Active",

            StatusBg: "#8BE78B",
            Weeks: "11",
            Budget: "Rs.3.9k",
            Location: "India",
          },
          {
            CustomerID: 1028,

            CustomerName: "Andrew McDownland",
            CustomerEmail: "andrew@gmail.com",
            address: "Real Homes WP Theme",
            Status: "Pending",
            StatusBg: "#FEC90F",
            Weeks: "19",
            Budget: "Rs.24.5k",
            Location: "USA",
          },
          {
            CustomerID: 1029,

            CustomerName: "Christopher Jamil",
            CustomerEmail: "jamil@gmail.com",
            address: "MedicalPro WP Theme",
            Status: "Completed",
            StatusBg: "#8BE78B",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1030,

            CustomerName: "Michael",
            CustomerEmail: "michael@gmail.com",
            address: "Weekly WP Theme",
            Status: "Cancel",
            StatusBg: "red",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1031,
            CustomerName: "Nirav Joshi",
            CustomerEmail: "nirav@gmail.com",
            address: "Hosting Press HTML",
            Status: "Active",
            StatusBg: "#8BE78B",
            Weeks: "40",
            Budget: "Rs.2.4k",
            Location: "India",
          },
          {
            CustomerID: 1032,

            CustomerName: "Sunil Joshi",
            CustomerEmail: "sunil@gmail.com",
            address: "Elite Admin",
            Status: "Active",

            StatusBg: "#8BE78B",
            Weeks: "11",
            Budget: "Rs.3.9k",
            Location: "India",
          },
          {
            CustomerID: 1033,

            CustomerName: "Andrew McDownland",
            CustomerEmail: "andrew@gmail.com",
            address: "Real Homes WP Theme",
            Status: "Pending",
            StatusBg: "#FEC90F",
            Weeks: "19",
            Budget: "Rs.24.5k",
            Location: "USA",
          },
          {
            CustomerID: 1034,

            CustomerName: "Christopher Jamil",
            CustomerEmail: "jamil@gmail.com",
            address: "MedicalPro WP Theme",
            Status: "Completed",
            StatusBg: "#8BE78B",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1035,

            CustomerName: "Michael",
            CustomerEmail: "michael@gmail.com",
            address: "Weekly WP Theme",
            Status: "Cancel",
            StatusBg: "red",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1036,
            CustomerName: "Nirav Joshi",
            CustomerEmail: "nirav@gmail.com",
            address: "Hosting Press HTML",
            Status: "Active",
            StatusBg: "#8BE78B",
            Weeks: "40",
            Budget: "Rs.2.4k",
            Location: "India",
          },
          {
            CustomerID: 1037,

            CustomerName: "Sunil Joshi",
            CustomerEmail: "sunil@gmail.com",
            address: "Elite Admin",
            Status: "Active",

            StatusBg: "#8BE78B",
            Weeks: "11",
            Budget: "Rs.3.9k",
            Location: "India",
          },
          {
            CustomerID: 1038,

            CustomerName: "Andrew McDownland",
            CustomerEmail: "andrew@gmail.com",
            address: "Real Homes WP Theme",
            Status: "Pending",
            StatusBg: "#FEC90F",
            Weeks: "19",
            Budget: "Rs.24.5k",
            Location: "USA",
          },
          {
            CustomerID: 1039,
            CustomerName: "Christopher Jamil",
            CustomerEmail: "jamil@gmail.com",
            address: "MedicalPro WP Theme",
            Status: "Completed",
            StatusBg: "#8BE78B",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
          {
            CustomerID: 1040,
            CustomerName: "Michael",
            CustomerEmail: "michael@gmail.com",
            address: "Weekly WP Theme",
            Status: "Cancel",
            StatusBg: "red",
            Weeks: "34",
            Budget: "Rs.16.5k",
            Location: "USA",
          },
        ];
        setCustomersData(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchCustomerData();
  }, []);

  return (
    <Wrapper>
      <Heading>Customer Data</Heading>
      {loading && <Loading>Loading...</Loading>}
      {error && <Error>{error}</Error>}
      {!loading && !error && (
        <Table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Project Name</th>
              <th>Status</th>
              <th>Weeks</th>
              <th>Budget</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((customer) => (
              <tr key={customer.CustomerID}>
                <td>{customer.CustomerID}</td>
                <td>{customer.CustomerName}</td>
                <td>{customer.CustomerEmail}</td>
                <td>{customer.address}</td>
                <td>{customer.Status}</td>
                <td>{customer.Weeks}</td>
                <td>{customer.Budget}</td>
                <td>{customer.Location}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Wrapper>
  );
};

export default EmployeeList;
