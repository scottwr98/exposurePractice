
const reducer = (prevState,action) => {

    if(prevState === undefined){
         return {
            indicators: [
                {"name" : "Apple Computers", "value" : 32},
                {"name" : "Alphabet, Inc.", "value" : 63},                 
                {"name" : "SpaceX", "value" : 95}                                 
            ],
        }

    }

    const updateIndicators = (action) => {
        //return an array of indicator object { name, value }    
        //updates exisitng element by name
        return [...prevState.indicators].map((indicator)=>{
            if (action.name === indicator.name)
                //update existing element
                return { "name" : action.name,  "value" : action.value };
            else
                //no change
                return indicator;
        });

    }

    switch(action.type){
        case 'SET_INDICATOR_VALUE':
            return {
                ...prevState,
                indicators:updateIndicators(action)
            };

        default:
            return prevState;
    }
}

export default reducer;