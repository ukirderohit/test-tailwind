export interface ExampleData {
  airline?: { name: string };
  name?: string;
  trips?: string;
  flightName?: string;
}

export type ExampleDataList = ExampleData[];

export const columns = [
  {
    Header: 'Passenger name',
    accessor: 'name',
  },
  {
    Header: 'Total trips',
    accessor: 'trips',
  },
  {
    Header: 'Current flight',
    accessor: 'flightName',
  },
];

export const formatRowData = (rawData: ExampleData[]) =>
  rawData.map((info) => {
    if (!info.name) {
      return {};
    }

    return {
      name: info.name,
      trips: info.trips,
      flightName: info.airline?.name,
    };
  });

export const getData = async (pageNo = 1, size = 10) => {
  const response = await fetch(
    `https://api.instantwebtools.net/v1/passenger?page=${pageNo}&size=${size}`
  );
  const data = await response.json();
  return data;
};
