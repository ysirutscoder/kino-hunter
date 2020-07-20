import { Injectable } from "@angular/core";
import { GenreInterface } from "./genre.interface";

@Injectable()
export class GenresService {
  private genresList: GenreInterface[] = [
    {
      id: 28,
      name: "Боевики",
      page: 1,
      movies: [],
    },
    {
      id: 12,
      name: "Приключения",
      page: 1,
      movies: [],
    },
    {
      id: 16,
      name: "Мультфильмы",
      page: 1,
      movies: [],
    },
    {
      id: 35,
      name: "Комедии",
      page: 1,
      movies: [],
    },
    {
      id: 80,
      name: "Криминальные",
      page: 1,
      movies: [],
    },
    {
      id: 99,
      name: "Документальные фильмы",
      page: 1,
      movies: [],
    },
    {
      id: 18,
      name: "Драмы",
      page: 1,
      movies: [],
    },
    {
      id: 10751,
      name: "Семейные",
      page: 1,
      movies: [],
    },
    {
      id: 14,
      name: "Фантастика",
      page: 1,
      movies: [],
    },
    {
      id: 36,
      name: "Исторические",
      page: 1,
      movies: [],
    },
    {
      id: 27,
      name: "Ужасы",
      page: 1,
      movies: [],
    },
    {
      id: 10402,
      name: "Мюзиклы",
      page: 1,
      movies: [],
    },
    {
      id: 9648,
      name: "Детективы",
      page: 1,
      movies: [],
    },
    {
      id: 10749,
      name: "Романтические",
      page: 1,
      movies: [],
    },
    {
      id: 878,
      name: "Научная фантастика",
      page: 1,
      movies: [],
    },
    {
      id: 10770,
      name: "Сериалы",
      page: 1,
      movies: [],
    },
    {
      id: 53,
      name: "Триллеры",
      page: 1,
      movies: [],
    },
    {
      id: 10752,
      name: "Военные",
      page: 1,
      movies: [],
    },
    {
      id: 37,
      name: "Вэстерн",
      page: 1,
      movies: [],
    },
  ];

  constructor() {}
}
