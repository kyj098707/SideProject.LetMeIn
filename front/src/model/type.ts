export type Project = {
  postNum: number,
  state: boolean,
  title: string,
  desc: string,
  name: string,
  genDate: string,
  tag: Tag,
}

export type Tag = {
  term: string,
  headCnt: string,
  role: string,
  lang?: string[],
}