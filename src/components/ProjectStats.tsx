import { AreaChart, Card, Color, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Tracker } from "@tremor/react";
import Modal from "./Modal";
import openSVG from "../assets/open.svg";
import { Badge } from "./ui/badge";

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
    name: "David Wson",
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
];

const fakeData = [
  {
    status: "TO DO",
    asignee: fakeData2[1],
    "key": "SP-001",
    "summary": "Assess mission objectives...",
    "deadline": "2023-11-15"
  },
  {
    status: "TO DO",
    asignee: fakeData2[2],
    "key": "SP-002",
    "summary": "Design spacecraft prototype...",
    "deadline": "2024-02-28"
  },
  {
    status: "IN PROGRESS",
    asignee: fakeData2[0],
    "key": "SP-003",
    "summary": "Train astronaut crew...",
    "deadline": "2024-04-15"
  },
  {
    status: "DONE",
    asignee: fakeData2[4],
    "key": "SP-004",
    "summary": "Develop communication protocols...",
    "deadline": "2024-03-10"
  },
  {
    status: "TO DO",
    asignee: fakeData2[1],
    "key": "SP-005",
    "summary": "Integrate spacecraft systems...",
    "deadline": "2024-06-30"
  },
  {
    status: "TO BE REVIEWED",
    asignee: fakeData2[3],
    "key": "SP-006",
    "summary": "Secure permits and clearances...",
    "deadline": "2024-05-20"
  },
  {
    status: "TO DO",
    asignee: fakeData2[6],
    "key": "SP-007",
    "summary": "Plan emergency response...",
    "deadline": "2024-07-15"
  },
  {
    status: "TO DO",
    asignee: fakeData2[1],
    "key": "SP-08",
    "summary": "Evaluate mission risks...",
    "deadline": "2024-10-05"
  },
  {
    status: "TO BE REVIEWED",
    asignee: fakeData2[3],
    "key": "SP-09",
    "summary": "Finalize mission budget...",
    "deadline": "2024-11-20"
  }
];

interface Tracker {
  color: Color;
  tooltip: string;
}

const aux: Record<string, Color> = {
  "TO DO": "gray",
  "IN PROGRESS": "cyan",
  "TO BE REVIEWED": "yellow",
  "DONE": "green",
}

const color: Record<string, string> = {
  "TO DO": "white",
  "IN PROGRESS": "black",
  "TO BE REVIEWED": "black",
  "DONE": "white",
}

const aux2 = [
  { color: "gray", tooltip: "TO DO"},
  { color: "cyan", tooltip: "IN PROGRESS"},
  { color: "yellow", tooltip: "TO BE REVIEWED"},
  { color: "green", tooltip: "DONE"}
]

// @ts-expect-error - this is a fake data
const fakeData3: Tracker[] = [
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  2, 2, 2,
  1, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
].map (item => aux2[item]);

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
      textAlign: "left",
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
            <div style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
            }}>
              ...
            </div>
          </div>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}>
          <h3 style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            marginBottom: "1rem",
          }}>Tasks</h3>
          <div style={{
            paddingTop: "1rem",
            padding: "3.5rem",
            marginBottom: "4rem",
            height: "100px",
          }}>
            <div style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}>Tasks Overview</div>
            <div style={{
              textAlign: "right",
              marginBottom: "1.5rem",
            }}>
              28% completed
            </div>
            <Tracker data={fakeData3} className="m-2"/>              
          </div>
          <div style={{
            marginTop: "2rem",
          }}>
            <Table className="mt-5 ml-10">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Key</TableHeaderCell>
                  <TableHeaderCell>Summary</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Asignee</TableHeaderCell>
                  <TableHeaderCell>Deadline</TableHeaderCell>
                  <TableHeaderCell></TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fakeData.map((item) => (
                  <TableRow key={item.key}>
                    <TableCell>{item.key}</TableCell>
                    <TableCell>{item.summary}</TableCell>
                    <TableCell>
                      <Badge style={{
                        backgroundColor: aux[item.status],
                        color: color[item.status],
                      }} >{item.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                      }}>
                        <img
                          src={item.asignee.photo}
                          alt="profile"
                          style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            marginRight: "1rem",
                          }}></img>
                          {item.asignee.name}
                        </div>
                    </TableCell>
                    <TableCell>
                      {item.deadline}
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
          <div style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "2rem",
          }}>
            ...
          </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}>
          </div>
        </div>
      </div>
    </div>
  </Modal>)
}