import { createContext } from "react";

export const listaTodosEventos = [
    {
      id: 1,
      nome: "Festival de Música Lírica Eletônica",
      data: "25/12/2023",
      url: "https://placehold.co/300x200"
    },
    {
      id: 2,
      nome: "É o Tchan na Selva: Cover",
      data: "12/10/2023",
      url: "https://placehold.co/300x200"
    },
    {
      id: 3,
      nome: "Tributo a Ednaldo Pereira",
      data: "10/08/2023",
      url: "https://placehold.co/300x200"
    }
  ];

export const EventosContexto = createContext('')