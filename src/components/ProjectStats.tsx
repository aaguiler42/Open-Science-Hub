import { AreaChart, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@tremor/react";
import Modal from "./Modal";
import openSVG from "../assets/open.svg";

const chartdata = [
  { date: "2023-10-01", visits: 100 },
  { date: "2023-10-02", visits: 120 },
  { date: "2023-10-03", visits: 180 },
  { date: "2023-10-04", visits: 170 },
  { date: "2023-10-05", visits: 200 },
  { date: "2023-10-06", visits: 250 },
  { date: "2023-10-07", visits: 260 },
  { date: "2023-10-08", visits: 270 },
  { date: "2023-10-09", visits: 240 },
  { date: "2023-10-10", visits: 300 },
  { date: "2023-10-11", visits: 280 },
  { date: "2023-10-12", visits: 260 },
  { date: "2023-10-13", visits: 250 },
  { date: "2023-10-14", visits: 300 },
  { date: "2023-10-15", visits: 310 },
  { date: "2023-10-16", visits: 350 },
  { date: "2023-10-17", visits: 400 },
  { date: "2023-10-18", visits: 380 },
  { date: "2023-10-19", visits: 450 },
  { date: "2023-10-20", visits: 500 },
  { date: "2023-10-21", visits: 460 },
  { date: "2023-10-22", visits: 520 },
  { date: "2023-10-23", visits: 550 },
  { date: "2023-10-24", visits: 580 },
  { date: "2023-10-25", visits: 560 },
  { date: "2023-10-26", visits: 600 },
  { date: "2023-10-27", visits: 200 },
  { date: "2023-10-28", visits: 800 },
  { date: "2023-10-29", visits: 850 },
  { date: "2023-10-30", visits: 950 },
];

const fakeData2 = [
  {
    photo: '/person-0.jpg',
    name: "John Doe",
    email: "johndoe@example.com",
    location: "New York, NY"
  },
  {
    photo: '/person-1.jpg',
    name: "Jane Smith",
    email: "janesmith@example.com",
    location: "Los Angeles, CA"
  },
  {
    photo: '/person-2.jpg',
    name: "Bob Johnson",
    email: "bjohnson@example.com",
    location: "Chicago, IL"
  },
  {
    photo: '/person-3.jpg',
    name: "Alice Brown",
    email: "alicebrown@example.com",
    location: "Houston, TX"
  },
  {
    photo: '/person-4.jpg',
    name: "David Wilson",
    email: "dwilson@example.com",
    location: "Miami, FL"
  },
  {
    photo: '/person-5.jpg',
    name: "Emily Taylor",
    email: "etaylor@example.com",
    location: "San Francisco, CA"
  },
  {
    photo: '/person-6.jpg',
    name: "Michael Lee",
    email: "mlee@example.com",
    location: "Seattle, WA"
  },
  {
    photo: '/person-7.jpg',
    name: "Sara Davis",
    email: "sdavis@example.com",
    location: "Boston, MA"
  },
];

export default function Stats(props:{
  onClose: () => void;
}){
  return (<Modal
    showX={true}
    onClose={props.onClose}
    width="80vw"
    height="80vh"
  >
    <div style={{
      padding: "1.5rem 2rem",
    }}>
      <h1 style={{
          textAlign: "center",
          color: "#ddd",
          fontWeight: "500",
          marginBottom: "1rem",
          fontSize: "1.8rem",
        }}
      >Dashboard</h1>

      <div style={{
          display: "flex",
      }}>
        <div>
          <div style={{
            width: "550px",
            display: "flex",
            flexDirection: "column",
          }}>
            <h3 style={{
              textAlign: "center",
              color: "white",
              fontWeight: "500",
              marginBottom: "1rem",
            }}>Visits per day</h3>
            <AreaChart
              className="graph"
              data={chartdata}
              index="date"
              categories={["visits"]}
              colors={["indigo"]}
              showAnimation={true}
              showLegend={false}
            />
          </div>
          <div>
            <h3 style={{
                textAlign: "center",
                color: "white",
                fontWeight: "500",
                marginBottom: "1rem",
              }}>Collaborators</h3>
            <Table className="mt-5 ml-10">
              <TableHead>
                <TableRow>
                  <TableHeaderCell></TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>E-mail</TableHeaderCell>
                  <TableHeaderCell>Location</TableHeaderCell>
                  <TableHeaderCell></TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fakeData2.map((item) => (
                  <TableRow key={item.photo}>
                    <TableCell>
                      <img
                        src={item.photo}
                        alt="profile"
                        style={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}></img>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <div>{item.email}</div>
                    </TableCell>
                    <TableCell>
                      <div>{item.location}</div>
                    </TableCell>
                    <TableCell>
                    <img
                      src={openSVG}
                      alt="open"
                      style={{
                        cursor: "pointer",
                        width: "1.2rem",
                        height: "1.2rem",
                        margin: "0.5rem",
                      }}/>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <div>
          <div>
            TASK STATUS
          </div>
          <div>
            TASKS...
          </div>
          <div>
            ADD NEW TASKS
          </div>
        </div>
      </div>
    </div>
  </Modal>)
}