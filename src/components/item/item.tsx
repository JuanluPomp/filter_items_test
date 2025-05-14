import React from "react";
import { type Item } from "../../App";
type ItemsProps = {
  handleEditItem: (id: Item["id"]) => void;
  handleDelete: (id: Item["id"]) => void;
  item: Item;
};

export default function Item({
  handleDelete,
  handleEditItem,
  item,
}: ItemsProps) {
  return (
    <div
      className=" flex justify-betweenm items-center space-x-4 border border-gray-300 rounded-sm bg-slate-100 p-2 shadow-md shadow-sky-400"
      key={item.id}
    >
      <div>
        <li className=" font-bold">
          ID: <span className=" font-normal">{item.id}</span>{" "}
        </li>
        <li className=" font-bold">
          Nombre: <span className=" font-normal">{item.text}</span>{" "}
        </li>
        <li className=" font-bold">
          Time: <span className=" font-normal">{item.timestamp}</span>{" "}
        </li>
      </div>
      <div className=" flex flex-col items-center space-y-2 font-semibold">
        <button
          onClick={() => handleEditItem(item.id)}
          className=" border border-gray-300 bg-emerald-500 text-white w-20 rounded-md p-1 hover:bg-emerald-600 cursor-pointer"
        >
          Editar
        </button>
        <button
          role="delete"
          onClick={() => handleDelete(item.id)}
          className=" border border-gray-300 bg-red-500 text-white w-20 rounded-md p-1 hover:bg-red-600 cursor-pointer"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
