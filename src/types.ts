export type ListItemType = {
  id: number,
  name: string,
}

export type DetailsType = {
  id: number,
  name: string,
  avatar: string,
  details: {
    city: string,
    company: string,
    position: string,
  }
}