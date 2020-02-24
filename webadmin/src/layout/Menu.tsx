import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import SettingsIcon from '@material-ui/icons/Settings'
import { useMediaQuery, Theme } from '@material-ui/core'
import { useTranslate, MenuItemLink } from 'react-admin'

import medias from '../medias'
import mediaSources from '../mediaSources'
import moods from '../moods'

import SubMenu from './SubMenu'
import { AppState } from '../types'

type MenuName = 'menuForums'

interface Props {
  dense: boolean
  logout: () => void
  onMenuClick: () => void
}

const Menu: FC<Props> = ({ onMenuClick, dense, logout }) => {
  const [state, setState] = useState({
    menuForums: false
  })
  const translate = useTranslate()
  const isXSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'))
  const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen)
  useSelector((state: AppState) => state.theme) // force rerender on theme change

  const handleToggle = (menu: MenuName) => {
    setState(state => ({ ...state, [menu]: !state[menu] }))
  }

  return (
    <div>
      <SubMenu
        handleToggle={() => handleToggle('menuForums')}
        isOpen={state.menuForums}
        sidebarIsOpen={open}
        name="ts.menu.medias"
        icon={<medias.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={`/medias`}
          primaryText={translate(`resources.medias.name`, {
            smart_count: 2
          })}
          leftIcon={<medias.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/mediaSources`}
          primaryText={translate(`resources.mediaSources.name`, {
            smart_count: 2
          })}
          leftIcon={<mediaSources.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/moods`}
          primaryText={translate(`resources.moods.name`, {
            smart_count: 2
          })}
          leftIcon={<moods.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      {isXSmall && (
        <MenuItemLink
          to="/configuration"
          primaryText={translate('ts.configuration')}
          leftIcon={<SettingsIcon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      )}
      {isXSmall && logout}
    </div>
  )
}

export default Menu
