export type Project = {
  state: boolean,
  title: string,
  desc: string,
  name: string,
  genDate: string,
  tag: Tag,
}

export type Tag = {
  headCnt: string,
  term: string,
  role: string,
  lang?: string,
}