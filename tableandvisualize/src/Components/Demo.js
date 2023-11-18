import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "Keyword", headerName: "Keyword Value", width: 150 },
  { field: "Count", headerName: "Count Value", width: 150 }
];

const rows = [
  { id: 1, Keyword: "Snow", Count: 35 },
  { id: 2, Keyword: "Rain", Count: 45 },
  { id: 3, Keyword: "Sea", Count: 78 },
  { id: 4, Keyword: "sunny", Count: 92 },
  { id: 5, Keyword: "windy", Count: 108 },
  { id: 6, Keyword: "stormy", Count: 72 },
  { id: 7, Keyword: "cold", Count: 23 },
  { id: 8, Keyword: "hot", Count: 67 },
  { id: 9, Keyword: "mild", Count: 89 },
  { id: 10, Keyword: "wild", Count: 1 },
  { id: 11, Keyword: "styled", Count: 5 },
  { id: 12, Keyword: "trailed", Count: 108 }
];

const customPaginationProps = {
  color: "skyblue", // Set the pagination highlight color to sky blue
};

const customSortIconProps = {
  style: {
    color: "skyblue", // Set the sorting icon color to sky blue
  },
};

export default function DataTable() {
  return (
    <div style={{ height: 700, width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        style={{ color: "skyblue" }}
        // components={{
        //   Pagination: (props) => (
        //     <div style={{ backgroundColor: "black" }}>
        //       <props.components.Pagination {...props} {...customPaginationProps} />
        //     </div>
        //   ),
        //   ColumnSortedIcon: (props) => (
        //     <props.components.ColumnSortedIcon {...props} {...customSortIconProps} />
        //   ),
        // }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 }
          }
        }}
        pageSizeOptions={[9, 18]}
      />
    </div>
  );
}
