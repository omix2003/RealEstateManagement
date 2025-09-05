import { useMemo } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function Properties() {
  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'Property', flex: 1, minWidth: 180 },
      { field: 'type', headerName: 'Type', width: 120 },
      { field: 'city', headerName: 'City', width: 140 },
      { field: 'occupancy', headerName: 'Occupancy', width: 130 },
      { field: 'monthlyRevenue', headerName: 'Monthly Revenue', width: 170 },
    ],
    []
  )

  const rows = [
    { id: '1', name: 'Downtown Plaza Mall', type: 'Retail', city: 'NYC', occupancy: '95%', monthlyRevenue: '$45,200' },
    { id: '2', name: 'Tech Business Center', type: 'Office', city: 'SF', occupancy: '88%', monthlyRevenue: '$38,750' },
  ]

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Properties
        </Typography>
        <div style={{ height: 420, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} initialState={{ pagination: { paginationModel: { pageSize: 5 } } }} />
        </div>
      </CardContent>
    </Card>
  )
}


