import { TextField } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Highcharts from 'highcharts/highstock'
import variablePie from 'highcharts/modules/variable-pie'
import HighchartsReact from 'highcharts-react-official'
import React, { useEffect, useState } from 'react'

// chart
import chartOptions from '../utils/chartOptions'
import { useMyForm, useStyles } from '../utils/hooks'
import { labels } from '../utils/labels'
import Section from './Section'

variablePie(Highcharts)

function BelbinForm() {
  const classes = useStyles()
  const [options, setOptions] = useState<any>() // chart options
  const { inputs, handleInputChange, handleSubmit, results, sums, setSums, errors } = useMyForm()

  useEffect(() => {
    setOptions(chartOptions(results)) // chart
  }, [results])

  useEffect(() => {
    setSums({
      q1: +inputs.q1a + +inputs.q1b + +inputs.q1c + +inputs.q1d + +inputs.q1e + +inputs.q1f + +inputs.q1g + +inputs.q1h,
      q2: +inputs.q2a + +inputs.q2b + +inputs.q2c + +inputs.q2d + +inputs.q2e + +inputs.q2f + +inputs.q2g + +inputs.q2h,
      q3: +inputs.q3a + +inputs.q3b + +inputs.q3c + +inputs.q3d + +inputs.q3e + +inputs.q3f + +inputs.q3g + +inputs.q3h,
      q4: +inputs.q4a + +inputs.q4b + +inputs.q4c + +inputs.q4d + +inputs.q4e + +inputs.q4f + +inputs.q4g + +inputs.q4h,
      q5: +inputs.q5a + +inputs.q5b + +inputs.q5c + +inputs.q5d + +inputs.q5e + +inputs.q5f + +inputs.q5g + +inputs.q5h,
      q6: +inputs.q6a + +inputs.q6b + +inputs.q6c + +inputs.q6d + +inputs.q6e + +inputs.q6f + +inputs.q6g + +inputs.q6h,
      q7: +inputs.q7a + +inputs.q7b + +inputs.q7c + +inputs.q7d + +inputs.q7e + +inputs.q7f + +inputs.q7g + +inputs.q7h,
      // q8: +(inputs.q8a) + +(inputs.q8b) + +(inputs.q8c) + +(inputs.q8d) + +(inputs.q8e) + +(inputs.q8f) + +(inputs.q8g) + +(inputs.q8h),
    })
  }, [inputs, setSums])

  return (
    <>
      <CssBaseline />

      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Belbinov test tímových rolí
          </Typography>
        </Toolbar>
      </AppBar>

      <main className={classes.layout}>
        <Grid container spacing={3}>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>
              <div>
                Tento dotazník má celkovo 7 sekcií označených rímskymi číslicami. V každej sekcii dotazníka si vyberte
                tie výroky, ktoré vás najlepšie vystihujú. Môžete si vybrať jeden, dva, alebo viac výrokov. Vybrané
                výroky potom ohodnoťte bodovým hodnotením tak, že medzi ne rozdelíte vždy 10 bodov v každej sekcii. Ako
                pomôcka vám može slúžiť súčet rozdelených bodov pre danú sekciu zobrazený vpravo hore.
              </div>
            </Grid>
          </Paper>

          {/* new refactor */}
          {Object.entries(labels).map(([id, section]) => (
            // <Section title={section.title} questions={section.questions} id={1} />
            <Paper className={classes.paper}>
              <Grid container spacing={1}>
                <Grid item xs={10} sm={11}>
                  <h4>{section.title}</h4>
                </Grid>
                <Grid item xs={2} sm={1}>
                  <h3>{sums[id]}</h3>
                </Grid>
              </Grid>
              {Object.entries(section.questions).map(([questionKey, questionText]) => (
                <>
                  <Grid container spacing={1}>
                    <Grid item xs={10} sm={11}>
                      {questionText}
                    </Grid>
                    <Grid item xs={2} sm={1}>
                      <TextField
                        id={questionKey}
                        // inputProps={{ key: { questionKey } }} // TODO this does not work
                        name={questionKey}
                        type="number"
                        onChange={handleInputChange}
                        value={inputs[questionKey]}
                      />
                    </Grid>
                  </Grid>
                </>
              ))}
            </Paper>
          ))}

          <div className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={handleSubmit} className={classes.button}>
              Zobraziť výsledok
            </Button>
            {errors}
          </div>

          {!errors && (
            <Paper className={classes.paper}>
              <Grid container spacing={3}>
                <HighchartsReact highcharts={Highcharts} options={options} useRef="chartComponent1" />
              </Grid>
            </Paper>
          )}
        </Grid>
      </main>
    </>
  )
}

export default BelbinForm