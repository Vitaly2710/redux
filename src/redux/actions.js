export const increment = (arg) => {
   return{ 
        type: 'INCREMENT',
         payload: arg + 1
    };
};

export default increment