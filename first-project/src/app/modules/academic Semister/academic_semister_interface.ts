
export type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TacademicSemisterName = 'Autumn' | 'Summar' | 'Fall'

 export type TacademicSemisterCode = '01' | '02' | '03'

export type TAcademisSemister = {
    name: TacademicSemisterName,
    code:TacademicSemisterCode,
    year:Date,
    startMonth: TMonth,
    endMonth:TMonth
}