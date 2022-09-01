import {
    MenuList, MenuButton, IconButton, Menu, MenuItem, Link
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
              <Link href='https://github.com/sushilkattel' isExternal>
              <MenuItem>
                Projects
              </MenuItem>
              </Link>
            </MenuList>
          </Menu>
  )
}
