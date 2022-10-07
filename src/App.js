import React, { useEffect } from "react";
import { Amplify, API, Auth } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react-v1";
import {
  Flex,
  Divider,
  Heading,
  TextField,
  Button,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  View,
  ScrollView,
} from "@aws-amplify/ui-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { calcs } from "./calcs/";

import config from "./aws-exports";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

function App() {
  const APIname = "listapi";

  var style_spacing = {
    height: 10,
  };

  var style_divs = {
    padding: "30px",
  };
  const [itemName, setItemName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [itemValue, setItemValue] = React.useState(0);
  const [itemsSum, setItemsSum] = React.useState(0);
  const [itemsMax, setItemsMax] = React.useState(0);
  const [itemsMin, setItemsMin] = React.useState(0);
  const [itemsAverage, setItemsAverage] = React.useState(0);
  const [itemsMode, setItemsMode] = React.useState(0);
  const [itemsMedian, setItemsMedian] = React.useState(0);

  const [items, setItems] = React.useState([]);
  const [dataChart, setDataChart] = React.useState({});

  async function checkUser() {
    let user = await Auth.currentAuthenticatedUser();
    setUserName(user.username);
  }

  useEffect(() => {
    API.get(APIname, "/list/name").then((res) => {
      setItems(res);
      makecalcs(res);
    });
    checkUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: itemName,
      value: parseInt(itemValue),
    };
    await API.post(APIname, "/list", {
      body: data,
    }).then((res) => setItems([...items, data]));
    makecalcs([...items, data]);
    e.target.reset();
  };

  const handleDelete = (i) => {
    let data = items[i];
    API.del(APIname, "/list/object/" + data.name + "/" + data.value).then(
      (res) => {
        let _items =  items.filter(person => person.name != data.name);
        setItems(_items);
        makecalcs(_items);
      }
    );
  };

  const makeChart = (items, mode) => {
    items.forEach((i) => {
      i.mode = mode;
    });
    setDataChart(items);
  };

  const makecalcs = (i) => {
    let values = i.map(function (v) {
      return v["value"];
    });
    let mode = calcs.mode(values);
    setItemsMode(mode);
    setItemsSum(calcs.sum(values));
    setItemsMax(calcs.max(values));
    setItemsMin(calcs.min(values));
    setItemsAverage(calcs.average(values));
    setItemsMedian(calcs.median(values));
    makeChart(i, mode);
  };

  return (
    <div className="App">
      <Flex direction="column">
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem"
        >
          <View height="5rem" width="20rem">
            Hello <strong>{userName} </strong> {""} <AmplifySignOut />
          </View>
        </Flex>
        <Divider orientation="horizontal" />
        <div className="App-body" style={style_divs}>
          <Heading level={2}>Test calcs on front</Heading>
          <Flex direction="row">
            <Flex direction="column" width="30rem">
              <Heading level={6}>Form calcs</Heading>
              <form onSubmit={handleSubmit}>
                <TextField
                  placeholder="Jhon Due"
                  label="Name"
                  errorMessage="There is an error"
                  onChange={(e) => setItemName(e.target.value)}
                  isRequired={true}
                />

                <TextField
                  placeholder="$ 1,000"
                  label="Value"
                  type="number"
                  errorMessage="There is an error"
                  onChange={(e) => setItemValue(e.target.value)}
                  isRequired={true}
                />
                <div style={style_spacing}></div>
                <Button type="submit">Agregar</Button>
              </form>
              <Heading level={3}>List</Heading>
              <ScrollView width="100%" height="300px" maxWidth="580px">
                <Table highlightOnHover={false} variation="bordered">
                  <TableHead>
                    <TableRow>
                      <TableCell as="th">Name</TableCell>
                      <TableCell as="th">Value</TableCell>
                      <TableCell as="th">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell> {item.name} </TableCell>
                        <TableCell>$ {item.value} </TableCell>
                        <TableCell>
                          <Button
                            size="small"
                            loadingText=""
                            onClick={() => handleDelete(i)}
                            ariaLabel=""
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollView>
            </Flex>

            <Flex direction="column" width="100%">
              <Heading level={6}>Basic calcs</Heading>
              <Table highlightOnHover={false} variation="bordered">
                <TableHead>
                  <TableRow>
                    <TableCell as="th">Sum</TableCell>
                    <TableCell as="th">Max</TableCell>
                    <TableCell as="th">Min</TableCell>
                    <TableCell as="th">Mode</TableCell>
                    <TableCell as="th">Average</TableCell>
                    <TableCell as="th">Median</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{itemsSum}</TableCell>
                    <TableCell>{itemsMax}</TableCell>
                    <TableCell>{itemsMin}</TableCell>
                    <TableCell>{itemsMode}</TableCell>
                    <TableCell>{itemsAverage}</TableCell>
                    <TableCell>{itemsMedian}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={dataChart}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" barSize={30} />
                  <Line type="monotone" dataKey="mode" stroke="#ff7300" />
                </BarChart>
              </ResponsiveContainer>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
