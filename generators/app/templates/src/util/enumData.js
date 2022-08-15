import {
  getStore
} from "@/util/store.js";
export const getEnumArr = (str) => {
  var enumArr = []
  let enumData = getStore({
    name: 'enumData'
  });
  for (let i in enumData[str]) {
    enumArr.push({
      label: enumData[str][i],
      value: i
    })
  }
  return enumArr;
}
