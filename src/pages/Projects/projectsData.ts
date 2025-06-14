import { ROUTES } from "@/constants/routes";

export const projects = [
  {
    projectName: "To-do list",
    description: "Таск-менеджер и приложение для ведения списка дел",
    imageUrl: "/src/assets/to-do.png",
    srcProject: ROUTES.TODO_LIST
  },
  {
    projectName: "Календарь",
    description: "Программа, которая помогает структурировать день, неделю и месяц, планировать задачи и не забывать о важных делах",
    imageUrl: "/src/assets/calendar.png",
    srcProject: ROUTES.CALENDAR
  },
  {
    projectName: "Прогноз погоды",
    description: "Универсальное приложение с подробным прогнозом погоды и барометром.",
    imageUrl: "/src/assets/technical-work.jpg",
    srcProject: ""
  }
]
