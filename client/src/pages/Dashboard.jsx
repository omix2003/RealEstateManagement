import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default function Dashboard() {
  const kpis = [
    { label: 'Total Properties', value: 127 },
    { label: 'Occupied Units', value: '98%' },
    { label: 'Monthly Revenue', value: '$2.4M' },
    { label: 'Expiring Leases', value: 15 },
  ]

  const activities = [
    { who: 'Sarah Chen', what: 'Added new property', when: '2h ago' },
    { who: 'Mike Rodriguez', what: 'Updated lease terms', when: '4h ago' },
    { who: 'Emma Davis', what: 'Scheduled tour', when: '6h ago' },
    { who: 'James Wilson', what: 'Completed deal', when: '8h ago' },
  ]

  const expirations = [
    { tenant: 'Fashion Forward Boutique', property: '1234 Main St, Suite 100', daysLeft: '3d' },
    { tenant: 'Coffee & More Café', property: '5678 Oak Ave, Ground Floor', daysLeft: '10d' },
  ]

  const topProps = [
    { name: 'Downtown Plaza Mall', revenue: '$45,200', occupancy: '95%' },
    { name: 'Tech Business Center', revenue: '$38,750', occupancy: '88%' },
    { name: 'Riverside Office Complex', revenue: '$32,100', occupancy: '92%' },
  ]

  return (
    <Grid container spacing={2}>
      {kpis.map((kpi) => (
        <Grid item xs={12} sm={6} md={3} key={kpi.label}>
          <Card>
            <CardContent>
              <Typography variant="overline" color="text.secondary">
                {kpi.label}
              </Typography>
              <Typography variant="h5">{kpi.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            <List>
              {activities.map((act, i) => (
                <ListItem key={i} disableGutters>
                  <ListItemText primary={`${act.who} · ${act.what}`} secondary={act.when} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Upcoming Lease Expirations
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Tenant</TableCell>
                  <TableCell>Property</TableCell>
                  <TableCell align="right">Days Left</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {expirations.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.tenant}</TableCell>
                    <TableCell>{row.property}</TableCell>
                    <TableCell align="right">{row.daysLeft}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Top Properties by Revenue
            </Typography>
            <Grid container spacing={2}>
              {topProps.map((p) => (
                <Grid item xs={12} sm={6} md={4} key={p.name}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">{p.name}</Typography>
                      <Typography color="text.secondary">Revenue: {p.revenue}</Typography>
                      <Typography color="text.secondary">Occupancy: {p.occupancy}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}


