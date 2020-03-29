export const updateObject = (oldObject: any, updatedPropertird: any) =>{
    return {
        ...oldObject,
        ...updateObject
    }
}