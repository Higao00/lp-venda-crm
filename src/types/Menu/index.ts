export interface T_Menu {
    label: string
    link: string
    subMenu?: T_SubMenu[]
}

export interface T_SubMenu {
    label: string
    link: string
}
