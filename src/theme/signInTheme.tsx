import tailwind from "tailwind-rn";

export const styles = {
  container: tailwind("flex items-center justify-center"),
  imgLogo: { width: 220 },
  formContainer: tailwind("bg-white rounded-xl p-5 items-center mt-10 w-5/6"),
  title: tailwind("font-bold text-xl text-gray-600 mb-2 text-center"),
  link: tailwind("text-green-700 font-bold my-2"),
};
