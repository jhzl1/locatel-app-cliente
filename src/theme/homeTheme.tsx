import tailwind from "tailwind-rn";

export const styles = {
  screenPadding: tailwind("px-5 mb-5"),
  userDataContainer: tailwind("my-5"),
  nameUser: tailwind("text-gray-800 font-semibold text-2xl"),
  cardContainer: tailwind("h-56 rounded-xl mb-5 overflow-hidden"),
  cardInside: tailwind("px-3 py-2"),
  stateCardContainer: tailwind("h-32 "),
  cardBalance: tailwind("font-semibold text-2xl mb-2 text-black"),
  black: tailwind("text-black"),
  titleBalance: tailwind("opacity-70 text-xs mb-10"),
  bold: tailwind("font-bold"),
  cardNumbreContainer: tailwind("flex-row w-full justify-between"),
  cardNumber: tailwind("text-center tracking-widest text-lg "),
  title: tailwind("font-bold text-2xl text-gray-800"),

  itemTranscContainer: tailwind(
    "rounded-xl bg-white p-4 my-1 flex-row items-center justify-between"
  ),
  small: tailwind("text-xs"),
  iconContainer: tailwind("rounded-full p-2 mr-3"),
  titleTransc: tailwind("font-bold text-gray-700 text-lg"),
  transcAmount: tailwind("text-gray-700 text-xl"),

  balanceContainer: tailwind(
    "flex-row justify-between bg-white rounded-xl p-2"
  ),
  text: tailwind("text-gray-800"),
};
