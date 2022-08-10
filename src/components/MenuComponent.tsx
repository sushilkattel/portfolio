import {
    MenuList, MenuButton, IconButton, Menu, MenuItem
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

export const MenuComponent = () => {
  return (
    <Menu>
            <MenuButton 
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="ghost"
              color="current"
              size={'lg'}
              cursor={'none'}
            />
            <MenuList>
              <MenuItem>
                Projects
              </MenuItem>
              <MenuItem>
                Contact
              </MenuItem>
            </MenuList>
          </Menu>
  )
}
