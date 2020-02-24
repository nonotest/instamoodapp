import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { useTranslate, useLocale, useSetLocale, Title } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import { changeTheme } from './actions'
import { AppState } from '../types'

const useStyles = makeStyles({
  label: { width: '10em', display: 'inline-block' },
  button: { margin: '1em' }
})

const Configuration = () => {
  const translate = useTranslate()
  const locale = useLocale()
  const setLocale = useSetLocale()
  const classes = useStyles()
  const theme = useSelector((state: AppState) => state.theme)
  const dispatch = useDispatch()
  return (
    <Card>
      <Title title={translate('ts.configuration')} />
      <CardContent>
        <div className={classes.label}>{translate('ts.theme.name')}</div>
        <Button
          variant="contained"
          className={classes.button}
          color={theme === 'light' ? 'primary' : 'default'}
          onClick={() => dispatch(changeTheme('light'))}
        >
          {translate('ts.theme.light')}
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          color={theme === 'dark' ? 'primary' : 'default'}
          onClick={() => dispatch(changeTheme('dark'))}
        >
          {translate('ts.theme.dark')}
        </Button>
      </CardContent>
      <CardContent>
        <div className={classes.label}>{translate('ts.language')}</div>
        <Button
          variant="contained"
          className={classes.button}
          color={locale === 'en' ? 'primary' : 'default'}
          onClick={() => setLocale('en')}
        >
          en
        </Button>
      </CardContent>
    </Card>
  )
}

export default Configuration
