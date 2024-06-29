
export const FurnitureDelete = async (id) => {
  await fetch(`http://localhost:3000/cv/${id}`, {
    method: "DELETE",
  });
};
