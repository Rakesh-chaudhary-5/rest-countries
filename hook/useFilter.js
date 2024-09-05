
export default function useFilter(arr,fValue) {
   
    const abc = arr.filter((e)=>{
        return e.region.toLowerCase().includes(fValue.toLowerCase())
     }) 
   return abc
}
