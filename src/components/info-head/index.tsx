import React from "react";

type TypeName = {};
export function InfoHead(props: TypeName) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 items-center">
        <h2 className="font-bold capitalize text-3xl">Title</h2>
      </div>
      <p className="text-gray-500 text-sm">
        Modify domain settings, change chatbot options, enter sale questions adn
        train your bot to do what you want it to do.
      </p>
    </div>
  );
}
