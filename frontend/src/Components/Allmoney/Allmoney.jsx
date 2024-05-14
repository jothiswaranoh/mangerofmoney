import { InnerLayout } from "../../styles/Layouts";
import styled from "styled-components";
import React from "react";

const Allmoney = () => {
  const users = [
    {
      userId: 101,
      name: "Jothis",
      loanAmount: 500,
      amountPayable: 550,
      loanDate: "3/5/2024",
      dueDate: "3/5/2025",
    },
    {
      userId: 102,
      name: "Alice",
      loanAmount: 700,
      amountPayable: 750,
      loanDate: "4/10/2024",
      dueDate: "4/10/2025",
    },
    {
      userId: 103,
      name: "Bob",
      loanAmount: 600,
      amountPayable: 650,
      loanDate: "2/15/2024",
      dueDate: "2/15/2025",
    },
  ];

  return (
    <UserCardStyled>
      <InnerLayout>
        <h1>All Moneys</h1>
        <div className="stats-con">
          <div className="chart-con">
            <div className="amount-con">
              {/* Map over user data array */}
              {users.map((user, index) => (
                <div className="usercard" key={index}>
                  <div className="cardTop">
                    <p className="avator">JS</p>
                    <div className="">
                      <p>
                        UserId: <span>{user.userId}</span>
                      </p>
                      <p>
                        Name: <span>{user.name}</span>
                      </p>
                    </div>
                  </div>
                  <div className="cardBody">
                    <div className="">
                      <p>
                        Loan Amount: <span>{user.loanAmount}</span>
                      </p>
                      <p>
                        Amount Payable: <span>{user.amountPayable}</span>
                      </p>
                    </div>
                    <div className="">
                      <p>
                        Loan Date: <span>{user.loanDate}</span>
                      </p>
                      <p>
                        Due Date: <span>{user.dueDate}</span>
                      </p>
                    </div>
                  </div>
                  <h3>Total Amount: {user.amountPayable}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InnerLayout>
    </UserCardStyled>
  );
};

export const UserCardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .usercard {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          p {
            color: black;
            font-weight: bold;
          }
          span {
            font-weight: 400;
          }
          h3 {
            padding: 1rem;
            color: green;
          }
          .cardTop {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border-bottom: 1px solid #dcd7d7;
          }
          .avator {
            border-radius: 50%;
            height: 70px;
            width: 70px;
            background-color: #dcd7d7;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cardBody {
            padding: 1rem;
            font-size: 17px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
`;

export default Allmoney;
