import tailwind from "tailwind-rn";

export const styles = {
  globalPadding: tailwind("p-5"),
  cardContainer: tailwind(
    "p-4 bg-white rounded-xl justify-between flex-row items-center"
  ),
  nameUser: tailwind("text-2xl text-gray-700 font-bold"),
  small: tailwind("text-xs "),
  title: tailwind("font-bold my-2 text-gray-700 text-xl "),
  itemAccount: tailwind("flex-row items-center my-2"),
  iconContainer: tailwind("bg-gray-200 rounded-full p-2 mr-2"),
};
