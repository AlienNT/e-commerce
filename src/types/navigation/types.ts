export interface NavigationListItemInterface {
    name: string,
    path: string,
    title: string,
    order?: number
}

export interface NavigationListInterface {
    navigationList: NavigationListItemInterface[];
}